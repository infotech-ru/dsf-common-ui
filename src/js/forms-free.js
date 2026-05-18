let isListeningDocument = false;
const autofillContexts = new WeakSet();

export function FormsFree(context = document.body, options = {}) {
    const { detectAutofill = false, debug = true } = options;

    // Приведение context к DOM-элементу (для WeakSet и наблюдателей)
    let ctxElement;
    if (typeof context === 'string') {
        ctxElement = document.querySelector(context);
        if (!ctxElement) {
            if (debug) console.warn(`[FormsFree] Элемент "${context}" не найден`);
            return;
        }
    } else if (context && context.jquery) {
        ctxElement = context[0];
    } else if (context && context.nodeType) {
        ctxElement = context;
    } else {
        ctxElement = document.body;
    }

    if (debug) console.log('[FormsFree] Called', { context, detectAutofill, ctxElement });

    if (document.readyState !== 'complete') {
        window.addEventListener('load', () => FormsFree(context, options));
        return;
    }

    // ------------------ Глобальные обработчики (один раз) ------------------
    if (!isListeningDocument) {
        const el = $('#loginform-email').get(0);
        console.log(':-internal-autofill-previewed', el.matches(':-internal-autofill-previewed'));
        console.log(':-internal-autofill-selected', el.matches(':-internal-autofill-selected'));
        isListeningDocument = true;
        if (debug) console.log('[FormsFree] Установка глобальных обработчиков');

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
                if (debug) console.log('[Event] reset on', e.target);
                const $form = $(e.target);
                const $formInputs = $form.find(inputSelector);
                $formInputs
                    .removeClass('valid invalid')
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
                if (debug) console.log('[Select] changed.bs.select', e.target, 'value:', e.target.value);
                updateDropdownLabel(e.target);
            });
    }

    // ------------------ Инициализация существующих полей ------------------
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

    // ------------------ ПРИНУДИТЕЛЬНОЕ ОБНОВЛЕНИЕ ПРИ ФОКУСЕ ------------------
    // Это решает проблему автозаполнения: при фокусе на любом поле внутри контекста обновляем все поля
    $(context).on('focusin', () => {
        if (debug) console.log('[FormsFree] focusin – принудительное обновление всех полей');
        $(inputSelector, context).each((i, input) => {
            updateInputLabel(input);
            validateInput(input);
        });
        $(dropdownSelector, context).each((i, select) => updateDropdownLabel(select));
    });

    // ------------------ Опциональное усиление (polling) ------------------
    if (detectAutofill && !autofillContexts.has(ctxElement)) {
        autofillContexts.add(ctxElement);
        if (debug) console.log('[Autofill] Включён расширенный режим (polling)');
        setupAutofillDetection(ctxElement, debug);
    }
}

// ------------------ Функция усиления (polling) ------------------
function setupAutofillDetection(container, debug = false) {
    if (debug) console.log('[Poll] Запуск polling каждые 300 мс');

    const syncFields = (iteration) => {
        const $inputs = $(container).find(inputSelector).addBack().filter(inputSelector);
        const $selects = $(container).find(dropdownSelector).addBack().filter(dropdownSelector);

        if (debug && iteration % 10 === 0) {
            console.log(`[Poll] Проверка #${iteration} – полей: ${$inputs.length}, селектов: ${$selects.length}`);
        }

        $inputs.each((i, input) => {
            const oldVal = input.dataset.lastSeenValue;
            const newVal = input.value;
            if (oldVal !== newVal) {
                if (debug) console.log(`[Poll] ✨ Изменилось поле: "${oldVal}" → "${newVal}"`, input);
                input.dataset.lastSeenValue = newVal;
                updateInputLabel(input);
                validateInput(input);
                $(input).trigger('input');
            } else if (newVal !== '') {
                // Для надёжности обновляем даже неизменившиеся непустые поля
                if (debug && iteration % 5 === 0) console.log(`[Poll] Принудительное обновление непустого поля: "${newVal}"`);
                updateInputLabel(input);
                validateInput(input);
            }
        });

        $selects.each((i, select) => {
            const oldVal = select.dataset.lastSeenValue;
            const newVal = select.value;
            if (oldVal !== newVal) {
                if (debug) console.log(`[Poll] ✨ Изменился select: "${oldVal}" → "${newVal}"`);
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

    // Дополнительные синхронизации через 1,2,3,5 секунд
    setTimeout(() => syncFields(iteration + 100), 1000);
    setTimeout(() => syncFields(iteration + 101), 2000);
    setTimeout(() => syncFields(iteration + 102), 3000);
    setTimeout(() => syncFields(iteration + 103), 5000);

    // Сохраняем начальные значения
    $(inputSelector, container).each((i, input) => {
        input.dataset.lastSeenValue = input.value;
        if (debug && input.value !== '') console.log(`[Poll] Начальное непустое поле:`, input, input.value);
    });
    $(dropdownSelector, container).each((i, select) => {
        select.dataset.lastSeenValue = select.value;
    });
    if (debug) console.log('[Poll] Начальные значения сохранены, polling активен');

    // Если нужно когда-то остановить – можно вернуть intervalId, но для простоты не останавливаем
}

// ------------------ Остальные функции (без изменений, только добавлен debug-лог) ------------------
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
    console.log('[updateInputLabel]', input, 'value:', input.value);
    const $this = $(input);
    let $labelAndIcon;
    if (!$this.hasClass('comboTreeInputBox')) {
        $labelAndIcon = $this.siblings(labelSelector).length > 0
            ? $this.siblings(labelSelector)
            : $this.parent('.js-formsFreeWrapper').siblings(labelSelector);
    } else {
        $labelAndIcon = $this.closest('.form-group').children(labelSelector);
    }
    const isActive = $this.val().length > 0 || $this.is(':focus') || $this.attr('placeholder') != null;
    const $labelTwitterTypeahead = $this.parents('.twitter-typeahead').siblings(labelSelector);
    $labelAndIcon.toggleClass('active', isActive);
    $labelTwitterTypeahead.toggleClass('active', isActive);
    console.log('[updateInputLabel] isActive =', isActive, 'label(s):', $labelAndIcon);
}

function validateInput(input) {
    const $this = $(input);
    console.log('[validateInput]', input, 'value:', input.value, 'hasClass validate:', $this.hasClass('validate'));
    if ($this.hasClass('validate')) {
        const hasValue = $this.val().length > 0;
        const isValid = getIsValid($this);
        $this.toggleClass('valid', hasValue && isValid).toggleClass('invalid', !isValid);
        console.log('[validateInput] hasValue:', hasValue, 'isValid:', isValid);
    }
}

function updateDropdownLabel(select) {
    console.log('[updateDropdownLabel]', select, 'value:', select.value);
    const $select = $(select);
    const isActive = select.value.length > 0
        || $select.find('option:selected:not(.bs-title-option)').length > 0
        || select.value !== '';
    const $labelAndIcon = $select.closest('div').siblings(labelSelector).length > 0
        ? $select.closest('div').siblings(labelSelector)
        : $select.closest('div').parent('.js-formsFreeWrapper').siblings(labelSelector);
    $labelAndIcon.toggleClass('active', isActive);
    console.log('[updateDropdownLabel] isActive =', isActive);
}