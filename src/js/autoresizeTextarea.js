export function AutoresizeTextarea(options = {}) {
    const {
        selector = '.js-formControl__resize',
        context = document,
        minHeight = null,
        maxHeight = null,
        onResize = null,
        debug = false
    } = options;

    function log(...args) {
        if (debug) {
            console.log('[AutoresizeTextarea]', ...args);
        }
    }

    let searchContext;
    if (context instanceof Element || context instanceof Document) {
        searchContext = context;
        log('Контекст – DOM-элемент/документ');
    } else if (typeof context === 'string') {
        searchContext = document.querySelector(context);
        log('Контекст – CSS-селектор, найден:', !!searchContext);
        if (!searchContext) {
            console.warn('[AutoresizeTextarea] Контекст не найден:', context);
            return;
        }
    } else {
        searchContext = document;
        log('Контекст – document по умолчанию');
    }

    const elements = searchContext.querySelectorAll(selector);
    log('Найдено элементов:', elements.length);

    if (elements.length === 0) {
        console.warn('[AutoresizeTextarea] Не найдено ни одного элемента по селектору:', selector);
        return;
    }

    // Фабрика для создания функции resize с текущими параметрами
    function createResize(textarea, minH, maxH, onResizeCb, debugFlag) {
        return function resize() {
            // Сбрасываем высоту, чтобы scrollHeight стал актуальным
            textarea.style.height = 'auto';
            // scrollHeight включает padding и border (в зависимости от box-sizing, но это стандартно)
            let newHeight = textarea.scrollHeight;

            if (debugFlag) {
                console.log('[AutoresizeTextarea] scrollHeight:', newHeight);
            }

            // Применяем ограничения
            if (minH !== null) {
                newHeight = Math.max(newHeight, minH);
            }
            if (maxH !== null) {
                newHeight = Math.min(newHeight, maxH);
            }

            // Устанавливаем высоту
            textarea.style.height = newHeight + 'px';

            // Управление прокруткой
            if (maxH !== null && newHeight >= maxH) {
                textarea.style.overflowY = 'auto';
            } else {
                textarea.style.overflowY = 'hidden';
            }

            if (debugFlag) {
                console.log('[AutoresizeTextarea] итоговая высота:', newHeight);
            }

            if (onResizeCb && typeof onResizeCb === 'function') {
                onResizeCb(textarea, newHeight);
            }
        };
    }

    elements.forEach((textarea) => {
        // Если элемент уже инициализирован – обновляем параметры
        if (textarea.hasAttribute('data-autoresize-initialized')) {
            log('Элемент уже инициализирован, обновляем параметры');
            const newResize = createResize(
                textarea,
                minHeight,
                maxHeight,
                onResize,
                debug
            );
            textarea.updateAutoresize = newResize;
            newResize(); // применяем сразу
            return;
        }

        // Первичная инициализация
        log('Инициализация нового элемента');

        const resizeFn = createResize(
            textarea,
            minHeight,
            maxHeight,
            onResize,
            debug
        );

        textarea.updateAutoresize = resizeFn;

        // Начальные стили
        textarea.style.overflowY = 'hidden';
        resizeFn();

        // Подписка на события
        const handler = () => textarea.updateAutoresize();
        textarea.addEventListener('input', handler);
        textarea.addEventListener('change', handler);
        textarea.addEventListener('propertychange', handler);

        // Сохраняем обработчик на случай, если понадобится удалить
        textarea._autoresizeHandler = handler;

        textarea.setAttribute('data-autoresize-initialized', 'true');
        log('Элемент успешно инициализирован');
    });
}