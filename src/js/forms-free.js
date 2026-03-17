let isListeningDocument = false;

export function FormsFree(context) {
    if (document.readyState !== 'complete'){
        window.addEventListener('load', function(){
            FormsFree();
        });
    }

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
            // .on('change', comboTreeSelector, e => {
            //     updateComboTreeLabel(e.target);
            // });
    }

    $(inputSelector, context).each((index, input) => updateInputLabel(input));

    $(dateSelector, context).each((index, input) => input.type = 'text');

    $(dropdownSelector, context).each((index, select) => updateDropdownLabel(select));

    // $(comboTreeSelector, context).each((index, select) => updateComboTreeLabel(select));
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
    inputSelector = inputTypes.map(selector => `input[type=${selector}]`).concat(['textarea:not(.js-summernote)']).join(','),
    dateSelector = 'input[type="date"]',
    dropdownSelector = 'select.js-select-formFree, .js-allSelect-formFree select',
    labelSelector = 'label, i';
    // const comboTreeSelector = 'select.js-comboTree-select';

function getIsValid($input) {
    const maxLength = Number($input.attr('length')) || 0;

    return $input.is(':valid') && (!maxLength || maxLength > $input.val().length);
}

function updateInputLabel(input) {
    const $this = $(input)
        
    let $labelAndIcon
    if (!$this.hasClass('comboTreeInputBox')) {
        $labelAndIcon = $this.siblings(labelSelector).length > 0 ? $this.siblings(labelSelector) : $this.parent('.js-formsFreeWrapper').siblings(labelSelector)
    } else {
        $labelAndIcon = $this.closest('.form-group').children(labelSelector)
    }

    const isActive = $this.val().length > 0
      || $this.is(':focus')
      || $this.attr('placeholder') != null,
        $labelTwitterTypeahead = $this.parents('.twitter-typeahead').siblings(labelSelector);

    $labelAndIcon.toggleClass('active', isActive);
    $labelTwitterTypeahead.toggleClass('active', isActive);
    $this.hasClass('comboTreeInputBox') 
    // && console.log($labelAndIcon, isActive);
    
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
            || $select.find('option:selected:not(.bs-title-option)').length > 0
            || select.value !== '',
    $labelAndIcon = $select.closest('div').siblings(labelSelector).length > 0
        ? $select.closest('div').siblings(labelSelector)
        : $select.closest('div').parent('.js-formsFreeWrapper').siblings(labelSelector);
    $labelAndIcon.toggleClass('active', isActive);
}


// function updateComboTreeLabel(select) {
// const escapedSelectValue = CSS.escape(select.value);
// const isActive = select.value !== ''
//     || $(select).find('option[value="' + escapedSelectValue + '"]').length > 0; // ComboTree не помечает выбранным option с пустым значением (prompt) при инициализации
// const $labelAndIcon = $(select).siblings(labelSelector).length > 0
//     ? $(select).siblings(labelSelector)
//     : $(select).parent('.js-formsFreeWrapper').siblings(labelSelector);
// $labelAndIcon.toggleClass('active', isActive);
// }
