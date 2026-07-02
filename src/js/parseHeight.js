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

/**
 * Вспомогательная функция для поиска родителя с обратной совместимостью:
 * сначала ищет ближайшего предка по классу, если не найден – глобально через document.querySelector.
 * @param {Element} container - контейнер, для которого ищем родителя
 * @param {string} parentClass - класс родителя (без точки)
 * @returns {Element|null}
 */
function findParent(container, parentClass) {
    // Ищем ближайшего предка с данным классом
    let parent = container.closest(`.${parentClass}`);
    if (parent) return parent;

    // Fallback: глобальный поиск (для обратной совместимости)
    parent = document.querySelector(`.${parentClass}`);
    if (parent) {
        console.warn(
            `Родитель с классом "${parentClass}" найден глобально, а не как предок контейнера. ` +
            `Для уникальности рекомендуется размещать родителя выше в иерархии.`
        );
        return parent;
    }
    return null;
}

export function ParseHeight(containerSelector = ".js-target-set-height") {
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
        const setType = container.dataset.setType || "height";
        const formula = container.dataset.setFormula;
        const targetClass = container.dataset.targetClass || "js-target-get-height";
        const parentClass = container.dataset.parentClass || "js-target-parent-get-height";
        const paddingClass = container.dataset.paddingClass || "js-target-get-padding";
        const marginClass = container.dataset.marginClass || "js-target-get-margin";

        const targetSelector = `.${targetClass}`;
        const paddingSelector = `.${paddingClass}`;
        const marginSelector = `.${marginClass}`;

        // Поиск родителя с fallback для обратной совместимости
        const parent = findParent(container, parentClass);
        if (!parent) {
            console.warn(`Родитель с классом "${parentClass}" не найден для контейнера`, container);
            return;
        }

        const totalHeight = computeTotalHeight(parent, targetSelector);
        if (totalHeight === null) {
            console.warn(`Не удалось вычислить высоту для контейнера`, container);
            return;
        }

        let totalPadding = computeTotalPadding(parent, paddingSelector);
        if (totalPadding === null || totalPadding === 0) {
            totalPadding = computeParentPadding(parent);
        }
        if (totalPadding === null) totalPadding = 0;

        let totalMargin = computeTotalMargin(parent, marginSelector);
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

export function EnableHeightWatch(containerSelector, options = {}) {
    if (!containerSelector) {
        console.error("EnableHeightWatch: требуется указать containerSelector");
        return false;
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => EnableHeightWatch(containerSelector, options));
        return false;
    }

    if (activeWatches.has(containerSelector)) {
        return true;
    }

    const { trackResize = true, trackTargetChanges = true } = options;

    const updateFn = () => ParseHeight(containerSelector);

    let resizeHandler = null;
    if (trackResize) {
        resizeHandler = () => updateFn();
        window.addEventListener("resize", resizeHandler);
    }

    let mutationObserver = null;
    if (trackTargetChanges) {
        const containers = document.querySelectorAll(containerSelector);
        if (containers.length === 0) {
            console.warn(`Нет контейнеров для отслеживания по селектору "${containerSelector}"`);
            if (resizeHandler) window.removeEventListener("resize", resizeHandler);
            return false;
        }

        const targetElementsSet = new Set();
        containers.forEach(container => {
            const targetClass = container.dataset.targetClass || "js-target-get-height";
            const parentClass = container.dataset.parentClass || "js-target-parent-get-height";
            const paddingClass = container.dataset.paddingClass || "js-target-get-padding";
            const marginClass = container.dataset.marginClass || "js-target-get-margin";

            // Используем ту же функцию findParent для согласованности
            const parent = findParent(container, parentClass);
            if (!parent) return;

            targetElementsSet.add(parent);

            const targetSelector = `.${targetClass}`;
            const paddingSelector = `.${paddingClass}`;
            const marginSelector = `.${marginClass}`;

            parent.querySelectorAll(targetSelector).forEach(el => targetElementsSet.add(el));
            parent.querySelectorAll(paddingSelector).forEach(el => targetElementsSet.add(el));
            parent.querySelectorAll(marginSelector).forEach(el => targetElementsSet.add(el));
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

    activeWatches.set(containerSelector, {
        resizeHandler,
        mutationObserver,
        updateFn
    });

    updateFn();
    return true;
}

export function DisableHeightWatch(containerSelector = null) {
    if (containerSelector === null) {
        const selectors = Array.from(activeWatches.keys());
        selectors.forEach(sel => DisableHeightWatch(sel));
        return;
    }

    const watchData = activeWatches.get(containerSelector);
    if (!watchData) return;

    if (watchData.resizeHandler) {
        window.removeEventListener("resize", watchData.resizeHandler);
    }
    if (watchData.mutationObserver) {
        watchData.mutationObserver.disconnect();
    }

    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
        const setType = container.dataset.setType || "height";
        container.style[setType] = "";
    });

    activeWatches.delete(containerSelector);
}

// Вспомогательные функции (без изменений, кроме сигнатуры – теперь принимают DOM-элемент)
function computeTotalHeight(parent, targetSelector) {
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

function computeTotalPadding(parent, paddingSelector) {
    if (!parent) return null;
    const elements = parent.querySelectorAll(paddingSelector);
    if (elements.length === 0) return null;

    let total = 0;
    elements.forEach(el => {
        const style = window.getComputedStyle(el);
        total += (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
    });
    return total === 0 ? null : total;
}

function computeParentPadding(parent) {
    if (!parent) return null;
    const style = window.getComputedStyle(parent);
    const total = (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
    return total === 0 ? null : total;
}

function computeTotalMargin(parent, marginSelector) {
    if (!parent) return null;
    const elements = parent.querySelectorAll(marginSelector);
    if (elements.length === 0) return null;

    let total = 0;
    elements.forEach(el => {
        const style = window.getComputedStyle(el);
        total += (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);
    });
    return total === 0 ? null : total;
}