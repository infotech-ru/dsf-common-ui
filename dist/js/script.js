var DSFUI = (function (exports) {
  'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function itemActionMenu() {
    $('.js-actionMenu').popover({
      container: 'body',
      html: true,
      trigger: 'focus',
      customClass: 'popoverActionMenu',
      sanitize: false
    });
  }
  function multilevelMenu() {
    $('.multilevelMenu .dropdown-toggle').on('click', function (e) {
      $(this);
      $(this).offsetParent(".dropdown-menu");
      $(this).parent("li").toggleClass('открыто', 'open');
      $('.multilevelMenu li.open').not($(this).parents("li")).removeClass("open");
      return false;
    });
  }
  function CopyToClipboard() {
    function fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text; // Avoid scrolling to bottom

      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('копия', 'копировать', 'copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }

      document.body.removeChild(textArea);
    }

    var allCopyToClipboard = document.querySelectorAll(".js-copyToClipboard");

    var _loop = function _loop(i) {
      var itemCopyToClipboard = allCopyToClipboard[i];
      itemCopyToClipboard.addEventListener('click', function (e) {
        var clipText = itemCopyToClipboard.getAttribute('data-clipboard-text');

        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(clipText);
          return;
        }

        navigator.clipboard.writeText(clipText).then(function () {
          console.log('Async: Copying to clipboard was successful!');
          console.log(clipText);
        });
      });
    };

    for (var i = 0; i < allCopyToClipboard.length; i++) {
      _loop(i);
    }
  }
  function initTreeTable(options) {
    $("table.js-tree-table").treetable(_objectSpread({
      expandable: true,
      indent: 34,
      expanderTemplate: "<span class='collapseTrIcon'><svg width='14px' height='14px'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#'bicolors-plus__24vb'></use></sv'g ></span>",
      indenterTemplate: "<a class='collapseTrIcon_link' href=\"#\"></a>"
    }, options));
  }
  function searchIcon() {
    var inputField = document.getElementById('input-field-search-icon');
    var parent = document.querySelector('.js-icon-container');
    var childrens = parent.querySelectorAll('.js-icon-block');
    var itemsObject = {
      'bicolors-2wd': ['2wd'],
      'bicolors-2wd__24vb': ['2wd', '24vb'],
      'bicolors-archive_in': ['archive', 'архив', 'in'],
      'bicolors-archive_in__24vb': ['archive', 'архив', 'in', '24vb'],
      'bicolors-archive_out': ['archive', 'архив', 'out'],
      'bicolors-archive_out__24vb': ['archive', 'архив', 'out', '24vb'],
      'bicolors-arrow-thin_down': ['arrow', 'стрелка', 'thin', 'down', 'вниз', 'низ'],
      'bicolors-arrow-thin_down__24vb': ['arrow', 'стрелка', 'thin', 'down', 'вниз', 'низ', '24vb'],
      'bicolors-arrow-thin_left': ['arrow', 'стрелка', 'thin', 'left', 'лево', 'влево'],
      'bicolors-arrow-thin_left__24vb': ['arrow', 'стрелка', 'thin', 'left', 'лево', 'влево', '24vb'],
      'bicolors-arrow-thin_right': ['arrow', 'стрелка', 'thin', 'right', 'право', 'вправо'],
      'bicolors-arrow-thin_right__24vb': ['arrow', 'стрелка', 'thin', 'right', 'право', 'вправо', '24vb'],
      'bicolors-arrow-thin_up': ['arrow', 'стрелка', 'thin', 'up', 'верх', 'вверх'],
      'bicolors-arrow-thin_up__24vb': ['arrow', 'стрелка', 'thin', 'up', 'верх', 'вверх', '24vb'],
      'bicolors-arrow_check': ['arrow', 'стрелка', 'проверка', 'check'],
      'bicolors-arrow_check__24vb': ['arrow', 'стрелка', 'проверка', 'check', '24vb'],
      'bicolors-arrow_down': ['arrow', 'стрелка', 'down', 'вниз'],
      'bicolors-arrow_down__24vb': ['arrow', 'стрелка', 'down', 'вниз', '24vb'],
      'bicolors-arrow_drag': ['arrow', 'стрелка', 'перетащить', 'drag'],
      'bicolors-arrow_drag__24vb': ['arrow', 'стрелка', 'перетащить', 'drag', '24vb'],
      'bicolors-arrow_expand': ['arrow', 'стрелка', 'развернуть', 'показать', 'expand'],
      'bicolors-arrow_expand__24vb': ['arrow', 'стрелка', 'развернуть', 'показать', 'expand', '24vb'],
      'bicolors-arrow_left': ['arrow', 'стрелка', 'left', 'лево', 'влево'],
      'bicolors-arrow_left__24vb': ['arrow', 'стрелка', 'left', 'лево', 'влево', '24vb'],
      'bicolors-arrow_left_double': ['arrow', 'стрелка', 'left', 'лево', 'влево', 'double'],
      'bicolors-arrow_left_double__24vb': ['arrow', 'стрелка', 'left', 'лево', 'влево', 'double', '24vb'],
      'bicolors-arrow_right': ['arrow', 'стрелка', 'right', 'право', 'вправо'],
      'bicolors-arrow_right__24vb': ['arrow', 'стрелка', 'right', 'право', 'вправо', '24vb'],
      'bicolors-arrow_right_double': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'double'],
      'bicolors-arrow_right_double__24vb': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'double', '24vb'],
      'bicolors-arrow_right_down': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'down', 'вниз'],
      'bicolors-arrow_right_down__24vb': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'down', 'вниз', '24vb'],
      'bicolors-arrow_rotate_left': ['arrow', 'стрелка', 'rotate', 'left', 'лево', 'влево'],
      'bicolors-arrow_rotate_left__24vb': ['arrow', 'стрелка', 'rotate', 'left', 'лево', 'влево', '24vb'],
      'bicolors-arrow_rotate_right': ['arrow', 'стрелка', 'rotate', 'right', 'право', 'вправо'],
      'bicolors-arrow_rotate_right__24vb': ['arrow', 'стрелка', 'rotate', 'right', 'право', 'вправо', '24vb'],
      'bicolors-arrow_up': ['arrow', 'стрелка', 'up', 'верх', 'вверх'],
      'bicolors-arrow_up__24vb': ['arrow', 'стрелка', 'up', 'верх', 'вверх', '24vb'],
      'bicolors-arrows_compare': ['arrows', 'сравнить', 'compare'],
      'bicolors-arrows_compare__24vb': ['arrows', 'сравнить', 'compare', '24vb'],
      'bicolors-arrows_redo': ['arrows', 'повтор', 'redo'],
      'bicolors-arrows_redo__24vb': ['arrows', 'повтор', 'redo', '24vb'],
      'bicolors-arrows_reload': ['arrows', 'перезагрузка', 'перезагрузить', 'reload'],
      'bicolors-arrows_reload__24vb': ['arrows', 'перезагрузка', 'перезагрузить', 'reload', '24vb'],
      'bicolors-arrows_undo': ['arrows', 'отмена', 'отменить', 'undo'],
      'bicolors-arrows_undo__24vb': ['arrows', 'отмена', 'отменить', 'undo', '24vb'],
      'bicolors-attention': ['внимание', 'attention'],
      'bicolors-attention__24vb': ['внимание', 'attention', '24vb'],
      'bicolors-board': ['доска', 'board'],
      'bicolors-board__24vb': ['доска', 'board', '24vb'],
      'bicolors-boards': ['доски', 'boards'],
      'bicolors-boards__24vb': ['доски', 'boards', '24vb'],
      'bicolors-bold': ['жирный', 'bold'],
      'bicolors-bold__24vb': ['жирный', 'bold', '24vb'],
      'bicolors-book': ['книга', 'book'],
      'bicolors-book__24vb': ['книга', 'book', '24vb'],
      'bicolors-book_lamp': ['книга', 'book', 'лампа', 'lamp'],
      'bicolors-book_lamp__24vb': ['книга', 'book', 'лампа', 'lamp', '24vb'],
      'bicolors-calculator': ['калькулятор', 'calculator'],
      'bicolors-calculator__24vb': ['калькулятор', 'calculator', '24vb'],
      'bicolors-calendar': ['календарь', 'calendar'],
      'bicolors-calendar__24vb': ['календарь', 'calendar', '24vb'],
      'bicolors-calendar_date': ['календарь', 'calendar', 'дата', 'date'],
      'bicolors-calendar_date__24vb': ['календарь', 'calendar', 'дата', 'date', '24vb'],
      'bicolors-calendar_task': ['календарь', 'calendar', 'задание', 'задача', 'task'],
      'bicolors-calendar_task__24vb': ['календарь', 'calendar', 'задание', 'задача', 'task', '24vb'],
      'bicolors-call': ['звонок', 'call'],
      'bicolors-call__24vb': ['звонок', 'call', '24vb'],
      'bicolors-call_back': ['звонок', 'call', 'назад', 'обратно', 'back'],
      'bicolors-call_back__24vb': ['звонок', 'call', 'назад', 'обратно', 'back', '24vb'],
      'bicolors-call_cold': ['звонок', 'call', 'холодный', 'cold'],
      'bicolors-call_cold__24vb': ['звонок', 'call', 'холодный', 'cold', '24vb'],
      'bicolors-call_import': ['звонок', 'call', 'импорт', 'import'],
      'bicolors-call_import__24vb': ['звонок', 'call', 'импорт', 'import', '24vb'],
      'bicolors-callcenter': ['колцентр', 'callcenter', 'звонок', 'call'],
      'bicolors-callcenter__24vb': ['колцентр', 'callcenter', 'звонок', 'call', '24vb'],
      'bicolors-car': ['авто', 'машина', 'vehicle', 'car'],
      'bicolors-car__24vb': ['авто', 'машина', 'vehicle', 'car', '24vb'],
      'bicolors-car_buy': ['авто', 'машина', 'vehicle', 'car', 'купить', 'buy'],
      'bicolors-car_buy__24vb': ['авто', 'машина', 'vehicle', 'car', 'купить', 'buy', '24vb'],
      'bicolors-car_check': ['авто', 'машина', 'vehicle', 'car', 'проверка', 'check'],
      'bicolors-car_check__24vb': ['авто', 'машина', 'vehicle', 'car', 'проверка', 'check', '24vb'],
      'bicolors-car_enter': ['авто', 'машина', 'vehicle', 'car', 'вход', 'логин', 'login', 'enter'],
      'bicolors-car_enter__24vb': ['авто', 'машина', 'vehicle', 'car', 'вход', 'логин', 'login', 'enter', '24vb'],
      'bicolors-car_globe': ['авто', 'машина', 'vehicle', 'car', 'шар', 'глобус', 'земля', 'globe'],
      'bicolors-car_globe__24vb': ['авто', 'машина', 'vehicle', 'car', 'шар', 'глобус', 'земля', 'globe', '24vb'],
      'bicolors-car_pay': ['авто', 'машина', 'vehicle', 'car', 'платить', 'оплата', 'pay'],
      'bicolors-car_pay__24vb': ['авто', 'машина', 'vehicle', 'car', 'платить', 'оплата', 'pay', '24vb'],
      'bicolors-car_plus': ['авто', 'машина', 'vehicle', 'car', 'plus', 'плюс'],
      'bicolors-car_plus__24vb': ['авто', 'машина', 'vehicle', 'car', 'plus', 'плюс', '24vb'],
      'bicolors-car_service': ['авто', 'машина', 'vehicle', 'car', 'сервис', 'услуга', 'service'],
      'bicolors-car_service__24vb': ['авто', 'машина', 'vehicle', 'car', 'сервис', 'услуга', 'service', '24vb'],
      'bicolors-car_square_check': ['авто', 'машина', 'vehicle', 'car', 'квадрат', 'square', 'проверка', 'check'],
      'bicolors-car_square_check__24vb': ['авто', 'машина', 'vehicle', 'car', 'квадрат', 'square', 'проверка', 'check', '24vb'],
      'bicolors-car_stop': ['авто', 'машина', 'vehicle', 'car', 'остановить', 'прекратить', 'стоп', 'stop'],
      'bicolors-car_stop__24vb': ['авто', 'машина', 'vehicle', 'car', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
      'bicolors-car_subscribe': ['авто', 'машина', 'vehicle', 'car', 'подписка', 'subscribe'],
      'bicolors-car_subscribe__24vb': ['авто', 'машина', 'vehicle', 'car', 'подписка', 'subscribe', '24vb'],
      'bicolors-car_update': ['авто', 'машина', 'vehicle', 'car', 'обновить', 'update'],
      'bicolors-car_update__24vb': ['авто', 'машина', 'vehicle', 'car', 'обновить', 'update', '24vb'],
      'bicolors-card': ['карта', 'card'],
      'bicolors-card__24vb': ['карта', 'card', '24vb'],
      'bicolors-cars_reload': ['авто', 'автомобили', 'cars', 'перезагрузка', 'перезагрузить', 'reload'],
      'bicolors-cars_reload__24vb': ['авто', 'автомобили', 'cars', 'перезагрузка', 'перезагрузить', 'reload', '24vb'],
      'bicolors-cars_warehouse': ['авто', 'автомобили', 'cars', 'склад', 'warehouse'],
      'bicolors-cars_warehouse__24vb': ['авто', 'автомобили', 'cars', 'склад', 'warehouse', '24vb'],
      'bicolors-cart': ['корзина', 'покупка', 'cart'],
      'bicolors-cart__24vb': ['корзина', 'покупка', 'cart', '24vb'],
      'bicolors-cart_check': ['корзина', 'покупка', 'cart', 'проверка', 'check'],
      'bicolors-cart_check__24vb': ['корзина', 'покупка', 'cart', 'проверка', 'check', '24vb'],
      'bicolors-cart_cogwheel': ['корзина', 'покупка', 'cart', 'шестеренка', 'шестерёнка', 'cogwheel'],
      'bicolors-cart_cogwheel__24vb': ['корзина', 'покупка', 'cart', 'шестеренка', 'шестерёнка', 'cogwheel', '24vb'],
      'bicolors-chart_bar': ['график', 'диаграмма', 'схема', 'chart', 'bar'],
      'bicolors-chart_bar__24vb': ['график', 'диаграмма', 'схема', 'chart', 'bar', '24vb'],
      'bicolors-chart_column': ['график', 'диаграмма', 'схема', 'chart', 'колонка', 'столбец', 'column'],
      'bicolors-chart_column__24vb': ['график', 'диаграмма', 'схема', 'chart', 'колонка', 'столбец', 'column', '24vb'],
      'bicolors-chart_graph': ['график', 'диаграмма', 'схема', 'chart', 'graph'],
      'bicolors-chart_graph__24vb': ['график', 'диаграмма', 'схема', 'chart', 'graph', '24vb'],
      'bicolors-chart_pie': ['график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie'],
      'bicolors-chart_pie__24vb': ['график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie', '24vb'],
      'bicolors-checklist': ['список', 'перечень', 'чеклист', 'лист', 'checklist'],
      'bicolors-checklist__24vb': ['список', 'перечень', 'чеклист', 'лист', 'checklist', '24vb'],
      'bicolors-checklist_add': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'добавить', 'add'],
      'bicolors-checklist_add__24vb': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'добавить', 'add', '24vb'],
      'bicolors-checklist_crown': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'корона', 'crown'],
      'bicolors-checklist_crown__24vb': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'корона', 'crown', '24vb'],
      'bicolors-checklists': ['списки', 'перечень', 'чеклисты', 'листы', 'checklists'],
      'bicolors-checklists__24vb': ['списки', 'перечень', 'чеклисты', 'листы', 'checklists', '24vb'],
      'bicolors-circle': ['круг', 'circle'],
      'bicolors-circle__24vb': ['круг', 'circle', '24vb'],
      'bicolors-circle_banned': ['круг', 'circle', 'запрещено', 'бан', 'banned'],
      'bicolors-circle_banned__24vb': ['круг', 'circle', 'запрещено', 'бан', 'banned', '24vb'],
      'bicolors-circle_check': ['круг', 'circle', 'проверка', 'check'],
      'bicolors-circle_check__24vb': ['круг', 'circle', 'проверка', 'check', '24vb'],
      'bicolors-circle_ignore': ['круг', 'circle', 'игнорировать', 'ignore'],
      'bicolors-circle_ignore__24vb': ['круг', 'circle', 'игнорировать', 'ignore', '24vb'],
      'bicolors-circle_information': ['круг', 'circle', 'информация', 'information'],
      'bicolors-circle_information__24vb': ['круг', 'circle', 'информация', 'information', '24vb'],
      'bicolors-circle_stop': ['круг', 'circle', 'остановить', 'прекратить', 'стоп', 'stop'],
      'bicolors-circle_stop__24vb': ['круг', 'circle', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
      'bicolors-clear': ['удалить', 'очистить', 'очистить', 'clear'],
      'bicolors-clear__24vb': ['удалить', 'очистить', 'очистить', 'clear', '24vb'],
      'bicolors-close': ['закрыть', 'close'],
      'bicolors-close__24vb': ['закрыть', 'close', '24vb'],
      'bicolors-code': ['код', 'code'],
      'bicolors-code__24vb': ['код', 'code', '24vb'],
      'bicolors-coffee': ['кофе', 'coffee'],
      'bicolors-coffee__24vb': ['кофе', 'coffee', '24vb'],
      'bicolors-coffee_call': ['кофе', 'coffee', 'звонок', 'call'],
      'bicolors-coffee_call__24vb': ['кофе', 'coffee', 'звонок', 'call', '24vb'],
      'bicolors-coffee_internet': ['кофе', 'coffee', 'интернет', 'internet'],
      'bicolors-coffee_internet__24vb': ['кофе', 'coffee', 'интернет', 'internet', '24vb'],
      'bicolors-cogwheel': ['шестеренка', 'шестерёнка', 'cogwheel'],
      'bicolors-cogwheel__24vb': ['шестеренка', 'шестерёнка', 'cogwheel', '24vb'],
      'bicolors-cogwheel_reload': ['шестеренка', 'шестерёнка', 'cogwheel', 'перезагрузка', 'перезагрузить', 'reload'],
      'bicolors-cogwheel_reload__24vb': ['шестеренка', 'шестерёнка', 'cogwheel', 'перезагрузка', 'перезагрузить', 'reload', '24vb'],
      'bicolors-cogwheel_search': ['шестеренка', 'шестерёнка', 'cogwheel', 'поиск', 'search'],
      'bicolors-cogwheel_search__24vb': ['шестеренка', 'шестерёнка', 'cogwheel', 'поиск', 'search', '24vb'],
      'bicolors-colors': ['цвет', 'цвета', 'colors'],
      'bicolors-colors__24vb': ['цвет', 'цвета', 'colors', '24vb'],
      'bicolors-comment': ['комментарий', 'чат', 'comment'],
      'bicolors-comment__24vb': ['комментарий', 'чат', 'comment', '24vb'],
      'bicolors-control': ['управление', 'control'],
      'bicolors-control__24vb': ['управление', 'control', '24vb'],
      'bicolors-conversion': ['конверсия', 'conversion'],
      'bicolors-conversion__24vb': ['конверсия', 'conversion', '24vb'],
      'bicolors-copy': ['копия', 'копировать', 'copy'],
      'bicolors-copy__24vb': ['копия', 'копировать', 'copy', '24vb'],
      'bicolors-crm': ['crm'],
      'bicolors-crm__24vb': ['crm', '24vb'],
      'bicolors-crown': ['корона', 'crown'],
      'bicolors-crown__24vb': ['корона', 'crown', '24vb'],
      'bicolors-database': ['база', 'бд', 'database'],
      'bicolors-database__24vb': ['база', 'бд', 'database', '24vb'],
      'bicolors-deduplicate': ['клон', 'deduplicate'],
      'bicolors-deduplicate__24vb': ['клон', 'deduplicate', '24vb'],
      'bicolors-delete': ['удалить', 'очистить', 'delete'],
      'bicolors-delete__24vb': ['удалить', 'очистить', 'delete', '24vb'],
      'bicolors-discounts': ['скидки', 'скидка', 'discounts'],
      'bicolors-discounts__24vb': ['скидки', 'скидка', 'discounts', '24vb'],
      'bicolors-doc': ['doc', 'документ'],
      'bicolors-doc__24vb': ['doc', 'документ', '24vb'],
      'bicolors-doc_add': ['doc', 'документ', 'добавить', 'add'],
      'bicolors-doc_add__24vb': ['doc', 'документ', 'добавить', 'add', '24vb'],
      'bicolors-doc_bill': ['doc', 'документ', 'счёт', 'счет', 'bill'],
      'bicolors-doc_bill__24vb': ['doc', 'документ', 'счёт', 'счет', 'bill', '24vb'],
      'bicolors-doc_certificate': ['doc', 'документ', 'сертификат', 'справка', 'certificate'],
      'bicolors-doc_certificate__24vb': ['doc', 'документ', 'сертификат', 'справка', 'certificate', '24vb'],
      'bicolors-doc_chart_pie': ['doc', 'документ', 'график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie'],
      'bicolors-doc_chart_pie__24vb': ['doc', 'документ', 'график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie', '24vb'],
      'bicolors-doc_clear': ['doc', 'документ', 'удалить', 'очистить', 'очистить', 'clear'],
      'bicolors-doc_clear__24vb': ['doc', 'документ', 'удалить', 'очистить', 'очистить', 'clear', '24vb'],
      'bicolors-doc_cogwheel': ['doc', 'документ', 'шестеренка', 'шестерёнка', 'cogwheel'],
      'bicolors-doc_cogwheel__24vb': ['doc', 'документ', 'шестеренка', 'шестерёнка', 'cogwheel', '24vb'],
      'bicolors-doc_excel': ['doc', 'документ', 'эксель', 'excel'],
      'bicolors-doc_excel__24vb': ['doc', 'документ', 'эксель', 'excel', '24vb'],
      'bicolors-doc_invoice': ['doc', 'документ', 'счет-фактура', 'счет', 'счёт', 'invoice'],
      'bicolors-doc_invoice__24vb': ['doc', 'документ', 'счет-фактура', 'счет', 'счёт', 'invoice', '24vb'],
      'bicolors-doc_pdf': ['doc', 'документ', 'пдф', 'pdf'],
      'bicolors-doc_pdf__24vb': ['doc', 'документ', 'пдф', 'pdf', '24vb'],
      'bicolors-doc_service': ['doc', 'документ', 'сервис', 'услуга', 'service'],
      'bicolors-doc_service__24vb': ['doc', 'документ', 'сервис', 'услуга', 'service', '24vb'],
      'bicolors-doc_shield': ['doc', 'документ', 'щит', 'защита', 'безопасность', 'shield'],
      'bicolors-doc_shield__24vb': ['doc', 'документ', 'щит', 'защита', 'безопасность', 'shield', '24vb'],
      'bicolors-doc_xml': ['doc', 'документ', 'xml'],
      'bicolors-doc_xml__24vb': ['doc', 'документ', 'xml', '24vb'],
      'bicolors-docs_evacuate': ['документы', 'docs', 'эвакуировать', 'evacuate'],
      'bicolors-docs_evacuate__24vb': ['документы', 'docs', 'эвакуировать', 'evacuate', '24vb'],
      'bicolors-docs_reports': ['документы', 'docs', 'reports'],
      'bicolors-docs_reports__24vb': ['документы', 'docs', 'reports', '24vb'],
      'bicolors-door_enter': ['дверь', 'door', 'вход', 'логин', 'login', 'enter'],
      'bicolors-door_enter__24vb': ['дверь', 'door', 'вход', 'логин', 'login', 'enter', '24vb'],
      'bicolors-door_exit': ['дверь', 'door', 'выход', 'exit'],
      'bicolors-door_exit__24vb': ['дверь', 'door', 'выход', 'exit', '24vb'],
      'bicolors-edit': ['редактировать', 'править', 'edit'],
      'bicolors-edit__24vb': ['редактировать', 'править', 'edit', '24vb'],
      'bicolors-email': ['мыло', 'почта', 'e-mail', 'email'],
      'bicolors-email__24vb': ['мыло', 'почта', 'e-mail', 'email', '24vb'],
      'bicolors-email_ok': ['мыло', 'почта', 'e-mail', 'email', 'ok'],
      'bicolors-email_ok__24vb': ['мыло', 'почта', 'e-mail', 'email', 'ok', '24vb'],
      'bicolors-email_progress': ['мыло', 'почта', 'e-mail', 'email', 'продвижение', 'прогресс', 'progress'],
      'bicolors-email_progress__24vb': ['мыло', 'почта', 'e-mail', 'email', 'продвижение', 'прогресс', 'progress', '24vb'],
      'bicolors-email_stop': ['мыло', 'почта', 'e-mail', 'email', 'остановить', 'прекратить', 'стоп', 'stop'],
      'bicolors-email_stop__24vb': ['мыло', 'почта', 'e-mail', 'email', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
      'bicolors-emails': ['почта', 'письма', 'emails'],
      'bicolors-emails__24vb': ['почта', 'письма', 'emails', '24vb'],
      'bicolors-engine': ['мотор', 'двигатель', 'engine'],
      'bicolors-engine__24vb': ['мотор', 'двигатель', 'engine', '24vb'],
      'bicolors-export': ['экспорт', 'export'],
      'bicolors-export__24vb': ['экспорт', 'export', '24vb'],
      'bicolors-eye': ['глаз', 'око', 'eye'],
      'bicolors-eye__24vb': ['глаз', 'око', 'eye', '24vb'],
      'bicolors-eye_close': ['глаз', 'око', 'eye', 'закрыть', 'close'],
      'bicolors-eye_close__24vb': ['глаз', 'око', 'eye', 'закрыть', 'close', '24vb'],
      'bicolors-favorite': ['любимый', 'favorite'],
      'bicolors-favorite__24vb': ['любимый', 'favorite', '24vb'],
      'bicolors-favorite_full': ['любимый', 'favorite', 'полный', 'заполненый', 'full'],
      'bicolors-favorite_full__24vb': ['любимый', 'favorite', 'полный', 'заполненый', 'full', '24vb'],
      'bicolors-filter': ['фильтр', 'filter'],
      'bicolors-filter__24vb': ['фильтр', 'filter', '24vb'],
      'bicolors-folder': ['папка', 'folder'],
      'bicolors-folder__24vb': ['папка', 'folder', '24vb'],
      'bicolors-folder_arrow-in': ['папка', 'folder', 'arrow', 'стрелка'],
      'bicolors-folder_arrow-in__24vb': ['папка', 'folder', 'arrow', 'стрелка', '24vb'],
      'bicolors-folder_plus': ['папка', 'folder', 'plus', 'плюс'],
      'bicolors-folder_plus__24vb': ['папка', 'folder', 'plus', 'плюс', '24vb'],
      'bicolors-gearbox': ['коробка', 'передача', 'gearbox'],
      'bicolors-gearbox__24vb': ['коробка', 'передача', 'gearbox', '24vb'],
      'bicolors-globe': ['шар', 'глобус', 'земля', 'globe'],
      'bicolors-globe__24vb': ['шар', 'глобус', 'земля', 'globe', '24vb'],
      'bicolors-globe_arrow_right': ['шар', 'глобус', 'земля', 'globe', 'arrow', 'стрелка', 'right', 'право', 'вправо'],
      'bicolors-globe_arrow_right__24vb': ['шар', 'глобус', 'земля', 'globe', 'arrow', 'стрелка', 'right', 'право', 'вправо', '24vb'],
      'bicolors-gps': ['gps'],
      'bicolors-gps__24vb': ['gps', '24vb'],
      'bicolors-guarantee_tracker': ['гарантия', 'guarantee', 'трекер', 'tracker'],
      'bicolors-guarantee_tracker__24vb': ['гарантия', 'guarantee', 'трекер', 'tracker', '24vb'],
      'bicolors-hand_car': ['рука', 'hand', 'авто', 'машина', 'vehicle', 'car'],
      'bicolors-hand_car__24vb': ['рука', 'hand', 'авто', 'машина', 'vehicle', 'car', '24vb'],
      'bicolors-hand_key': ['рука', 'hand', 'ключ', 'key'],
      'bicolors-hand_key__24vb': ['рука', 'hand', 'ключ', 'key', '24vb'],
      'bicolors-hand_shield': ['рука', 'hand', 'щит', 'защита', 'безопасность', 'shield'],
      'bicolors-hand_shield__24vb': ['рука', 'hand', 'щит', 'защита', 'безопасность', 'shield', '24vb'],
      'bicolors-hand_user': ['рука', 'hand', 'пользователь', 'user'],
      'bicolors-hand_user__24vb': ['рука', 'hand', 'пользователь', 'user', '24vb'],
      'bicolors-height_collapse': ['высота', 'height', 'сверунть', 'скрыть', 'collapse'],
      'bicolors-height_collapse__24vb': ['высота', 'height', 'сверунть', 'скрыть', 'collapse', '24vb'],
      'bicolors-height_expand': ['высота', 'height', 'развернуть', 'показать', 'expand'],
      'bicolors-height_expand__24vb': ['высота', 'height', 'развернуть', 'показать', 'expand', '24vb'],
      'bicolors-home': ['дом', 'home'],
      'bicolors-home__24vb': ['дом', 'home', '24vb'],
      'bicolors-image': ['картинка', 'изображение', 'image'],
      'bicolors-image__24vb': ['картинка', 'изображение', 'image', '24vb'],
      'bicolors-import': ['импорт', 'import'],
      'bicolors-import__24vb': ['импорт', 'import', '24vb'],
      'bicolors-insurance': ['страховка', 'insurance'],
      'bicolors-insurance__24vb': ['страховка', 'insurance', '24vb'],
      'bicolors-integration': ['интеграция', 'integration'],
      'bicolors-integration__24vb': ['интеграция', 'integration', '24vb'],
      'bicolors-integrationall': ['интеграция', 'integration', 'integrationall'],
      'bicolors-integrationall__24vb': ['интеграция', 'integration', 'integrationall', '24vb'],
      'bicolors-lamp': ['лампа', 'lamp'],
      'bicolors-lamp__24vb': ['лампа', 'lamp', '24vb'],
      'bicolors-leasing': ['лизинг', 'leasing'],
      'bicolors-leasing__24vb': ['лизинг', 'leasing', '24vb'],
      'bicolors-link': ['ссылка', 'link'],
      'bicolors-link__24vb': ['ссылка', 'link', '24vb'],
      'bicolors-link_remove': ['ссылка', 'link', 'remove'],
      'bicolors-link_remove__24vb': ['ссылка', 'link', 'remove', '24vb'],
      'bicolors-list_checked': ['list', 'проверено', 'checked'],
      'bicolors-list_checked__24vb': ['list', 'проверено', 'checked', '24vb'],
      'bicolors-list_numbered': ['list', 'номер', 'numbered'],
      'bicolors-list_numbered__24vb': ['list', 'номер', 'numbered', '24vb'],
      'bicolors-lock': ['замок', 'закрыто', 'заблокировано', 'lock'],
      'bicolors-lock__24vb': ['замок', 'закрыто', 'заблокировано', 'lock', '24vb'],
      'bicolors-lock_open': ['замок', 'закрыто', 'заблокировано', 'lock', 'открыто', 'open'],
      'bicolors-lock_open__24vb': ['замок', 'закрыто', 'заблокировано', 'lock', 'открыто', 'open', '24vb'],
      'bicolors-megaphone': ['мегафон', 'megaphone'],
      'bicolors-megaphone__24vb': ['мегафон', 'megaphone', '24vb'],
      'bicolors-megaphone_stop': ['мегафон', 'megaphone', 'остановить', 'прекратить', 'стоп', 'stop'],
      'bicolors-megaphone_stop__24vb': ['мегафон', 'megaphone', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
      'bicolors-menu': ['меню', 'menu'],
      'bicolors-menu__24vb': ['меню', 'menu', '24vb'],
      'bicolors-menu_big': ['меню', 'menu', 'big'],
      'bicolors-menu_big__24vb': ['меню', 'menu', 'big', '24vb'],
      'bicolors-menu_fries': ['меню', 'menu', 'fries'],
      'bicolors-menu_fries__24vb': ['меню', 'menu', 'fries', '24vb'],
      'bicolors-minus': ['минус', 'minus'],
      'bicolors-minus__24vb': ['минус', 'minus', '24vb'],
      'bicolors-money': ['монета', 'деньги', 'money'],
      'bicolors-money__24vb': ['монета', 'деньги', 'money', '24vb'],
      'bicolors-newspapper': ['газета', 'newspapper'],
      'bicolors-newspapper__24vb': ['газета', 'newspapper', '24vb'],
      'bicolors-notification': ['уведомление', 'сообщение', 'notification'],
      'bicolors-notification__24vb': ['уведомление', 'сообщение', 'notification', '24vb'],
      'bicolors-options': ['опции', 'варианты', 'options'],
      'bicolors-options__24vb': ['опции', 'варианты', 'options', '24vb'],
      'bicolors-paperclip': ['скрепка', 'прикреплять', 'paperclip'],
      'bicolors-paperclip__24vb': ['скрепка', 'прикреплять', 'paperclip', '24vb'],
      'bicolors-pause': ['пауза', 'pause'],
      'bicolors-pause__24vb': ['пауза', 'pause', '24vb'],
      'bicolors-phone': ['телефон', 'phone'],
      'bicolors-phone__24vb': ['телефон', 'phone', '24vb'],
      'bicolors-photo': ['фото', 'иpображение', 'photo'],
      'bicolors-photo__24vb': ['фото', 'иpображение', 'photo', '24vb'],
      'bicolors-pin': ['pin'],
      'bicolors-pin__24vb': ['pin', '24vb'],
      'bicolors-plan': ['план', 'plan'],
      'bicolors-plan__24vb': ['план', 'plan', '24vb'],
      'bicolors-play': ['начать', 'проиграть', 'play'],
      'bicolors-play_1_5x': ['начать', 'проиграть', 'play', '1.5x'],
      'bicolors-play_1_5x__24vb': ['начать', 'проиграть', 'play', '1.5x', '24vb'],
      'bicolors-play_2x': ['начать', 'проиграть', 'play', '2x'],
      'bicolors-play_2x__24vb': ['начать', 'проиграть', 'play', '2x', '24vb'],
      'bicolors-play__24vb': ['начать', 'проиграть', 'play', '24vb'],
      'bicolors-play_next': ['начать', 'проиграть', 'play', 'next'],
      'bicolors-play_next__24vb': ['начать', 'проиграть', 'play', 'next', '24vb'],
      'bicolors-plus': ['plus', 'плюс'],
      'bicolors-plus__24vb': ['plus', 'плюс', '24vb'],
      'bicolors-presentation': ['презентация', 'представление', 'presentation'],
      'bicolors-presentation__24vb': ['презентация', 'представление', 'presentation', '24vb'],
      'bicolors-printer': ['принтер', 'напечатать', 'printer'],
      'bicolors-printer__24vb': ['принтер', 'напечатать', 'printer', '24vb'],
      'bicolors-qr-code': ['qr', 'код', 'code', 'qr-code', 'qrcode'],
      'bicolors-qr-code__24vb': ['qr', 'код', 'code', 'qr-code', 'qrcode', '24vb'],
      'bicolors-questions': ['questions', 'вопрос'],
      'bicolors-questions__24vb': ['questions', 'вопрос', '24vb'],
      'bicolors-questions_full': ['questions', 'вопрос', 'полный', 'заполненый', 'full'],
      'bicolors-questions_full__24vb': ['questions', 'вопрос', 'полный', 'заполненый', 'full', '24vb'],
      'bicolors-radio': ['радио', 'аудио', 'звук', 'radio'],
      'bicolors-radio__24vb': ['радио', 'аудио', 'звук', 'radio', '24vb'],
      'bicolors-rocket': ['ракета', 'старт', 'rocket'],
      'bicolors-rocket__24vb': ['ракета', 'старт', 'rocket', '24vb'],
      'bicolors-search': ['поиск', 'search', 'лупа'],
      'bicolors-search__24vb': ['поиск', 'search', 'лупа', '24vb'],
      'bicolors-send': ['send', 'отправить'],
      'bicolors-send__24vb': ['send', 'отправить', '24vb'],
      'bicolors-service_plus': ['сервис', 'услуга', 'service', 'plus', 'плюс'],
      'bicolors-service_plus__24vb': ['сервис', 'услуга', 'service', 'plus', 'плюс', '24vb'],
      'bicolors-service_rub': ['сервис', 'услуга', 'service', 'rub', 'руб'],
      'bicolors-service_rub__24vb': ['сервис', 'услуга', 'service', 'rub', 'руб', '24vb'],
      'bicolors-share': ['поделиться', 'share'],
      'bicolors-share__24vb': ['поделиться', 'share', '24vb'],
      'bicolors-shield': ['щит', 'защита', 'безопасность', 'shield'],
      'bicolors-shield__24vb': ['щит', 'защита', 'безопасность', 'shield', '24vb'],
      'bicolors-skype': ['скайп', 'skype'],
      'bicolors-skype__24vb': ['скайп', 'skype', '24vb'],
      'bicolors-sms': ['смс', 'сообщение', 'sms'],
      'bicolors-sms__24vb': ['смс', 'сообщение', 'sms', '24vb'],
      'bicolors-sms_check': ['смс', 'сообщение', 'sms', 'проверка', 'check'],
      'bicolors-sms_check__24vb': ['смс', 'сообщение', 'sms', 'проверка', 'check', '24vb'],
      'bicolors-social': ['сети', 'социальные', 'social'],
      'bicolors-social__24vb': ['сети', 'социальные', 'social', '24vb'],
      'bicolors-sort_asc': ['сортировка', 'sort', 'возрастание', 'увеличение', 'asc'],
      'bicolors-sort_asc__24vb': ['сортировка', 'sort', 'возрастание', 'увеличение', 'asc', '24vb'],
      'bicolors-sort_az': ['сортировка', 'sort', 'возрастание', 'увеличение', 'az'],
      'bicolors-sort_az__24vb': ['сортировка', 'sort', 'возрастание', 'увеличение', 'az', '24vb'],
      'bicolors-sort_desc': ['сортировка', 'sort', 'уменьшение', 'убывание', 'desc'],
      'bicolors-sort_desc__24vb': ['сортировка', 'sort', 'уменьшение', 'убывание', 'desc', '24vb'],
      'bicolors-sort_za': ['сортировка', 'sort', 'уменьшение', 'убывание', 'za'],
      'bicolors-sort_za__24vb': ['сортировка', 'sort', 'уменьшение', 'убывание', 'za', '24vb'],
      'bicolors-spy': ['скрыто', 'скрыть', 'шпион', 'spy'],
      'bicolors-spy__24vb': ['скрыто', 'скрыть', 'шпион', 'spy', '24vb'],
      'bicolors-square_empty': ['квадрат', 'square', 'пустой', 'empty'],
      'bicolors-square_empty__24vb': ['квадрат', 'square', 'пустой', 'empty', '24vb'],
      'bicolors-square_empty_check': ['квадрат', 'square', 'пустой', 'empty', 'проверка', 'check'],
      'bicolors-square_empty_check__24vb': ['квадрат', 'square', 'пустой', 'empty', 'проверка', 'check', '24vb'],
      'bicolors-stamp_100pr': ['печать', 'stamp', '100', 'percent'],
      'bicolors-stamp_100pr__24vb': ['печать', 'stamp', '100', 'percent', '24vb'],
      'bicolors-stamp_award': ['печать', 'stamp', 'награда', 'приз', 'award'],
      'bicolors-stamp_award__24vb': ['печать', 'stamp', 'награда', 'приз', 'award', '24vb'],
      'bicolors-stamp_bonus': ['печать', 'stamp', 'bonus'],
      'bicolors-stamp_bonus__24vb': ['печать', 'stamp', 'bonus', '24vb'],
      'bicolors-star': ['звезда', 'star'],
      'bicolors-star__24vb': ['звезда', 'star', '24vb'],
      'bicolors-stars': ['звезда', 'звезды', 'stars'],
      'bicolors-stars__24vb': ['звезда', 'звезды', 'stars', '24vb'],
      'bicolors-start': ['пуск', 'начало', 'запуск', 'start'],
      'bicolors-start__24vb': ['пуск', 'начало', 'запуск', 'start', '24vb'],
      'bicolors-sunwatch': ['sunwatch', 'время', 'clock', 'часы'],
      'bicolors-sunwatch__24vb': ['sunwatch', 'время', 'clock', 'часы', '24vb'],
      'bicolors-table': ['таблица', 'table'],
      'bicolors-table__24vb': ['таблица', 'table', '24vb'],
      'bicolors-tag': ['тег', 'тэг', 'tag'],
      'bicolors-tag__24vb': ['тег', 'тэг', 'tag', '24vb'],
      'bicolors-tags': ['тег', 'тэг', 'теги', 'tags'],
      'bicolors-tags__24vb': ['тег', 'тэг', 'теги', 'tags', '24vb'],
      'bicolors-target': ['цель', 'target'],
      'bicolors-target__24vb': ['цель', 'target', '24vb'],
      'bicolors-teach': ['учить', 'teach'],
      'bicolors-teach__24vb': ['учить', 'teach', '24vb'],
      'bicolors-telegram': ['telegram', 'телега'],
      'bicolors-telegram__24vb': ['telegram', 'телега', '24vb'],
      'bicolors-telegram_circle': ['telegram', 'телега', 'круг', 'circle'],
      'bicolors-telegram_circle__24vb': ['telegram', 'телега', 'круг', 'circle', '24vb'],
      'bicolors-testdrive': ['тестдрайв', 'testdrive'],
      'bicolors-testdrive__24vb': ['тестдрайв', 'testdrive', '24vb'],
      'bicolors-time': ['время', 'часы', 'time'],
      'bicolors-time__24vb': ['время', 'часы', 'time', '24vb'],
      'bicolors-time_wait': ['время', 'часы', 'time', 'wait'],
      'bicolors-time_wait__24vb': ['время', 'часы', 'time', 'wait', '24vb'],
      'bicolors-timeback': ['обратно', 'обратный', 'время', 'назад', 'timeback'],
      'bicolors-timeback__24vb': ['обратно', 'обратный', 'время', 'назад', 'timeback', '24vb'],
      'bicolors-tv': ['tv'],
      'bicolors-tv__24vb': ['tv', '24vb'],
      'bicolors-user_add': ['пользователь', 'user', 'добавить', 'add'],
      'bicolors-user_add__24vb': ['пользователь', 'user', 'добавить', 'add', '24vb'],
      'bicolors-user_card': ['пользователь', 'user', 'карта', 'card'],
      'bicolors-user_card__24vb': ['пользователь', 'user', 'карта', 'card', '24vb'],
      'bicolors-user_cards': ['пользователь', 'user', 'cards'],
      'bicolors-user_cards__24vb': ['пользователь', 'user', 'cards', '24vb'],
      'bicolors-user_change': ['пользователь', 'user', 'изменить', 'менять', 'change'],
      'bicolors-user_change__24vb': ['пользователь', 'user', 'изменить', 'менять', 'change', '24vb'],
      'bicolors-user_check': ['пользователь', 'user', 'проверка', 'check'],
      'bicolors-user_check__24vb': ['пользователь', 'user', 'проверка', 'check', '24vb'],
      'bicolors-user_edit': ['пользователь', 'user', 'редактировать', 'править', 'edit'],
      'bicolors-user_edit__24vb': ['пользователь', 'user', 'редактировать', 'править', 'edit', '24vb'],
      'bicolors-user_lk': ['пользователь', 'user', 'личный кабинет', 'lk'],
      'bicolors-user_lk__24vb': ['пользователь', 'user', 'личный кабинет', 'lk', '24vb'],
      'bicolors-user_lk_service': ['пользователь', 'user', 'личный кабинет', 'lk', 'сервис', 'услуга', 'service'],
      'bicolors-user_lk_service__24vb': ['пользователь', 'user', 'личный кабинет', 'lk', 'сервис', 'услуга', 'service', '24vb'],
      'bicolors-user_manager': ['пользователь', 'user', 'менеджер', 'manager'],
      'bicolors-user_manager__24vb': ['пользователь', 'user', 'менеджер', 'manager', '24vb'],
      'bicolors-user_question': ['пользователь', 'user', 'вопрос', 'question'],
      'bicolors-user_question__24vb': ['пользователь', 'user', 'вопрос', 'question', '24vb'],
      'bicolors-user_stars': ['пользователь', 'user', 'звезда', 'звезды', 'stars'],
      'bicolors-user_stars__24vb': ['пользователь', 'user', 'звезда', 'звезды', 'stars', '24vb'],
      'bicolors-valute_amd': ['валюта', 'valute', 'армянский', 'драм', 'amd'],
      'bicolors-valute_amd__24vb': ['валюта', 'valute', 'армянский', 'драм', 'amd', '24vb'],
      'bicolors-valute_byn': ['валюта', 'valute', 'беларусский', 'byn'],
      'bicolors-valute_byn__24vb': ['валюта', 'valute', 'беларусский', 'byn', '24vb'],
      'bicolors-valute_euro': ['валюта', 'valute', 'евро', 'euro'],
      'bicolors-valute_euro__24vb': ['валюта', 'valute', 'евро', 'euro', '24vb'],
      'bicolors-valute_kgs': ['валюта', 'valute', 'сом', 'киргизский', 'kgs'],
      'bicolors-valute_kgs__24vb': ['валюта', 'valute', 'сом', 'киргизский', 'kgs', '24vb'],
      'bicolors-valute_kzt': ['валюта', 'valute', 'тенге', 'казахстанский', 'kzt'],
      'bicolors-valute_kzt__24vb': ['валюта', 'valute', 'тенге', 'казахстанский', 'kzt', '24vb'],
      'bicolors-valute_rub': ['валюта', 'valute', 'rub', 'руб'],
      'bicolors-valute_rub__24vb': ['валюта', 'valute', 'rub', 'руб', '24vb'],
      'bicolors-valute_usd': ['валюта', 'valute', 'доллар', 'usd'],
      'bicolors-valute_usd__24vb': ['валюта', 'valute', 'доллар', 'usd', '24vb'],
      'bicolors-velocity': ['скорость', 'velocity'],
      'bicolors-velocity__24vb': ['скорость', 'velocity', '24vb'],
      'bicolors-video': ['видео', 'ютуб', 'youtube', 'video'],
      'bicolors-video__24vb': ['видео', 'ютуб', 'youtube', 'video', '24vb'],
      'bicolors-web': ['страница', 'web'],
      'bicolors-web__24vb': ['страница', 'web', '24vb'],
      'bicolors-weight': ['вес', 'weight'],
      'bicolors-weight__24vb': ['вес', 'weight', '24vb'],
      'bicolors-whatsup': ['ватсап', 'whatsup'],
      'bicolors-whatsup__24vb': ['ватсап', 'whatsup', '24vb'],
      'bicolors-wheels_paired': ['колеса', 'wheels', 'пара', 'paired'],
      'bicolors-wheels_paired__24vb': ['колеса', 'wheels', 'пара', 'paired', '24vb'],
      'bicolors-widgets': ['виджет', 'widgets'],
      'bicolors-widgets__24vb': ['виджет', 'widgets', '24vb'],
      'bicolors-width': ['ширина', 'width'],
      'bicolors-width__24vb': ['ширина', 'width', '24vb'],
      'bicolors-yandex': ['яндекс', 'yandex'],
      'bicolors-yandex__24vb': ['яндекс', 'yandex', '24vb']
    };
    childrens.forEach(function (children) {
      var iconKey = children.querySelector('.js-icon-box');

      if (iconKey) {
        var classes = children.classList;

        for (var key in itemsObject) {
          if (itemsObject.hasOwnProperty(key)) {
            if (classes.contains(key)) {
              iconKey.setAttribute('title', itemsObject[key].join(', '));
            }
          }
        }
      }
    });
    $('.js-icon-box').popover('dispose');
    $('.js-icon-box').popover({
      sanitize: false,
      html: true,
      container: "body",
      trigger: "click"
    });
    inputField.addEventListener('input', function () {
      var inputValue = inputField.value.toLowerCase(); // Hide all children initially

      childrens.forEach(function (child) {
        return child.style.display = 'none';
      }); // Filter and display matching children

      for (var key in itemsObject) {
        if (itemsObject[key].some(function (value) {
          return value.includes(inputValue);
        })) {
          var matchingChild = parent.querySelector(".".concat(key));

          if (matchingChild) {
            matchingChild.style.display = 'block';
          }
        }
      }
    });
  }

  function init() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.js-icon-box').popover({
      sanitize: false,
      html: true,
      container: "body",
      trigger: "click"
    });
    $('.js-icon-box').on('shown.bs.popover', function (e) {
      $('.js-copyToClipboard').click(function (e) {
        var clipText = this.getAttribute('data-clipboard-text');
        navigator.clipboard.writeText(clipText).then(function () {
          console.log('Async: Copying to clipboard was successful!');
        });
        this.classList.add('btn-success');
        $('.js-icon-box').popover('hide');
        $('.toast').toast('show');
      });
      return;
    });
    $('.js-toast-btn').click(function (e) {
      $('#js-toast').toast('show');
    });
    $('.selectpicker').selectpicker();
  }

  var isListeningDocument = false;
  function FormsFree() {
    if (!isListeningDocument) {
      isListeningDocument = true;
      $(document).on('focus blur change', inputSelector, function (e) {
        return updateInputLabel(e.target);
      }).on('blur change', inputSelector, function (e) {
        return validateInput(e.target);
      }).on('reset', 'form', function (e) {
        var $form = $(e.target),
            $formInputs = $form.find(inputSelector);
        $formInputs.removeClass('valid').removeClass('invalid').each(function (index, input) {
          return updateInputLabel(input);
        });
        $form.find('select.initialized').each(function (index, select) {
          var $select = $(select),
              $visibleInput = $select.siblings('input.select-dropdown'),
              defaultValue = $select.children('[selected]').val();
          $select.val(defaultValue);
          $visibleInput.val(defaultValue);
        });
      }).on('focus', dateSelector, function (e) {
        e.target.type = 'date';
      }).on('blur', dateSelector, function (e) {
        e.target.type = 'text';
        $("label[for=\"".concat(e.target.id, "\"]")).removeClass('active');
      }).on('changed.bs.select', dropdownSelector, function (e) {
        updateDropdownLabel(e.target);
      }).on('changed.bs.select', allDropdownSelector, function (e) {
        updateDropdownLabel(e.target);
      });
    }

    $(inputSelector).each(function (index, input) {
      return updateInputLabel(input);
    });
    $(dateSelector).each(function (index, input) {
      return input.type = 'text';
    });
    $(dropdownSelector).each(function (index, select) {
      return updateDropdownLabel(select);
    });
    $(allDropdownSelector).each(function (index, select) {
      return updateDropdownLabel(select);
    });
  }
  var inputTypes = ['text', 'password', 'email', 'url', 'tel', 'number', 'search', 'search-md'],
      inputSelector = inputTypes.map(function (selector) {
    return "input[type=".concat(selector, "]");
  }).concat(['textarea']).join(','),
      dateSelector = 'input[type="date"]',
      dropdownSelector = 'select.js-select-formFree',
      allDropdownSelector = '.js-allSelect-formFree select',
      labelSelector = 'label, i';

  function getIsValid($input) {
    var maxLength = Number($input.attr('length')) || 0;
    return $input.is(':valid') && (!maxLength || maxLength > value.length);
  }

  function updateInputLabel(input) {
    var $this = $(input),
        $labelAndIcon = $this.siblings(labelSelector),
        isActive = $this.val().length > 0 || $this.is(':focus') || $this.attr('placeholder') != null;
    $labelAndIcon.toggleClass('active', isActive);
  }

  function validateInput(input) {
    var $this = $(input);

    if ($this.hasClass('validate')) {
      var hasValue = $this.val().length > 0,
          isValid = getIsValid($this);
      $this.toggleClass('valid', hasValue && isValid).toggleClass('invalid', !isValid);
    }
  }

  function updateDropdownLabel(select) {
    var $select = $(select),
        isActive = select.value.length > 0 || $select.find('option:selected:not(.bs-title-option)').length > 0;
    $select.closest('div').siblings(labelSelector).toggleClass('active', isActive);
  } // TODO: сбрасывать значение при нажатие удаления значения.
  // $(el).val('default').selectpicker("refresh");

  function AutoresizeTextarea() {
    var tx = document.getElementsByClassName("js-formControl__resize");

    for (var i = 0; i < tx.length; i++) {
      tx[i].setAttribute("style", "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;");
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = 0;
      this.style.height = this.scrollHeight + "px";
    }
  }

  function OnLoad() {
    itemActionMenu();
    multilevelMenu();
    CopyToClipboard();
    init();
    FormsFree();
    AutoresizeTextarea();
    searchIcon();
  }
  function tablesInit() {
    initTreeTable();
  }

  exports.OnLoad = OnLoad;
  exports.tablesInit = tablesInit;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
