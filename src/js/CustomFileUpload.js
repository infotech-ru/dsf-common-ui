 /**
 * Функция для кастомной загрузки файлов с поддержкой динамически добавляемых элементов
 *
 * ИСПОЛЬЗОВАНИЕ: https://infotech-ru.github.io/dsf-common-ui/forms.html#upload
 *
 * <div class="js-customFileUploadItem">
 *  <?= $form->field($model, 'file', ['options' => ['class' => 'd-none js-customFileUploadItem']])->fileInput(['class' => 'form-control js-customFileUploadInput', id="<?= $this->getId() ?>"])->label(false); ?>
 *  <label class="btn-download btn-download__large w-100p" for="<?= $this->getId() ?>">
 *    <span class="btn-download_inner">
 *      <?= Icons::wrapper('bicolors-doc__24vb', ['class' => 'svg--icon svg--icon__h21']) ?>
 *      <span class="btn-text"><?= Yii::t('app', 'Добавить файл') ?></span>
 *    </span>
 *  </label>
 *    <div class="d-flex align-center gap-5 pt-5 pb-5 d-none js-fileUploadLabel">
 *      <?= Icons::wrapper('bicolors-doc__24vb', ['class' => 'svg--icon svg--icon__20']) ?>
 *    <div class="js-fileUploadLabelText"></div>
 *  </div>
 *  <div class="fz11 text-grey4 mt-10">
 *    <?= Yii::t('app', 'Типы файлов *.pdf, *.doc, *.docx, *.jpg, *.jpeg, *.png, *.xls, *.xlsx, *.zip, *.rar, *.odd, *.txt. Макс. размер 80 Mb') ?>
 *  </div>
 *</div>
 *
 * Инициализация:
 *
 * // Простая инициализация со значениями по умолчанию
 * CustomFileUpload();
 *
 * // Или с кастомными настройками
 * const fileUpload = CustomFileUpload({
 *   inputSelector: '.custom-file-input',
 *   itemSelector: '.file-upload-item',
 *   labelSelector: '.file-label',
 *   labelTextSelector: '.file-name',
 *   hideClass: 'is-hidden'
 * });
 *
 * 3. Динамическое добавление элементов:
 *
 * // Элементы, добавленные после инициализации, будут работать автоматически
 * const newElement = document.createElement('div');
 * newElement.className = 'js-customFileUploadItem';
 * newElement.innerHTML = `...`;
 * document.body.appendChild(newElement);
 *
 * 4. Публичные методы (при использовании с options):
 *
 * fileUpload.addItem(element)    - ручное добавление обработчика к элементу
 * fileUpload.destroy()           - удаление всех обработчиков
 *
 * КЛАССЫ ПО УМОЛЧАНИЮ:
 * - .js-customFileUploadInput   - поле input type="file"
 * - .js-customFileUploadItem    - контейнер элемента загрузки
 * - .js-fileUploadLabel         - метка для отображения имени файла
 * - .js-fileUploadLabelText     - текст внутри метки
 * - .d-none                     - класс для скрытия элементов (по умолчанию)
 */

export function CustomFileUpload(options = {}) {
    const {
        inputSelector = '.js-customFileUploadInput',
        itemSelector = '.js-customFileUploadItem',
        labelSelector = '.js-fileUploadLabel',
        labelTextSelector = '.js-fileUploadLabelText',
        container = document.body,
        hideClass = 'd-none'
    } = options;

    container.addEventListener('change', handleFileInputChange);

    initializeExistingElements();

    function handleFileInputChange(event) {
        const input = event.target;
        if (!input.matches(inputSelector)) return;

        const fieldUploadSelectorItem = input.closest(itemSelector);
        if (!fieldUploadSelectorItem) {
            console.warn(`No parent element with selector "${itemSelector}" found for input`);
            return;
        }

        updateFileDisplay(fieldUploadSelectorItem, input);
    }

    function updateFileDisplay(item, input) {
        const file = input.files.item(0);
        const fileUploadLabel = item.querySelector(labelSelector);
        const fileUploadLabelText = item.querySelector(labelTextSelector);

        if (fileUploadLabel) {
            if (file && file.name) {
                fileUploadLabel.classList.remove(hideClass);
            } else {
                fileUploadLabel.classList.add(hideClass);
            }
        }

        if (fileUploadLabelText) {
            fileUploadLabelText.textContent = file && file.name ? file.name : fileUploadLabelText.textContent;
        }
    }

    function initializeExistingElements() {
        const fieldUploadSelectorItems = document.querySelectorAll(itemSelector);

        fieldUploadSelectorItems.forEach((item, index) => {
            const input = item.querySelector(inputSelector);

            if (!input) {
                console.warn(`No input with selector "${inputSelector}" found in item ${index}`);
                return;
            }

            updateFileDisplay(item, input);
        });
    }

    function addItem(element) {
        const input = element.querySelector(inputSelector);

        if (!input) {
            console.warn(`No input with selector "${inputSelector}" found in provided element`);
            return;
        }

        if (input.dataset.customFileUploadInitialized) {
            return;
        }

        input.addEventListener('change', function(event) {
            const fieldUploadSelectorItem = event.target.closest(itemSelector);
            if (fieldUploadSelectorItem) {
                updateFileDisplay(fieldUploadSelectorItem, event.target);
            }
        });

        input.dataset.customFileUploadInitialized = 'true';
        updateFileDisplay(element, input);
    }

    function destroy() {
        container.removeEventListener('change', handleFileInputChange);
    }

    return {
        addItem,
        destroy,
        updateFileDisplay
    };
}