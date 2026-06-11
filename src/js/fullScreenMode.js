/**
 * Управление полноэкранным режимом интерфейса.
 * @param {Object} options
 * @param {Function} [options.onActivate] - вызывается при ВХОДЕ в полноэкранный режим
 * @param {Function} [options.onDeactivate] - вызывается при ВЫХОДЕ из полноэкранного режима
 * @param {string} [options.activeClass="active"] - класс для кнопки .js-fullScreenModeActive
 * @param {string} [options.bodyClass="fullScreenMode"] - класс для body
 */
export function FullScreenMode(options = {}) {
    const {
        onActivate = null,
        onDeactivate = null,
        activeClass = "active",
        bodyClass = "fullScreenMode"
    } = options;

    // Обработчик основной кнопки переключения
    $(document).on('click', '.js-fullScreenModeActive', function (e) {
        e.preventDefault();
        const $body = $("body");
        const isActive = $body.hasClass(bodyClass);
        
        if (!isActive) {
            // Включаем полноэкранный режим
            $body.addClass(bodyClass);
            $(this).addClass(activeClass);
            if (typeof onActivate === 'function') onActivate();
        } else {
            // Выключаем полноэкранный режим
            $body.removeClass(bodyClass);
            $(this).removeClass(activeClass);
            if (typeof onDeactivate === 'function') onDeactivate();
        }
    });

    // Обработчик кнопки принудительной деактивации
    $(document).on('click', '.js-fullScreenModeDeActivate', function (e) {
        const $body = $("body");
        if ($body.hasClass(bodyClass)) {
            $body.removeClass(bodyClass);
            $(".js-fullScreenModeActive").removeClass(activeClass);
            if (typeof onDeactivate === 'function') onDeactivate();
        }
    });
}