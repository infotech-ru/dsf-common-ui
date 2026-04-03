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
