// export { CollapseParent } from 'dsf-common-ui/src/js/CollapseParent';
/**
 * CollapseParent – менеджер для Bootstrap 4 Collapse.
 * Поддерживает:
 * - добавление классов на родителя по событиям show/shown/hide/hidden
 * - массовое открытие/закрытие коллапсов (expandAll)
 * - открытие только первого коллапса в контейнере (expandFirstOnly) с учётом вложенности
 * - открытие коллапсов по ID (expandByIds)
 * - синхронизацию состояния кнопок (классы и aria-expanded)
 *
 * @param {Object} options
 * @param {string} [options.parentSelector='.js-collapse-parent']
 * @param {Object} options.eventHandlers
 * @param {string} [options.wrapperSelector='.js-collapse-wrapper']
 * @param {string} [options.wrapperFirstSelector='.js-collapse-wrapper-with-first']
 * @param {string} [options.expandAllButtonSelector='.js-collapse-expand-all']
 * @param {Object} [options.buttonSync] - синхронизация кнопок
 * @param {string} [options.buttonSync.collapsedClass='collapsed']
 * @param {string} [options.buttonSync.expandedClass]
 * @returns {Object} { init, destroy, expandAll, expandFirstOnly, expandByIds, setWrapperSelector, syncButtonStates }
 */
export function CollapseParent(options = {}) {
    let parentSelector = options.parentSelector || '.js-collapse-parent';
    let eventHandlers = options.eventHandlers || {};
    let wrapperSelector = options.wrapperSelector || '.js-collapse-wrapper';
    let wrapperFirstSelector = options.wrapperFirstSelector || '.js-collapse-wrapper-with-first';
    let expandAllButtonSelector = options.expandAllButtonSelector || '.js-collapse-expand-all';
    let buttonSync = options.buttonSync || { collapsedClass: 'collapsed' };
    const collapsedClass = buttonSync.collapsedClass || 'collapsed';
    const expandedClass = buttonSync.expandedClass || null;

    let jqHandler = null;
    let expandAllHandler = null;

    const syncButtonForCollapse = (collapseElement, isOpen) => {
        if (!collapseElement || !collapseElement.id) return;
        const id = collapseElement.id;
        const $button = $(`[data-target="#${id}"], [href="#${id}"]`);
        if (!$button.length) return;
        if (isOpen) {
            $button.removeClass(collapsedClass);
            if (expandedClass) $button.addClass(expandedClass);
            $button.attr('aria-expanded', 'true');
        } else {
            $button.addClass(collapsedClass);
            if (expandedClass) $button.removeClass(expandedClass);
            $button.attr('aria-expanded', 'false');
        }
    };
    /**
     * Синхронизирует кнопки для всех коллапсов внутри контейнера.
     * @param {jQuery} $container
     */
    const syncButtonStates = ($container) => {
        $container.find('.collapse').each((_, collapse) => {
            const isOpen = $(collapse).hasClass('show');
            syncButtonForCollapse(collapse, isOpen);
        });
    };


    const handleEvent = (event) => {
        const eventType = event.type.split('.')[0]; // 'show', 'shown', 'hide', 'hidden'
        const handler = eventHandlers[eventType];
        if (handler) {
            const collapseElement = event.target;
            const parent = collapseElement.closest(parentSelector);
            if (parent) {
                if (handler.add) {
                    const classes = Array.isArray(handler.add) ? handler.add : [handler.add];
                    parent.classList.add(...classes);
                }
                if (handler.remove) {
                    const classes = Array.isArray(handler.remove) ? handler.remove : [handler.remove];
                    parent.classList.remove(...classes);
                }
            }
        }
        // после завершения анимации обновляем кнопку
        if (eventType === 'shown' || eventType === 'hidden') {
            syncButtonForCollapse(event.target, eventType === 'shown');
        }
    };

    /**
     * Открывает или закрывает все коллапсы внутри указанного контейнера.
     * @param {string|HTMLElement} [container] - контейнер, внутри которого ищем коллапсы.
     *        Если не указан, используется wrapperSelector.
     * @param {boolean} [force] - true: открыть все, false: закрыть все. Если не указан – переключить.
     * @returns {Promise<boolean>} - Promise, который разрешается с true, если после операции все коллапсы открыты, иначе false.
     */

    const expandAll = (container = wrapperSelector, force) => {
        const $container = $(container);
        if (!$container.length) return Promise.resolve(false);
        const $collapses = $container.find('.collapse');
        if (!$collapses.length) return Promise.resolve(false);

        let shouldOpen;
        if (force === true) shouldOpen = true;
        else if (force === false) shouldOpen = false;
        else {
            const anyOpen = $collapses.toArray().some(c => $(c).hasClass('show'));
            shouldOpen = !anyOpen;
        }

        const $toChange = $collapses.filter((_, c) => $(c).hasClass('show') !== shouldOpen);
        if ($toChange.length === 0) return Promise.resolve(shouldOpen);

        return new Promise((resolve) => {
            let completed = 0;
            const onComplete = () => {
                completed++;
                if (completed === $toChange.length) {
                    const allOpen = $collapses.toArray().every(c => $(c).hasClass('show'));
                    resolve(allOpen);
                }
            };
            $toChange.each((_, collapse) => {
                const $c = $(collapse);
                const eventName = shouldOpen ? 'shown.bs.collapse' : 'hidden.bs.collapse';
                $c.one(eventName, onComplete);
                shouldOpen ? $c.collapse('show') : $c.collapse('hide');
            });
        });
    };


    /**
     * Открывает первый коллапс внутри контейнера (любой вложенности) и закрывает все остальные.
     * @param {string|HTMLElement} [container=wrapperFirstSelector]
     * @param {boolean} [syncButtons=true] - синхронизировать кнопки
     * @returns {Promise<void>}
     */
    const expandFirstOnly = (container = wrapperFirstSelector, syncButtons = true) => {
        const $container = $(container);
        if (!$container.length) return Promise.resolve();

        const $allCollapses = $container.find('.collapse');
        if ($allCollapses.length === 0) return Promise.resolve();

        const $first = $allCollapses.first();
        const $others = $allCollapses.slice(1);
        const promises = [];

        // закрываем остальные
        $others.each((_, collapse) => {
            const $c = $(collapse);
            if ($c.hasClass('show')) {
                promises.push(new Promise(resolve => {
                    $c.one('hidden.bs.collapse', resolve);
                    $c.collapse('hide');
                }));
            }
        });

        // открываем первый, если закрыт
        if (!$first.hasClass('show')) {
            promises.push(new Promise(resolve => {
                $first.one('shown.bs.collapse', resolve);
                $first.collapse('show');
            }));
        }

        return Promise.all(promises).then(() => {
            if (syncButtons) syncButtonStates($container);
        });
    };

    // ========== Метод: открыть коллапсы по переданным ID ==========
    /**
     * Открывает коллапсы с указанными ID.
     * @param {string|string[]} ids - ID элементов коллапса (можно строку с пробелами или массив).
     * @param {string|HTMLElement} [container] - контейнер, внутри которого искать (если не указан – ищет по всему документу).
     * @param {boolean} [closeOthers=true] - закрывать ли остальные коллапсы в том же контейнере.
     */
    const expandByIds = (ids, container = null, closeOthers = true, syncButtons = true) => {
        let idList = Array.isArray(ids) ? ids : ids.split(/\s+/);
        idList = idList.filter(id => id);
        if (!idList.length) return Promise.resolve();

        const selector = idList.map(id => `#${id}`).join(',');
        const $targets = $(selector);
        if (!$targets.length) return Promise.resolve();

        let $allCollapses = container ? $(container).find('.collapse') : $('.collapse');
        const promises = [];

        if (closeOthers) {
            $allCollapses.not($targets).each((_, collapse) => {
                const $c = $(collapse);
                if ($c.hasClass('show')) {
                    promises.push(new Promise(resolve => {
                        $c.one('hidden.bs.collapse', resolve);
                        $c.collapse('hide');
                    }));
                }
            });
        }

        $targets.each((_, collapse) => {
            const $c = $(collapse);
            if (!$c.hasClass('show')) {
                promises.push(new Promise(resolve => {
                    $c.one('shown.bs.collapse', resolve);
                    $c.collapse('show');
                }));
            }
        });

        return Promise.all(promises).then(() => {
            if (syncButtons) {
                const $syncContainer = container ? $(container) : $(document.body);
                syncButtonStates($syncContainer);
            }
        });
    };

    // ========== Метод для смены контейнера по умолчанию ==========
    /**
     * Позволяет динамически изменить контейнер для expandAll (например, после AJAX-загрузки).
     * @param {string} selector - новый селектор контейнера.
     */
    const setWrapperSelector = (selector) => {
        wrapperSelector = selector;
    };

    // ========== Инициализация и уничтожение ==========
    const init = () => {
        // Подписка на события Bootstrap 4 через jQuery
        jqHandler = (jqEvent) => handleEvent(jqEvent.originalEvent || jqEvent);
        $(document).on(
            'show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse',
            jqHandler
        );

        // Делегированный обработчик для кнопки expandAll (поддерживает динамически добавленные кнопки)
        if (expandAllButtonSelector) {
            expandAllHandler = (e) => {
                e.preventDefault();
                const $button = $(e.currentTarget);
                if ($button.hasClass('processing')) return;
                $button.addClass('processing');
                let container = $button.data('wrapper') || wrapperSelector;
                expandAll(container).then(allOpen => {
                    allOpen ? $button.addClass('isActive') : $button.removeClass('isActive');
                }).finally(() => $button.removeClass('processing'));
            };
            $(document).on('click', expandAllButtonSelector, expandAllHandler);
        }

        // console.log('✅ CollapseParent: инициализирован');
    };

    const destroy = () => {
        if (jqHandler) $(document).off('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', jqHandler);
        if (expandAllHandler && expandAllButtonSelector) $(document).off('click', expandAllButtonSelector, expandAllHandler);
        // console.log('🛑 CollapseParent: уничтожен');
    };

    return {
        init,
        destroy,
        expandAll,          // теперь возвращает Promise
        expandFirstOnly,
        expandByIds,
        setWrapperSelector,
        syncButtonStates
    };
}