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
        if (!parent) return null;

        const targets = parent.querySelectorAll(targetSelector);
        if (targets.length === 0) return null;

        let total = 0;
        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) return;
            const style = window.getComputedStyle(el);
            const marginTop = parseFloat(style.marginTop) || 0;
            const marginBottom = parseFloat(style.marginBottom) || 0;
            total += rect.height + marginTop + marginBottom;
        });
        return total === 0 ? null : total;
    }
}