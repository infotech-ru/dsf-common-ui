/**
 * CollapseParent – менеджер для добавления/удаления CSS-классов у родительского элемента
 * в зависимости от событий collapse.js (Bootstrap 4) (show, shown, hide, hidden).
 *
 * Особенности:
 * - Работает с динамически подгружаемыми коллапсами (AJAX).
 * - Использует jQuery для надёжного перехвата событий Bootstrap 4.
 * - Позволяет задать произвольный селектор родителя и любые наборы классов для каждого события.
 *
 * @param {Object} options - настройки менеджера.
 * @param {string} [options.parentSelector='.js-collapse-parent'] - CSS-селектор родительского элемента,
 *        относительно которого будут применяться классы.
 * @param {Object} options.eventHandlers - объект с обработчиками для событий:
 *        - show:   { add: string|string[], remove: string|string[] }
 *        - shown:  { add: string|string[], remove: string|string[] }
 *        - hide:   { add: string|string[], remove: string|string[] }
 *        - hidden: { add: string|string[], remove: string|string[] }
 *        Каждое свойство (add/remove) опционально.
 *
 * @returns {Object} Публичное API: { init, destroy }
 *
 * @example
 * const manager = CollapseParent({
 *   parentSelector: '.accordion-item',
 *   eventHandlers: {
 *     show:   { add: 'opening', remove: 'collapsed' },
 *     shown:  { add: 'expanded', remove: 'opening' },
 *     hide:   { add: 'closing', remove: 'expanded' },
 *     hidden: { add: 'collapsed', remove: 'closing' }
 *   }
 * });
 * manager.init();
 */

export function CollapseParent(options = {}) {

    const parentSelector = options.parentSelector || '.js-collapse-parent';
    const eventHandlers = options.eventHandlers || {};
  
  
    const handleEvent = (event) => {
        // console.log('🔔 Collapse event:', event.type);
        
        const eventType = event.type.split('.')[0];
        const handler = eventHandlers[eventType];
        if (!handler) return;

        const collapseElement = event.target;
        const parent = collapseElement.closest(parentSelector);
        if (!parent) return;

        if (handler.add) {
            const classes = Array.isArray(handler.add) ? handler.add : [handler.add];
            parent.classList.add(...classes);
        }

        if (handler.remove) {
            const classes = Array.isArray(handler.remove) ? handler.remove : [handler.remove];
            parent.classList.remove(...classes);
        }
        
    };
    let jqHandler = null;
    
    const init = () => {
        jqHandler = (event) => handleEvent(event.originalEvent || event);

        $(document).on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', jqHandler);
        // console.log('✅ CollapseParent: jQuery слушатели добавлены');
    };

    const destroy = () => {
        if (jqHandler) {
            $(document).off('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', jqHandler);
            // console.log('🛑 CollapseParent: слушатели удалены');
        }
    };
    
    return { init, destroy };
}
