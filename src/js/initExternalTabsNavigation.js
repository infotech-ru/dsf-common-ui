// import { Tabs } from "./Tabs.js";
/**
  * Инициализирует обработку кликов по элементам с заданным селектором
 * для открытия вкладок tabs.js (Bootstrap 3), загрузки контента (через Tabs.loadTab),
 * плавной прокрутки и выполнения пользовательского действия.
 * 
 * @param {Object} options
 * @param {string} options.triggerSelector - селектор элементов-триггеров (по умолчанию '.js-goToTab')
 * @param {string} options.tabLinkSelector - селектор ссылок вкладок (по умолчанию 'a[data-toggle="tab"]')
 * @param {string} options.scrollTarget - селектор элемента для прокрутки (по умолчанию '.js-scrollToNav')
 * @param {number} options.scrollOffset - отступ сверху в px (по умолчанию 20)
 * @param {number} options.scrollDelay - задержка перед прокруткой в мс (по умолчанию 200)
 * @param {number} options.scrollDuration - длительность анимации в мс (по умолчанию 500)
 * @param {boolean} options.preventDefault - отменять стандартное действие ссылки (по умолчанию true)
 * @param {Function} options.onAfterClick - функция, вызываемая после активации вкладки и загрузки контента.
 *        Принимает параметры: ($trigger, $tabLink, tabId)
 */
export function initExternalTabsNavigation(options = {}) {
  
    if (typeof $.fn.tab === 'undefined') {
        console.error('initExternalTabsNavigation: Bootstrap tab.js не загружен');
        return;
    }

    const settings = {
        triggerSelector: '.js-goToTab',
        tabLinkSelector: 'a[data-toggle="tab"]',
        scrollTarget: '.js-scrollToNav',
        scrollOffset: 20,
        scrollDelay: 200,
        scrollDuration: 500,
        preventDefault: true,
        onAfterClick: null, 
        ...options
    };

    function smoothScrollTo($element) {
        if (!$element || !$element.length) return false;
        const elementPosition = $element.offset().top;
        const scrollPosition = elementPosition - settings.scrollOffset;
        $('html, body').animate({ scrollTop: scrollPosition }, settings.scrollDuration);
        return true;
    }
   

    $(document).on('click', settings.triggerSelector, function(event) {
        const $trigger = $(this);

        let target = $trigger.data('target') || $trigger.attr('href');
        if (!target || target === '#') {
            console.warn(`${settings.triggerSelector}: не указан target вкладки (data-target или href)`);
            return;
        }

        const tabId = target.startsWith('#') ? target : '#' + target;

        let $tabLink = $(`${settings.tabLinkSelector}[href="${tabId}"]`);

        if ($tabLink.length === 0) {
            console.warn(`${settings.triggerSelector}: не найдена ссылка вкладки для "${tabId}"`);
            return;
        }

        if (settings.preventDefault) {
            event.preventDefault();
        }

        $tabLink.tab('show');

        const $li = $tabLink.closest('li');
        let loadPromise = Promise.resolve();

        if ($li.length && Tabs && typeof Tabs.loadTab === 'function') {
            loadPromise = Tabs.loadTab($li);
        }

        loadPromise.then(() => {
            if (typeof settings.onAfterClick === 'function') {
                settings.onAfterClick($trigger, $tabLink, tabId);
            }

            const scrollSelector = $trigger.data('scroll-to') || settings.scrollTarget;
            const $scrollElement = $(scrollSelector);
            if ($scrollElement.length) {
                setTimeout(() => {
                    smoothScrollTo($scrollElement);
                }, settings.scrollDelay);
            } else {
                console.warn(`${settings.triggerSelector}: элемент для прокрутки не найден ("${scrollSelector}")`);
            }
        }).catch(err => {
            console.error('Ошибка загрузки вкладки:', err);
        });
    });
}
