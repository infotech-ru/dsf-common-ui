let isListeningDocument = false;

export function initCopyDataAttrToClipboardBtns() {
    if (!isListeningDocument) {
        isListeningDocument = true;
        $("body").on("click", ".js-copy-to-clipboard", function (e) {
            const modalElement = e.target.closest(".modal");
            const copySuccessMessageText = e.target.dataset.copySuccessMessageText || "Скопировано";
            const copySuccessMessageType = e.target.dataset.copySuccessMessageType || "success";
            const copyErrorMessageType = e.target.dataset.copyErrorMessageType || "danger";
            const copyErrorMessageText = e.target.dataset.copyErrorMessageText || "Ошибка";
            let modalForm = null;
            if (!modalElement) {
                modalForm = document.body;
                // console.log('Кликнутый элемент находится в открытом модальном окне');
            } else {
                modalForm = this;
                // console.log('Клик был вне модального окна');
            }
            
            let textPromise;
            const templateId = $(this).data("template-id");
            if (templateId) {
                const template = document.getElementById(templateId);
                if (template) {
                    textPromise = Promise.resolve(template.innerHTML);
                } else {
                    textPromise = Promise.reject(new Error(`Template with id "${templateId}" not found`));
                }
            } else {
                textPromise = Promise.resolve($(this).data("copy"));
            }

            textPromise
                .then((text) => {
                    return copyToClipboard(text, modalForm);
                })
                .then(() => {
                    showNotification(copySuccessMessageText, {type: copySuccessMessageType});
                })
                .catch((error) => {
                    console.error("Error while copying text: ", error);
                    showNotification(copyErrorMessageText, {type: copyErrorMessageType});
                });

            return false;
        });
    }
}

/**
 * Копирует текст в буфер обмена
 * @param {string} text - Текст для копирования
 */
function copyToClipboard(text, modalForm) {
    return new Promise((resolve, reject) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => resolve())
                .catch((error) => reject(error));
        } else {
            try {
                fallbackCopyToClipboard(text, modalForm);
                resolve();
            } catch (err) {
                reject(err);
            }
        }
    });
}

/**
 * Fallback-функция для копирования текста в старых браузерах
 * @param {string} text - Текст для копирования
 */
function fallbackCopyToClipboard(text, modalForm) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    Object.assign(textArea.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "2em",
        height: "2em",
        padding: "0",
        border: "none",
        outline: "none",
        boxShadow: "none",
        background: "transparent"
    });
    modalForm.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand("copy");
        console.log(`Fallback: Copying text command was ${successful ? "successful" : "unsuccessful"}`);
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
        throw err;
    } finally {
        modalForm.removeChild(textArea);
    }
}


/**
 * Показывает уведомление
 * @param {string} message - Сообщение для отображения
 * @param {Object} [options] - Дополнительные настройки уведомления.
 * @param {string} [options.type='success'] - Тип уведомления, определяющий его стиль.
 */
function showNotification(message, {type = "success"} = {}) {
    if (typeof $.notify === "function") {
        $.notify(
            {message: message},
            {
                type: type,
                z_index: 9999,
                delay: 2000
            }
        );
    } else {
        console.warn("jQuery Notify is not available. Notification skipped.");
    }
}
