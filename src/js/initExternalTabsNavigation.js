// import { Tabs } from "Tabs.js"; // из папки assets/js
/**
 * Инициализирует обработку кликов по элементам с классом 'js-goToTab'
 * для открытия вкладок Bootstrap 3 и плавной прокрутки к ним.
 * 
 * @param {Object} options
 * @param {string} options.tabLinkSelector - селектор ссылок вкладок (по умолчанию 'a[data-toggle="tab"]')
 * @param {string} options.scrollTarget - селектор элемента для прокрутки (по умолчанию '.js-scrollToNav')
 * @param {number} options.scrollOffset - отступ сверху в px (по умолчанию 20)
 * @param {number} options.scrollDelay - задержка перед прокруткой в мс (по умолчанию 200)
 * @param {number} options.scrollDuration - длительность анимации в мс (по умолчанию 500)
 * @param {boolean} options.preventDefault - отменять стандартное действие ссылки (по умолчанию true)
 */
export function initExternalTabsNavigation(options = {}) {
  
    if (typeof $.fn.tab === 'undefined') {
        console.error('initExternalTabsNavigation: Bootstrap tab.js не загружен');
        return;
    }

    const settings = {
        tabLinkSelector: 'a[data-toggle="tab"]',
        scrollTarget: '.js-scrollToNav',
        scrollOffset: 20,
        scrollDelay: 200,
        scrollDuration: 500,
        preventDefault: true,
        ...options
    };

    function smoothScrollTo($element) {
        if (!$element || !$element.length) return false;
        const elementPosition = $element.offset().top;
        const scrollPosition = elementPosition - settings.scrollOffset;
        $('html, body').animate({ scrollTop: scrollPosition }, settings.scrollDuration);
        return true;
    }
   

    $(document).on('click', '.js-goToTab', function(event) {
        const $trigger = $(this);

        let target = $trigger.data('target') || $trigger.attr('href');
        if (!target || target === '#') {
            console.warn('js-goToTab: не указан target вкладки (data-target или href)');
            return;
        }

        // Нормализуем target (добавляем #, если нужно)
        const tabId = target.startsWith('#') ? target : '#' + target;

        let $tabLink = $(`${settings.tabLinkSelector}[href="${tabId}"]`);

        if ($tabLink.length === 0) {
            console.warn(`js-goToTab: не найдена ссылка вкладки для "${tabId}"`);
            return;
        }

        // Отменяем переход по ссылке, если нужно
        if (settings.preventDefault) {
            event.preventDefault();
        }

        $tabLink.tab('show');
        
        // Загружаем содержимое через Ajax, если нужно
        const $li = $tabLink.closest('li');
        if ($li.length) Tabs.loadTab($li);

        const scrollSelector = $trigger.data('scroll-to') || settings.scrollTarget;
        const $scrollElement = $(scrollSelector);

        if ($scrollElement.length) {
            // Даём время Bootstrap на переключение вкладки и перерисовку
            setTimeout(() => {
                smoothScrollTo($scrollElement);
            }, settings.scrollDelay);
        } else {
            console.warn(`js-goToTab: элемент для прокрутки не найден ("${scrollSelector}")`);
        }
    });
}
