export function CustomFileUpload(selector = '.js-customFileUploadInput') {
    let fieldUploadSelectorItems = document.querySelectorAll('.js-customFileUploadItem')
    for (let i = 0; i < fieldUploadSelectorItems.length; i++) {
        let fieldUploadSelectorItem = fieldUploadSelectorItems[i]
        // console.log('input' + i + ':' + fieldUploadSelectorItem);
        let fieldUploadSelectorInput = fieldUploadSelectorItem.querySelector(selector)
        // console.log('input'+ i + ':' + fieldUploadSelectorInput);
        fieldUploadSelectorInput.onchange = function () {
            // console.log(fieldUploadSelectorInput.files.item(0));
            if ((fieldUploadSelectorItem.querySelector('.js-fileUploadLabel')) && (fieldUploadSelectorInput.files.item(0).name) != '') {
                fieldUploadSelectorItem.querySelector('.js-fileUploadLabel').classList.remove('d-none')
            }
            else {
                fieldUploadSelectorItem.querySelector('.js-fileUploadLabel').classList.add('d-none')
            }
            if (fieldUploadSelectorItem.querySelector('.js-fileUploadLabelText')) {
                let fileUploadLabelText = fieldUploadSelectorItem.querySelector('.js-fileUploadLabelText')
                fileUploadLabelText.innerHTML = fieldUploadSelectorInput.files.item(0).name
            }
        };
    }
}
 