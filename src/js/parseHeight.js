/**
 * Вычисляет общую высоту всех элементов с указанным классом (по умолчанию "js-target-get-height")
 * внутри общего родителя (по умолчанию "js-target-parent-get-height") с учётом отступов.
 * Результат подставляется в CSS-свойство (height / max-height / min-height) контейнера.
 *
 * Дополнительно:
 *   - Суммируются внутренние отступы (padding-top + padding-bottom) у элементов с классом
 *     из data-padding-class (по умолчанию "js-target-get-padding"). Если такие элементы не найдены,
 *     учитываются padding самого родителя (js-target-parent-get-height).
 *   - Суммируются внешние отступы (margin-top + margin-bottom) у элементов с классом
 *     из data-margin-class (по умолчанию "js-target-get-margin").
 *
 * В формуле (data-set-formula) доступны плейсхолдеры:
 *   {height}  - суммарная высота целевых элементов (с их margin)
 *   {padding} - суммарные внутренние отступы
 *   {margin}  - суммарные внешние отступы
 *   {total}   - height + padding + margin
 *
 * Для каждого контейнера можно задать свои классы целей и родителя через
 * data-target-class, data-parent-class, data-padding-class, data-margin-class.
 *
 * @param {string} containerSelector - CSS-селектор контейнеров, для которых нужно установить высоту.
 *                                      По умолчанию ".js-target-set-height".
 */
const activeWatches = new Map(); // key: containerSelector, value: { resizeHandler, observers }

export function ParseHeight(containerSelector = ".js-target-set-height") {
    // Если DOM ещё не загружен, ждём события
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => ParseHeight(containerSelector));
        return;
    }

    const containers = document.querySelectorAll(containerSelector);
    if (containers.length === 0) {
        // console.log(`Нет контейнеров по селектору "${containerSelector}"`);
        return;
    }

    containers.forEach(container => {
        // Получаем настройки из data-атрибутов
        const setType = container.dataset.setType || "height";         // height / maxHeight / minHeight
        const formula = container.dataset.setFormula;                  // например "calc(100vh - {height} - {padding})"
        const targetClass = container.dataset.targetClass || "js-target-get-height";
        const parentClass = container.dataset.parentClass || "js-target-parent-get-height";
        const paddingClass = container.dataset.paddingClass || "js-target-get-padding";
        const marginClass = container.dataset.marginClass || "js-target-get-margin";

        const parentSelector = `.${parentClass}`;
        const targetSelector = `.${targetClass}`;
        const paddingSelector = `.${paddingClass}`;
        const marginSelector = `.${marginClass}`;

        // 1) Суммарная высота целевых элементов
        const totalHeight = computeTotalHeight(parentSelector, targetSelector);
        if (totalHeight === null) {
            console.warn(`Не удалось вычислить высоту для контейнера`, container);
            return;
        }

        // 2) Суммарные внутренние отступы: сначала ищем по paddingClass,
        //    если элементов нет — берём padding самого родителя
        let totalPadding = computeTotalPadding(parentSelector, paddingSelector);
        if (totalPadding === null || totalPadding === 0) {
            totalPadding = computeParentPadding(parentSelector);
        }
        if (totalPadding === null) totalPadding = 0;

        // 3) Суммарные внешние отступы по отдельному классу marginClass
        let totalMargin = computeTotalMargin(parentSelector, marginSelector);
        if (totalMargin === null) totalMargin = 0;

        const totalValue = totalHeight + totalPadding + totalMargin;

        let cssValue;
        if (formula) {
            cssValue = formula
                .replace(/\{height\}/g, totalHeight + "px")
                .replace(/\{padding\}/g, totalPadding + "px")
                .replace(/\{margin\}/g, totalMargin + "px")
                .replace(/\{total\}/g, totalValue + "px");
        } else {
            cssValue = totalValue + "px";
        }

        container.style[setType] = cssValue;
    });
    return true;
}

/**
 * Включить автоматическое обновление высоты для указанного селектора контейнеров.
 * При изменениях (ресайз окна, изменения целевых элементов) будет пересчитывать и устанавливать высоту.
 * @param {string} containerSelector - селектор контейнеров (обязательный)
 * @param {Object} options - настройки
 * @param {boolean} options.trackResize - следить за resize окна (по умолч. true)
 * @param {boolean} options.trackTargetChanges - следить за изменениями целевых элементов (по умолч. true)
 */
export function EnableHeightWatch(containerSelector, options = {}) {
    if (!containerSelector) {
        console.error("EnableHeightWatch: требуется указать containerSelector");
        return false;
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => EnableHeightWatch(containerSelector, options));
        return false;
    }

    // Если уже отслеживается, ничего не делаем
    if (activeWatches.has(containerSelector)) {
        // console.log(`Отслеживание для "${containerSelector}" уже активно`);
        return true;
    }

    const { trackResize = true, trackTargetChanges = true } = options;

    // Функция обновления (вызывает ParseHeight только для этого селектора)
    const updateFn = () => ParseHeight(containerSelector);

    // Обработчики
    let resizeHandler = null;
    if (trackResize) {
        resizeHandler = () => updateFn();
        window.addEventListener("resize", resizeHandler);
    }

    // MutationObserver для отслеживания изменений целевых элементов
    let mutationObserver = null;
    if (trackTargetChanges) {
        // Найдём все контейнеры, чтобы получить их data-атрибуты и определить целевые элементы
        const containers = document.querySelectorAll(containerSelector);
        if (containers.length === 0) {
            console.warn(`Нет контейнеров для отслеживания по селектору "${containerSelector}"`);
            if (resizeHandler) window.removeEventListener("resize", resizeHandler);
            return false;
        }

        // Собираем уникальные элементы для наблюдения (target + padding + margin + parent)
        const targetElementsSet = new Set();
        containers.forEach(container => {
            const targetClass = container.dataset.targetClass || "js-target-get-height";
            const parentClass = container.dataset.parentClass || "js-target-parent-get-height";
            const paddingClass = container.dataset.paddingClass || "js-target-get-padding";
            const marginClass = container.dataset.marginClass || "js-target-get-margin";

            const parentSelector = `.${parentClass}`;
            const targetSelector = `.${targetClass}`;
            const paddingSelector = `.${paddingClass}`;
            const marginSelector = `.${marginClass}`;

            const parent = document.querySelector(parentSelector);
            if (parent) {
                // Сам родитель — на случай изменения его padding
                targetElementsSet.add(parent);

                const targets = parent.querySelectorAll(targetSelector);
                targets.forEach(el => targetElementsSet.add(el));

                const paddings = parent.querySelectorAll(paddingSelector);
                paddings.forEach(el => targetElementsSet.add(el));

                const margins = parent.querySelectorAll(marginSelector);
                margins.forEach(el => targetElementsSet.add(el));
            }
        });

        if (targetElementsSet.size > 0) {
            mutationObserver = new MutationObserver(() => updateFn());
            const targetNodes = Array.from(targetElementsSet);
            targetNodes.forEach(node => {
                mutationObserver.observe(node, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                    attributeFilter: ['style', 'class']
                });
            });
        }
    }

    // Сохраняем состояние
    activeWatches.set(containerSelector, {
        resizeHandler,
        mutationObserver,
        updateFn
    });

    // Выполним первый расчёт
    updateFn();
    return true;
}

/**
 * Отключить автоматическое обновление высоты для указанного селектора.
 * При этом стирает ранее установленные inline-стили высоты для всех контейнеров селектора.
 * @param {string} containerSelector - селектор контейнеров. Если не указан, отключает всё.
 */
export function DisableHeightWatch(containerSelector = null) {
    if (containerSelector === null) {
        // Отключаем всё
        const selectors = Array.from(activeWatches.keys());
        selectors.forEach(sel => DisableHeightWatch(sel));
        return;
    }

    const watchData = activeWatches.get(containerSelector);
    if (!watchData) {
        // console.log(`Отслеживание для "${containerSelector}" не было активно`);
        return;
    }

    // Удаляем обработчики resize
    if (watchData.resizeHandler) {
        window.removeEventListener("resize", watchData.resizeHandler);
    }

    // Отключаем MutationObserver
    if (watchData.mutationObserver) {
        watchData.mutationObserver.disconnect();
    }

    // Стираем установленные стили для всех контейнеров по этому селектору
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
        // Определяем, какое свойство было установлено
        const setType = container.dataset.setType || "height";
        container.style[setType] = "";
    });

    activeWatches.delete(containerSelector);
    // console.log(`Отслеживание для "${containerSelector}" отключено, стили стёрты`);
}

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

/**
 * Вычисляет суммарные внутренние отступы (padding-top + padding-bottom)
 * у элементов с указанным селектором внутри родителя.
 * @param {string} parentSelector - селектор родительского элемента
 * @param {string} paddingSelector - селектор элементов, чьи padding нужно учесть
 * @returns {number|null} сумма padding в пикселях или null, если элементов нет
 */
function computeTotalPadding(parentSelector, paddingSelector) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return null;

    const elements = parent.querySelectorAll(paddingSelector);
    if (elements.length === 0) return null;

    let total = 0;
    elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const paddingTop = parseFloat(style.paddingTop) || 0;
        const paddingBottom = parseFloat(style.paddingBottom) || 0;
        total += paddingTop + paddingBottom;
    });
    return total === 0 ? null : total;
}

/**
 * Вычисляет внутренние отступы самого родительского элемента.
 * @param {string} parentSelector - селектор родительского элемента
 * @returns {number|null} сумма padding-top + padding-bottom или null
 */
function computeParentPadding(parentSelector) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return null;

    const style = window.getComputedStyle(parent);
    const paddingTop = parseFloat(style.paddingTop) || 0;
    const paddingBottom = parseFloat(style.paddingBottom) || 0;
    const total = paddingTop + paddingBottom;
    return total === 0 ? null : total;
}

/**
 * Вычисляет суммарные внешние отступы (margin-top + margin-bottom)
 * у элементов с указанным селектором внутри родителя.
 * @param {string} parentSelector - селектор родительского элемента
 * @param {string} marginSelector - селектор элементов, чьи margin нужно учесть
 * @returns {number|null} сумма margin в пикселях или null, если элементов нет
 */
function computeTotalMargin(parentSelector, marginSelector) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return null;

    const elements = parent.querySelectorAll(marginSelector);
    if (elements.length === 0) return null;

    let total = 0;
    elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const marginTop = parseFloat(style.marginTop) || 0;
        const marginBottom = parseFloat(style.marginBottom) || 0;
        total += marginTop + marginBottom;
    });
    return total === 0 ? null : total;
}
