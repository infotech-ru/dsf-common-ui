let isListeningDocument = false;
const autofillContexts = new WeakSet();

export function FormsFree(context = document.body, options = {}) {
    const { detectAutofill = false, debug = true } = options;
    
    let ctxElement;
    if (typeof context === 'string') {
        ctxElement = document.querySelector(context);
        if (!ctxElement) {
            console.warn(`FormsFree: элемент по селектору "${context}" не найден`);
            return;
        }
    } else if (context && context.jquery) {
        ctxElement = context[0];
    } else if (context && context.nodeType) {
        ctxElement = context;
    } else {
        ctxElement = document.body;
    }
    
    if (debug) console.log('[FormsFree] Called with', { context, detectAutofill, ctxElement });
    
    if (document.readyState !== 'complete') {
        if (debug) console.log('[FormsFree] Document not ready, waiting for load');
        window.addEventListener('load', () => FormsFree(context, options));
        return;
    }

    if (!isListeningDocument) {
        isListeningDocument = true;
        if (debug) console.log('[FormsFree] Installing global event handlers');
        
        $(document)
            .on('focus blur change input', inputSelector, e => {
                if (debug) console.log(`[Event] ${e.type} on`, e.target, 'value:', e.target.value);
                updateInputLabel(e.target);
            })
            .on('blur change input', inputSelector, e => {
                if (debug) console.log(`[Validation] ${e.type} on`, e.target);
                validateInput(e.target);
            })
            .on('reset', 'form', e => {
                if (debug) console.log('[Event] reset on form', e.target);
                const $form = $(e.target);
                const $formInputs = $form.find(inputSelector);
                $formInputs
                    .removeClass('valid')
                    .removeClass('invalid')
                    .each((index, input) => updateInputLabel(input));
                $form.find('select.initialized').each((index, select) => {
                    const $select = $(select);
                    const $visibleInput = $select.siblings('input.select-dropdown');
                    const defaultValue = $select.children('[selected]').val();
                    $select.val(defaultValue);
                    $visibleInput.val(defaultValue);
                });
            })
            .on('focus', dateSelector, e => {
                if (debug) console.log('[Date] focus on', e.target);
                e.target.type = 'date';
            })
            .on('blur', dateSelector, e => {
                if (debug) console.log('[Date] blur on', e.target);
                e.target.type = 'text';
                $(`label[for="${e.target.id}"]`).removeClass('active');
            })
            .on('changed.bs.select', dropdownSelector, e => {
                if (debug) console.log('[Select] changed.bs.select on', e.target, 'value:', e.target.value);
                updateDropdownLabel(e.target);
            })
            .on('animationstart', `${inputSelector}, ${dateSelector}, ${dropdownSelector}`, e => {
                const animName = e.originalEvent?.animationName || e.animationName;
                if (debug) console.log('[Animation] animationstart on', e.target, 'animation:', animName);
                if (animName && (animName.includes('autofill') || animName.includes('fill'))) {
                    if (debug) console.log('[Autofill] Detected autofill animation, forcing update');
                    updateInputLabel(e.target);
                    if ($(e.target).is(inputSelector)) validateInput(e.target);
                    if ($(e.target).is(dropdownSelector)) updateDropdownLabel(e.target);
                    $(e.target).trigger('change');
                }
            });
    }

    if (debug) console.log('[FormsFree] Initializing existing fields in context');
    $(inputSelector, context).each((index, input) => {
        updateInputLabel(input);
        validateInput(input);
        if (debug) console.log(`[Init] input #${index}`, input, 'value:', input.value);
    });
    $(dateSelector, context).each((index, input) => {
        input.type = 'text';
        updateInputLabel(input);
        if (debug) console.log(`[Init] date #${index}`, input, 'value:', input.value);
    });
    $(dropdownSelector, context).each((index, select) => {
        updateDropdownLabel(select);
        if (debug) console.log(`[Init] select #${index}`, select, 'value:', select.value);
    });

    if (detectAutofill && !autofillContexts.has(ctxElement)) {
        autofillContexts.add(ctxElement);
        if (debug) console.log('[Autofill] Enabling enhanced detection (polling) for', ctxElement);
        setupAutofillDetection(ctxElement, debug);
        setTimeout(() => {
            $(inputSelector, ctxElement).each((i, input) => {
                if (input.value.length > 0) {
                    updateInputLabel(input);
                    validateInput(input);
                }
            });
        }, 500);
    }
}

function setupAutofillDetection(container, debug = false) {
    if (debug) console.log('[Poll] Starting aggressive polling every 300ms');
    
    // Функция синхронизации – вызывается каждый раз
    const syncFields = (iteration) => {
        const $inputs = $(container).find(inputSelector).addBack().filter(inputSelector);
        const $selects = $(container).find(dropdownSelector).addBack().filter(dropdownSelector);
        
        // Каждые ~7 итераций (2 секунды) выводим текущие значения
        if (debug && iteration % 7 === 0) {
            $inputs.each((i, input) => {
                console.log(`[Poll] Current value of ${input.id || input.name || 'input'}: "${input.value}"`);
            });
        }
        
        $inputs.each((i, input) => {
            const oldVal = input.dataset.lastSeenValue;
            const newVal = input.value;
            if (oldVal !== newVal) {
                console.log(`[Poll] ✨ Input changed: ${input.id || input.name} "${oldVal}" -> "${newVal}"`);
                input.dataset.lastSeenValue = newVal;
                updateInputLabel(input);
                validateInput(input);
                $(input).trigger('input');
            } else if (newVal !== '') {
                // Поле не пустое – принудительно обновляем лейбл (на случай, если он пропущен)
                updateInputLabel(input);
                validateInput(input);
            }
        });
        
        $selects.each((i, select) => {
            const oldVal = select.dataset.lastSeenValue;
            const newVal = select.value;
            if (oldVal !== newVal) {
                console.log(`[Poll] ✨ Select changed: "${oldVal}" -> "${newVal}"`);
                select.dataset.lastSeenValue = newVal;
                updateDropdownLabel(select);
                $(select).trigger('change');
            }
        });
    };
    
    let iteration = 0;
    const intervalId = setInterval(() => {
        iteration++;
        syncFields(iteration);
    }, 300);
    
    // Дополнительные проверки через 1, 2, 3, 5 секунд для уверенности
    const forcedSync = (delay) => {
        setTimeout(() => {
            if (debug) console.log(`[Poll] Forced sync after ${delay}ms`);
            syncFields(iteration + 100); // большой номер, чтобы не спамить в лог
        }, delay);
    };
    forcedSync(1000);
    forcedSync(2000);
    forcedSync(3000);
    forcedSync(5000);
    
    // Сохраняем начальные значения
    $(inputSelector, container).each((i, input) => {
        input.dataset.lastSeenValue = input.value;
        if (debug && input.value !== '') console.log(`[Poll] Initial non-empty value:`, input, input.value);
    });
    $(dropdownSelector, container).each((i, select) => {
        select.dataset.lastSeenValue = select.value;
    });
    if (debug) console.log('[Poll] Initial values stored, polling active (every 300ms)');
    
    // Останавливать polling не будем, но при желании можно вернуть функцию остановки
    return intervalId;
}

const inputTypes = ['text', 'password', 'email', 'url', 'tel', 'number', 'search', 'search-md'];
const inputSelector = inputTypes.map(selector => `input[type=${selector}]`).concat(['textarea:not(.js-summernote)']).join(',');
const dateSelector = 'input[type="date"]';
const dropdownSelector = 'select.js-select-formFree, .js-allSelect-formFree select';
const labelSelector = 'label, i';

function getIsValid($input) {
    const maxLength = Number($input.attr('length')) || 0;
    return $input.is(':valid') && (!maxLength || maxLength > $input.val().length);
}

function updateInputLabel(input) {
    console.log('[updateInputLabel] called for', input, 'value:', input.value); // всегда выводим для отладки
    console.log('[updateInputLabel] for', input, 'found label(s):', $labelAndIcon);
    const $this = $(input);
    let $labelAndIcon;
    if (!$this.hasClass('comboTreeInputBox')) {
        $labelAndIcon = $this.siblings(labelSelector).length > 0 ? $this.siblings(labelSelector) : $this.parent('.js-formsFreeWrapper').siblings(labelSelector);
    } else {
        $labelAndIcon = $this.closest('.form-group').children(labelSelector);
    }
    const isActive = $this.val().length > 0 || $this.is(':focus') || $this.attr('placeholder') != null;
    const $labelTwitterTypeahead = $this.parents('.twitter-typeahead').siblings(labelSelector);
    $labelAndIcon.toggleClass('active', isActive);
    $labelTwitterTypeahead.toggleClass('active', isActive);
    console.log('[updateInputLabel] isActive =', isActive, 'label classes toggled');
}

function validateInput(input) {
    const $this = $(input);
    console.log('[validateInput] called for', input, 'value:', input.value, 'hasClass validate:', $this.hasClass('validate'));
    if ($this.hasClass('validate')) {
        const hasValue = $this.val().length > 0;
        const isValid = getIsValid($this);
        $this.toggleClass('valid', hasValue && isValid).toggleClass('invalid', !isValid);
        console.log('[validateInput] hasValue:', hasValue, 'isValid:', isValid, 'classes set');
    }
}

function updateDropdownLabel(select) {
    console.log('[updateDropdownLabel] called for', select, 'value:', select.value);
    const $select = $(select);
    const isActive = select.value.length > 0 || $select.find('option:selected:not(.bs-title-option)').length > 0 || select.value !== '';
    const $labelAndIcon = $select.closest('div').siblings(labelSelector).length > 0
        ? $select.closest('div').siblings(labelSelector)
        : $select.closest('div').parent('.js-formsFreeWrapper').siblings(labelSelector);
    $labelAndIcon.toggleClass('active', isActive);
    console.log('[updateDropdownLabel] isActive =', isActive);
}