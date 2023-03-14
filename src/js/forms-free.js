let isListeningDocument = false;

export function FormsFree() {
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
            })
            .on('changed.bs.select', allDropdownSelector, e => {
                updateDropdownLabel(e.target);
            });
    }

    $(inputSelector).each((index, input) => updateInputLabel(input));

    $(dateSelector).each((index, input) => input.type = 'text');

    $(dropdownSelector).each((index, select) => updateDropdownLabel(select));
    
    $(allDropdownSelector).each((index, select) => updateDropdownLabel(select));
}

const inputTypes = [
        'text',
        'password',
        'email',
        'url',
        'tel',
        'number',
        'search',
        'search-md'
    ],
    inputSelector = inputTypes.map(selector => `input[type=${selector}]`).concat(['textarea']).join(','),
    dateSelector = 'input[type="date"]',
    dropdownSelector = 'select.js-select-formFree',
    allDropdownSelector = '.js-allSelect-formFree select',
    labelSelector = 'label, i';

function getIsValid($input) {
    const maxLength = Number($input.attr('length')) || 0;

    return $input.is(':valid') && (!maxLength || maxLength > value.length);
}

function updateInputLabel(input) {
    const $this = $(input),
        $labelAndIcon = $this.siblings(labelSelector),
        isActive = $this.val().length > 0
      || $this.is(':focus')
      || $this.attr('placeholder') != null;

    $labelAndIcon.toggleClass('active', isActive);
}

function validateInput(input) {
    const $this = $(input);

    if ($this.hasClass('validate')) {
        const hasValue = $this.val().length > 0,
            isValid = getIsValid($this);

        $this
            .toggleClass('valid', hasValue && isValid)
            .toggleClass('invalid', !isValid);
    }
}

function updateDropdownLabel(select) {
    const $select = $(select),
        isActive = select.value.length > 0
      || $select.find('option:selected:not(.bs-title-option)').length > 0;

    $select.closest('div').siblings(labelSelector).toggleClass('active', isActive);
}


// TODO: сбрасывать значение при нажатие удаления значения.
// $(el).val('default').selectpicker("refresh");