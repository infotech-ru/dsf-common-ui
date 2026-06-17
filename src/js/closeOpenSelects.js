import $ from 'jquery';

/**
 * Закрывает все открытые в данный момент bootstrap-select на странице.
 */
export function closeOpenSelects() {
    $('.bootstrap-select.open select').each(function() {
        const $select = $(this);
        if ($select.length) {
            $select.selectpicker('toggle');
        }
    });
}

/**
 * Добавляет глобальный обработчик клика, который закрывает все открытые select,
 * если клик произошёл на одном из указанных контекстов.
 * @param {string|string[]|function} selectors - CSS-селектор(ы) или функция-предикат,
 *        принимающая jQuery-объект цели клика и событие, возвращающая boolean.
 */
export function setupCloseSelectOnClick(selectors) {
    document.addEventListener('click', function(e) {
        const $target = $(e.target);
        let shouldClose = false;

        if (typeof selectors === 'function') {
            shouldClose = selectors($target, e);
        } else if (Array.isArray(selectors)) {
            for (let selector of selectors) {
                if ($target.closest(selector).length) {
                    shouldClose = true;
                    break;
                }
            }
        } else if (selectors) {
            // строка
            if ($target.closest(selectors).length) {
                shouldClose = true;
            }
        }

        if (shouldClose) {
            closeOpenSelects();
        }
    }, true);
}

/**
 * Готовый обработчик для закрытия при клике на элементы ComboTree.
 * Это частный случай setupCloseSelectOnClick, предоставленный для удобства.
 */
export function closeSelectOnComboTreeClick() {
    setupCloseSelectOnClick([
        '.comboTreeWrapper',
        '.comboTreeDropDownContainer',
        '.comboTreeInputWrapper',
        '.comboTreeItem',
        '.comboTreeItemTitle'
    ]);
}