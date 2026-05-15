let isListeningDocument = false;
const autofillContexts = new WeakSet(); // отслеживаем уже усиленные контексты

export function FormsFree(context, options = {}) {
    const { detectAutofill = false } = options;
    
    console.log('FormsFree called', { context, detectAutofill });
    
    if (document.readyState !== 'complete') {
        window.addEventListener('load', () => FormsFree(context, options));
        return;
    }

    // ----- Глобальные обработчики (один раз) -----
    if (!isListeningDocument) {
        isListeningDocument = true;

        $(document)
            .on('focus blur change', inputSelector, e => updateInputLabel(e.target))
            .on('blur change', inputSelector, e => validateInput(e.target))
            .on('reset', 'form', e => {
                const $form = $(e.target),
                    $formInputs = $form.find(inputSelector);

                $formInputs
                    .removeClass('valid')
                    .removeClass('invalid')
                    .each((index, input) => updateInputLabel(input));

                $form.find('select.initialized').each((index, select) => {
                    const $select = $(select),
                        $visibleInput = $select.siblings('input.select-dropdown'),
                        defaultValue = $select.children('[selected]').val();

                    $select.val(defaultValue);
                    $visibleInput.val(defaultValue);
                });
            })
            .on('focus', dateSelector, e => {
                e.target.type = 'date';
            })
            .on('blur', dateSelector, e => {
                e.target.type = 'text';
                $(`label[for="${e.target.id}"]`).removeClass('active');
            })
            .on('changed.bs.select', dropdownSelector, e => {
                updateDropdownLabel(e.target);
            });
    }

    // ----- Инициализация существующих полей (всегда) -----
    $(inputSelector, context).each((index, input) => updateInputLabel(input));
    $(dateSelector, context).each((index, input) => input.type = 'text');
    $(dropdownSelector, context).each((index, select) => updateDropdownLabel(select));

    // ----- Опциональное усиление для отслеживания автозаполнения -----
    if (detectAutofill && !autofillContexts.has(context)) {
        autofillContexts.add(context);
        setupAutofillDetection(context);
    }
}

// ---------- НОВАЯ ФУНКЦИЯ ДЛЯ УСИЛЕННОГО РЕЖИМА ----------
function setupAutofillDetection(context) {
    console.log('Autofill detection enabled for context', context);

    // 1. MutationObserver – перехватывает изменение атрибута value
    const valueObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                const target = mutation.target;
                if (target.oldValue === target.value) return;
                
                updateInputLabel(target);
                if ($(target).is(inputSelector)) validateInput(target);
                if ($(target).is(dropdownSelector)) updateDropdownLabel(target);
                $(target).trigger('change');
            }
        });
    });

    // Наблюдаем за всеми полями внутри контекста
    const observeFields = () => {
        const fields = $(context)
            .find(`${inputSelector}, ${dateSelector}, ${dropdownSelector}`)
            .addBack()
            .filter(`${inputSelector}, ${dateSelector}, ${dropdownSelector}`)
            .get();
        fields.forEach(field => {
            if (field.__formsFreeObserved) return;
            field.__formsFreeObserved = true;
            valueObserver.observe(field, {
                attributes: true,
                attributeOldValue: true,
                attributeFilter: ['value']
            });
        });
    };

    // Наблюдаем за динамически добавляемыми полями внутри контекста
    const domObserver = new MutationObserver(mutations => {
        let needObserve = false;
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && (
                    $(node).is(`${inputSelector}, ${dateSelector}, ${dropdownSelector}`) ||
                    $(node).find(`${inputSelector}, ${dateSelector}, ${dropdownSelector}`).length
                )) {
                    needObserve = true;
                }
            });
        });
        if (needObserve) observeFields();
    });
    domObserver.observe(context, { childList: true, subtree: true });

    observeFields(); // первичный обход

    // 2. Периодическая проверка (fallback) – работает 5 секунд
    let checksCount = 0;
    const intervalId = setInterval(() => {
        const $inputs = $(context).find(inputSelector).addBack().filter(inputSelector);
        const $selects = $(context).find(dropdownSelector).addBack().filter(dropdownSelector);
        let changed = false;

        $inputs.each((i, input) => {
            const oldVal = input.dataset.lastSeenValue;
            const newVal = input.value;
            if (oldVal !== newVal) {
                input.dataset.lastSeenValue = newVal;
                updateInputLabel(input);
                validateInput(input);
                $(input).trigger('change');
                changed = true;
            }
        });

        $selects.each((i, select) => {
            const oldVal = select.dataset.lastSeenValue;
            const newVal = select.value;
            if (oldVal !== newVal) {
                select.dataset.lastSeenValue = newVal;
                updateDropdownLabel(select);
                $(select).trigger('change');
                changed = true;
            }
        });

        checksCount++;
        if (checksCount > 10) { // 10 * 500ms = 5 секунд
            clearInterval(intervalId);
            console.log('Autofill fallback interval stopped');
        }
    }, 500);

    // Останавливаем интервал при первом взаимодействии пользователя внутри контекста
    $(context).one('focus change', `${inputSelector}, ${dropdownSelector}`, () => {
        if (intervalId) clearInterval(intervalId);
    });

    // Сохраняем начальные значения в dataset.lastSeenValue
    $(inputSelector, context).each((i, input) => {
        input.dataset.lastSeenValue = input.value;
    });
    $(dropdownSelector, context).each((i, select) => {
        select.dataset.lastSeenValue = select.value;
    });
}

const inputTypes = [
    'text', 'password', 'email', 'url', 'tel', 'number', 'search', 'search-md'
];
const inputSelector = inputTypes.map(selector => `input[type=${selector}]`).concat(['textarea:not(.js-summernote)']).join(',');
const dateSelector = 'input[type="date"]';
const dropdownSelector = 'select.js-select-formFree, .js-allSelect-formFree select';
const labelSelector = 'label, i';

function getIsValid($input) {
    const maxLength = Number($input.attr('length')) || 0;
    return $input.is(':valid') && (!maxLength || maxLength > $input.val().length);
}

function updateInputLabel(input) {
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
}

function validateInput(input) {
    const $this = $(input);
    if ($this.hasClass('validate')) {
        const hasValue = $this.val().length > 0;
        const isValid = getIsValid($this);
        $this.toggleClass('valid', hasValue && isValid).toggleClass('invalid', !isValid);
    }
}

function updateDropdownLabel(select) {
    const $select = $(select);
    const isActive = select.value.length > 0 || $select.find('option:selected:not(.bs-title-option)').length > 0 || select.value !== '';
    const $labelAndIcon = $select.closest('div').siblings(labelSelector).length > 0
        ? $select.closest('div').siblings(labelSelector)
        : $select.closest('div').parent('.js-formsFreeWrapper').siblings(labelSelector);
    $labelAndIcon.toggleClass('active', isActive);
}