/* global $ */

export function initializeRussianLanguage() {
    $.fn.selectpicker.defaults = {
        noneSelectedText: "Выбрать",
        noneResultsText: "Совпадений не найдено {0}",
        countSelectedText: "Выбрано {0} из {1}",
        maxOptionsText: ["Достигнут предел ({n} {var} максимум)", "Достигнут предел в группе ({n} {var} максимум)", ["шт.", "шт."]],
        doneButtonText: "Закрыть",
        selectAllText: "Выбрать все",
        deselectAllText: "Отменить все",
        multipleSeparator: ", "
    };

    $.datetimepicker.setLocale("ru");

    $.fn.ajaxSelectPicker.defaults.langCode = 'ru-RU';
}

const translated = new Map();

/*

Перевод для js

Пример:

t(['Дилер', 'Валюта']) // запуск перевода - аякс-запрос на бэк. Язык указывать не надо — будет использовать текущий. На бэке yii::t
    .then(r => {
        // перевод готов
        console.log(r); // { 'Дилер': 'Dealer', 'Валюта': 'Currency' }
        console.log(t('Дилер')); // 'Dealer'
        t(['Дилер']); // повторного запроса не будет
    });

Пример 2:

t(['Дилер']);

console.log(t('Дилер')); // вернёт оригинальную строку - запрос ещё не прошёл

$(button).on('click', function() {
    console.log(t('Дилер')); // скорее всего перевод уже будет готов
});

Пример 3 (перевод с параметрами):

const T_CONFIRM_ALL = { message: 'После нажатия кнопки «Подтвердить» процесс подтверждения затронет {count, plural, one{# заказ-наряд} few{# заказ-наряда} many{# заказ-нарядов} other{# заказ-нарядов}} по ТО. <br>Все заказ-наряды с ошибками подтверждения будут пропущены.', params: { count: 0 }};
t([T_CONFIRM_ALL]);

 */

export function t(messages) {
    if (Array.isArray(messages)) {
        if (messages.every(i => typeof i === 'object' ? translated.has(i.message) : translated.has(i))) {
            const result = Object.create(null);
            messages.forEach(i => typeof i === 'object' ? (result[i] = translated.get(i.message)) : (result[i] = translated.get(i)));
            return Promise.resolve(result);
        }

        return new Promise((resolve) => {
            const result = Object.create(null);

            fetch(window.location.origin + '/translate', {
                body: JSON.stringify({
                    messages,
                    [$("meta[name=csrf-param]").attr("content")]: $("meta[name=csrf-token]").attr("content")
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
            })
                .then(r => r.json())
                .then(r => {
                    for (let key in r) {
                        result[key] = r[key];
                        translated.set(key, r[key]);
                    }
                    resolve(result);
                })
                .catch(_ => {
                    messages.forEach(i => typeof i === 'object' ? (result[i.message] = i.message) : (result[i] = i));
                    return resolve(result);
                });
        });
    }

    if (typeof messages === 'object') {
        return translated.has(messages.message) ? translated.get(messages.message) : messages.message;
    }

    return translated.has(messages) ? translated.get(messages) : messages;
}
