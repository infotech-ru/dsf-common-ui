/**
 * Вычисляет общую высоту всех элементов с указанным классом (по умолчанию "js-target-get-height")
 * внутри общего родителя (по умолчанию "js-target-parent-get-height") с учётом отступов.
 * Результат подставляется в CSS-свойство (height / max-height / min-height) контейнера.
 * Возможно использование формулы из data-атрибута data-set-formula, где {height} заменяется на вычисленное значение.
 * Для каждого контейнера можно задать свои классы целей и родителя через data-target-class и data-parent-class.
 *
 * @param {string} containerSelector - CSS-селектор контейнеров, для которых нужно установить высоту.
 *                                      По умолчанию ".js-target-set-height".
 */
export function ParseHeight(containerSelector = ".js-target-set-height") {
    // Если DOM ещё не загружен, ждём события
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => ParseHeight(containerSelector));
        return;
    }

    const containers = document.querySelectorAll(containerSelector);
    if (containers.length === 0) {
        console.log(`Нет контейнеров по селектору "${containerSelector}"`);
        return;
    }

    containers.forEach(container => {
        // Получаем настройки из data-атрибутов
        const setType = container.dataset.setType || "height";         // height / maxHeight / minHeight
        const formula = container.dataset.setFormula;                  // например "calc(100vh - {height})"
        const targetClass = container.dataset.targetClass || "js-target-get-height";
        const parentClass = container.dataset.parentClass || "js-target-parent-get-height";

        const parentSelector = `.${parentClass}`;
        const targetSelector = `.${targetClass}`;

        const totalHeight = computeTotalHeight(parentSelector, targetSelector);
        if (totalHeight === null) {
            console.warn(`Не удалось вычислить высоту для контейнера`, container);
            return;
        }

        let cssValue;
        if (formula && formula.includes("{height}")) {
            cssValue = formula.replace(/\{height\}/g, totalHeight + "px");
        } else {
            cssValue = totalHeight + "px";
        }

        container.style[setType] = cssValue;
    });

    /**
     * Вычисляет общую высоту, занимаемую элементами targetSelector внутри parentSelector,
     * с учётом их положения в документе (используются координаты относительно документа).
     * @param {string} parentSelector - селектор родительского элемента
     * @param {string} targetSelector - селектор целевых элементов
     * @returns {number|null} высота в пикселях или null, если расчёт невозможен
     */
    function computeTotalHeight(parentSelector, targetSelector) {
        const parent = document.querySelector(parentSelector);
        if (!parent) {
            console.warn(`Родитель "${parentSelector}" не найден`);
            return null;
        }

        const targets = parent.querySelectorAll(targetSelector);
        if (targets.length === 0) {
            console.warn(`Нет элементов "${targetSelector}" внутри родителя`);
            return null;
        }
        
        let minTop = Infinity;
    let maxBottom = -Infinity;
    let marginTopOfMin = 0;
    let marginBottomOfMax = 0;
    let topmostElement = null;
    let bottommostElement = null;

    targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Пропускаем невидимые элементы
        if (rect.width === 0 && rect.height === 0) return;

        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;

        // Ищем самый верхний элемент
        if (top < minTop) {
            minTop = top;
            topmostElement = el;
        }
        // Ищем самый нижний элемент
        if (bottom > maxBottom) {
            maxBottom = bottom;
            bottommostElement = el;
        }
    });

    if (minTop === Infinity || maxBottom === -Infinity) {
        console.warn(`Не удалось определить координаты целевых элементов`);
        return null;
    }

    // Получаем margin только для крайних элементов
    const getMargin = (el, isTop) => {
        if (!el) return 0;
        const style = window.getComputedStyle(el);
        const marginTop = parseFloat(style.marginTop) || 0;
        const marginBottom = parseFloat(style.marginBottom) || 0;
        return isTop ? marginTop : marginBottom;
    };

    const marginTopFirst = getMargin(topmostElement, true);
    const marginBottomLast = getMargin(bottommostElement, false);

    // Итоговая высота = расстояние между крайними точками + внешние margin
    const totalHeight = (maxBottom - minTop) + marginTopFirst + marginBottomLast;

    console.log(`Родитель: ${parentSelector}, элементов: ${targets.length}, высота с margin: ${totalHeight}px`);
    return totalHeight;
    }
}