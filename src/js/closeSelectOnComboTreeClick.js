export function closeSelectOnComboTreeClick() {
    document.addEventListener('click', function(e) {
        const $target = $(e.target);
        const isComboTree = $target.closest('.comboTreeWrapper, .comboTreeDropDownContainer, .comboTreeInputWrapper, .comboTreeItem, .comboTreeItemTitle').length > 0;

        if (isComboTree) {
            // console.log('Клик внутри comboTree, закрываем select');
            $('.bootstrap-select.open select').each(function() {
                const $select = $(this);
                if ($select.length) {
                    $select.selectpicker('toggle');
                }
            });
        }
    }, true);
}