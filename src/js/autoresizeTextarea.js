export function AutoresizeTextarea(options = {}) {
    const {
        selector = '.js-formControl__resize',
        context = document,
        minHeight = null,
        maxHeight = null,
        onResize = null
    } = options;
    
    let elements;
    console.log('вход');
    let searchContext;
    if (context instanceof Element || context instanceof Document) {
        searchContext = context;
        console.log(searchContext, '1');
    } else if (typeof context === 'string') {
        searchContext = document.querySelector(context);
        console.log(searchContext, '2');
        if (!searchContext) {
            console.warn('AutoresizeTextareaFlexible: контекст не найден', context);
            console.log('3');
            return;
        }
    } else {
        searchContext = document;
        console.log(searchContext, '4');
    }
    
    elements = searchContext.querySelectorAll(selector);
    
    elements.forEach(textarea => {
        console.log('найдено');
        if (textarea.hasAttribute('data-autoresize-initialized')) {
            return;
        }
        
        // const style = window.getComputedStyle(textarea);
        // const paddingTop = parseFloat(style.paddingTop) || 0;
        // const paddingBottom = parseFloat(style.paddingBottom) || 0;
        
        function resize() {
            textarea.style.height = '28px';
            // let contentHeight = textarea.scrollHeight - paddingTop - paddingBottom;
            let contentHeight = textarea.scrollHeight;
            
            if (minHeight !== null) {
                contentHeight = Math.max(contentHeight, minHeight);
            }
            
            if (maxHeight !== null) {
                contentHeight = Math.min(contentHeight, maxHeight);
            }
            
            textarea.style.height = contentHeight + 'px';
            
            if (onResize && typeof onResize === 'function') {
                onResize(textarea, contentHeight);
            }
        }
        
        textarea.style.overflowY = 'hidden';
        resize();
        
        textarea.addEventListener('input', resize);
        textarea.addEventListener('change', resize);
        textarea.addEventListener('propertychange', resize);
        
        textarea.updateAutoresize = resize;
        
        textarea.setAttribute('data-autoresize-initialized', 'true');
    });
}