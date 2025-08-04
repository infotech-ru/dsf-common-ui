import { FormsFree } from "./forms-free";

export function itemActionMenu(){
    $('.js-actionMenu').popover({
      container: 'body',
      html: true,
      trigger: 'focus',
      customClass: 'popoverActionMenu',
      sanitize: false
    });
}

export function multilevelMenu() {
  $('.multilevelMenu .dropdown-toggle').on('click', function (e) {
    var $el = $(this);
    var $parent = $(this).offsetParent(".dropdown-menu");
    $(this).parent("li").toggleClass('open');

    $('.multilevelMenu li.open').not($(this).parents("li")).removeClass("open");

    return false;
  });
}

export function CopyToClipboard() {
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  }

  let allCopyToClipboard = document.querySelectorAll(".js-copyToClipboard");
  for (let i = 0; i < allCopyToClipboard.length; i++){
    let itemCopyToClipboard = allCopyToClipboard[i];
    itemCopyToClipboard.addEventListener('click', function(e) {
      let clipText = itemCopyToClipboard.getAttribute('data-clipboard-text');
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(clipText);
        return;
      }
      navigator.clipboard.writeText(clipText).then(
        function(){
          console.log('Async: Copying to clipboard was successful!');
          console.log(clipText);
        }
      );
    });
  }
}

export function initTreeTable(options) {
  $("table.js-tree-table").treetable({
    expandable: true,
    indent: 34,
            expanderTemplate: "<span class='collapseTrIcon'><svg width='14px' height='14px'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus__24vb'></use></svg></span>",
    indenterTemplate: "<a class='collapseTrIcon_link' href=\"#\"></a>",
    ...options,
  });
}


export function searchIcon() {
      const inputField = document.getElementById('input-field-search-icon');
      const parent = document.querySelector('.js-icon-container');
      // const customClassInput = document.getElementById('js-customClass'); 
      const childrens = parent.querySelectorAll('.js-icon-block');
      // const checkbox = document.getElementById('withOutMinvb');
      const itemsObject = {
        'bicolors-2wd': ['2wd', 'minvb'],
        'bicolors-2wd__24vb': ['2wd', '24vb'],
        'bicolors-archive_in': ['archive', 'архив', 'in', 'minvb'],
        'bicolors-archive_in__24vb': ['archive', 'архив', 'in', '24vb'],
        'bicolors-archive_out': ['archive', 'архив', 'out', 'minvb'],
        'bicolors-archive_out__24vb': ['archive', 'архив', 'out', '24vb'],
        'bicolors-arrow-thin_down': ['arrow', 'стрелка', 'thin', 'down', 'вниз', 'низ', 'minvb'],
        'bicolors-arrow-thin_down__24vb': ['arrow', 'стрелка', 'thin', 'down', 'вниз', 'низ', '24vb'],
        'bicolors-arrow-thin_left': ['arrow', 'стрелка', 'thin', 'left', 'лево', 'влево', 'minvb'],
        'bicolors-arrow-thin_left__24vb': ['arrow', 'стрелка', 'thin', 'left', 'лево', 'влево', '24vb'],
        'bicolors-arrow-thin_right': ['arrow', 'стрелка', 'thin', 'right', 'право', 'вправо', 'minvb'],
        'bicolors-arrow-thin_right__24vb': ['arrow', 'стрелка', 'thin', 'right', 'право', 'вправо', '24vb'],
        'bicolors-arrow-thin_up': ['arrow', 'стрелка', 'thin', 'up', 'верх', 'вверх', 'minvb'],
        'bicolors-arrow-thin_up__24vb': ['arrow', 'стрелка', 'thin', 'up', 'верх', 'вверх', '24vb'],
        'bicolors-arrow_check': ['arrow', 'стрелка', 'проверка', 'ok', 'check', 'minvb'],
        'bicolors-arrow_check__24vb': ['arrow', 'стрелка', 'проверка', 'ok', 'check', '24vb'],
        'bicolors-arrow_down': ['arrow', 'стрелка', 'down', 'вниз', 'minvb'],
        'bicolors-arrow_down__24vb': ['arrow', 'стрелка', 'down', 'вниз', '24vb'],
        'bicolors-arrow_drag': ['arrow', 'стрелка', 'перетащить', 'drag', 'minvb'],
        'bicolors-arrow_drag__24vb': ['arrow', 'стрелка', 'перетащить', 'drag', '24vb'],
        'bicolors-arrow_expand': ['arrow', 'стрелка', 'развернуть', 'показать', 'expand', 'minvb'],
        'bicolors-arrow_expand__24vb': ['arrow', 'стрелка', 'развернуть', 'показать', 'expand', '24vb'],
        'bicolors-arrow_left': ['arrow', 'стрелка', 'left', 'лево', 'влево', 'вернуться', 'minvb'],
        'bicolors-arrow_left__24vb': ['arrow', 'стрелка', 'left', 'лево', 'влево', 'вернуться', '24vb'],
        'bicolors-arrow_left_double': ['arrow', 'стрелка', 'left', 'лево', 'влево', 'double', 'minvb'],
        'bicolors-arrow_left_double__24vb': ['arrow', 'стрелка', 'left', 'лево', 'влево', 'double', '24vb'],
        'bicolors-arrow_right': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'minvb'],
        'bicolors-arrow_right__24vb': ['arrow', 'стрелка', 'right', 'право', 'вправо', '24vb'],
        'bicolors-arrow_right_double': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'double', 'minvb'],
        'bicolors-arrow_right_double__24vb': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'double', '24vb'],
        'bicolors-arrow_right_down': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'down', 'вниз', 'minvb'],
        'bicolors-arrow_right_down__24vb': ['arrow', 'стрелка', 'right', 'право', 'вправо', 'down', 'вниз', '24vb'],
        'bicolors-arrow_rotate_left': ['arrow', 'стрелка', 'rotate', 'left', 'лево', 'влево', 'minvb'],
        'bicolors-arrow_rotate_left__24vb': ['arrow', 'стрелка', 'rotate', 'left', 'лево', 'влево', '24vb'],
        'bicolors-arrow_rotate_right': ['arrow', 'стрелка', 'rotate', 'right', 'право', 'вправо', 'minvb'],
        'bicolors-arrow_rotate_right__24vb': ['arrow', 'стрелка', 'rotate', 'right', 'право', 'вправо', '24vb'],
        'bicolors-arrow_up': ['arrow', 'стрелка', 'up', 'верх', 'вверх', 'minvb'],
        'bicolors-arrow_up__24vb': ['arrow', 'стрелка', 'up', 'верх', 'вверх', '24vb'],
        'bicolors-arrows_compare': ['arrows', 'стрелки', 'сравнить', 'compare', 'minvb'],
        'bicolors-arrows_compare__24vb': ['arrows', 'стрелки', 'сравнить', 'compare', '24vb'],
        'bicolors-arrows_redo': ['arrows', 'повтор', 'redo', 'minvb'],
        'bicolors-arrows_redo__24vb': ['arrows', 'повтор', 'redo', '24vb'],
        'bicolors-arrows_reload': ['arrows', 'перезагрузка', 'перезагрузить', 'reload', 'обновить', 'minvb'],
        'bicolors-arrows_reload__24vb': ['arrows', 'перезагрузка', 'перезагрузить', 'reload', 'обновить', '24vb'],
        'bicolors-arrows_undo': ['arrows', 'отмена', 'отменить', 'undo', 'minvb'],
        'bicolors-arrows_undo__24vb': ['arrows', 'отмена', 'отменить', 'undo', '24vb'],
        'bicolors-attention': ['внимание', 'треугольник', 'информация',  'attention', 'minvb'],
        'bicolors-attention__24vb': ['внимание', 'треугольник', 'информация',  'attention', '24vb'],
        'bicolors-boards': ['доски', 'boards', 'minvb'],
        'bicolors-boards__24vb': ['доски', 'boards', '24vb'],
        'bicolors-boards_vert': ['доска', 'board', 'minvb'],
        'bicolors-boards_vert__24vb': ['доска', 'board', '24vb'],
        'bicolors-boards_grid': ['доски', 'boards', 'сетка', 'grid', 'minvb',],
        'bicolors-boards_grid__24vb': ['доски', 'boards', 'сетка', 'grid', '24vb'],
        'bicolors-boards_tile': ['доски', 'boards', 'плитка', 'tile', 'minvb'],
        'bicolors-boards_tile__24vb': ['доски', 'boards', 'плитка', 'tile', '24vb'],
        'bicolors-bold': ['жирный', 'bold', 'minvb'],
        'bicolors-bold__24vb': ['жирный', 'bold', '24vb'],
        'bicolors-book': ['книга', 'book', 'журнал', 'magazine', 'minvb'],
        'bicolors-book__24vb': ['книга', 'book', 'журнал', 'magazine', '24vb'],
        'bicolors-book_car': ['книга', 'book', 'журнал', 'паспорт', 'passport', 'car', 'avto', 'автомобиль', 'magazine', 'minvb'],
        'bicolors-book_car__24vb': ['книга', 'book', 'журнал', 'паспорт', 'passport', 'car', 'avto', 'автомобиль', 'magazine', '24vb'],
        'bicolors-book_lamp': ['книга', 'book', 'журнал', 'magazine', 'лампа', 'lamp', 'minvb'],
        'bicolors-book_lamp__24vb': ['книга', 'book', 'журнал', 'magazine', 'лампа', 'lamp', '24vb'],
        'bicolors-calculator': ['калькулятор', 'calculator', 'minvb'],
        'bicolors-calculator__24vb': ['калькулятор', 'calculator', '24vb'],
        'bicolors-calendar': ['календарь', 'дата', 'calendar', 'minvb'],
        'bicolors-calendar__24vb': ['календарь', 'дата', 'calendar', '24vb'],
        'bicolors-calendar_date': ['календарь', 'calendar', 'дата', 'date', 'minvb'],
        'bicolors-calendar_date__24vb': ['календарь', 'calendar', 'дата', 'date', '24vb'],
        'bicolors-calendar_task': ['календарь', 'дата', 'calendar', 'задание', 'задача', 'task', 'minvb'],
        'bicolors-calendar_task__24vb': ['календарь', 'дата', 'calendar', 'задание', 'задача', 'task', '24vb'],
        'bicolors-call': ['звонок', 'call', 'phone', 'телефон', 'minvb'],
        'bicolors-call__24vb': ['звонок', 'call', 'phone', 'телефон', '24vb'],
        'bicolors-call_back': ['звонок', 'call', 'phone', 'телефон', 'назад', 'обратно', 'back', 'minvb'],
        'bicolors-call_back__24vb': ['звонок', 'call', 'phone', 'телефон', 'назад', 'обратно', 'back', '24vb'],
        'bicolors-call_cold': ['звонок', 'call', 'phone', 'телефон', 'холодный', 'cold', 'minvb'],
        'bicolors-call_cold__24vb': ['звонок', 'call', 'phone', 'телефон', 'холодный', 'cold', '24vb'],
        'bicolors-call_import': ['звонок', 'call', 'phone', 'телефон', 'импорт', 'import', 'minvb'],
        'bicolors-call_import__24vb': ['звонок', 'call', 'phone', 'телефон', 'импорт', 'import', '24vb'],
        'bicolors-callcenter': ['колцентр', 'callcenter', 'звонок', 'call', 'minvb'],
        'bicolors-callcenter__24vb': ['колцентр', 'callcenter', 'звонок', 'call', '24vb'],
        'bicolors-car': ['авто', 'машина','vehicle', 'car', 'minvb'],
        'bicolors-car__24vb': ['авто', 'машина','vehicle', 'car', '24vb'],
        'bicolors-car-cargo': ['авто', 'машина', 'vehicle', 'car', 'cargo', 'доставка', 'перевозчик', 'minvb'],
        'bicolors-car-cargo__24vb': ['авто', 'машина', 'vehicle', 'car', 'cargo', 'доставка', 'перевозчик', '24vb'],
        'bicolors-car_base': ['авто', 'машина','vehicle', 'car', 'base', 'minvb'],
        'bicolors-car_base__24vb': ['авто', 'машина','vehicle', 'car', 'base', '24vb'],
        'bicolors-car_buy': ['авто', 'машина','vehicle', 'car', 'купить', 'buy', 'minvb'],
        'bicolors-car_buy__24vb': ['авто', 'машина','vehicle', 'car', 'купить', 'buy', '24vb'],
        'bicolors-car_check': ['авто', 'машина','vehicle', 'car', 'проверка', 'ok', 'check', 'minvb'],
        'bicolors-car_check__24vb': ['авто', 'машина','vehicle', 'car', 'проверка', 'ok', 'check', '24vb'],
        'bicolors-car_enter': ['авто', 'машина','vehicle', 'car', 'вход', 'логин', 'login', 'enter', 'minvb'],
        'bicolors-car_enter__24vb': ['авто', 'машина','vehicle', 'car', 'вход', 'логин', 'login', 'enter', '24vb'],
        'bicolors-car_globe': ['авто', 'машина','vehicle', 'car', 'шар', 'глобус', 'земля', 'globe', 'minvb'],
        'bicolors-car_globe__24vb': ['авто', 'машина','vehicle', 'car', 'шар', 'глобус', 'земля', 'globe', '24vb'],
        'bicolors-car_pay': ['авто', 'машина','vehicle', 'car', 'платить', 'оплата', 'pay', 'minvb'],
        'bicolors-car_pay__24vb': ['авто', 'машина','vehicle', 'car', 'платить', 'оплата', 'pay', '24vb'],
        'bicolors-car_plus': ['авто', 'машина','vehicle', 'car', 'plus', 'плюс', 'minvb'],
        'bicolors-car_plus__24vb': ['авто', 'машина','vehicle', 'car', 'plus', 'плюс', '24vb'],
        'bicolors-car_service': ['авто', 'машина','vehicle', 'car', 'сервис', 'услуга', 'service', 'minvb'],
        'bicolors-car_service__24vb': ['авто', 'машина','vehicle', 'car', 'сервис', 'услуга', 'service', '24vb'],
        'bicolors-car_square_check': ['авто', 'машина','vehicle', 'car', 'квадрат', 'square', 'проверка', 'ok', 'check', 'minvb'],
        'bicolors-car_square_check__24vb': ['авто', 'машина','vehicle', 'car', 'квадрат', 'square', 'проверка', 'ok', 'check', '24vb'],
        'bicolors-car_stop': ['авто', 'машина','vehicle', 'car', 'остановить', 'прекратить', 'стоп', 'stop', 'minvb'],
        'bicolors-car_stop__24vb': ['авто', 'машина','vehicle', 'car', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
        'bicolors-car_subscribe': ['авто', 'машина','vehicle', 'car', 'подписка', 'subscribe', 'minvb'],
        'bicolors-car_subscribe__24vb': ['авто', 'машина','vehicle', 'car', 'подписка', 'subscribe', '24vb'],
        'bicolors-car_track_base': ['авто', 'машина','vehicle', 'car', 'base', 'track', 'грузовая', 'minvb'],
        'bicolors-car_track_base__24vb': ['авто', 'машина','vehicle', 'car', 'base', 'track', 'грузовая', '24vb'],
        'bicolors-car_update': ['авто', 'машина','vehicle', 'car', 'обновить', 'update', 'minvb'],
        'bicolors-car_update__24vb': ['авто', 'машина','vehicle', 'car', 'обновить', 'update', '24vb'],
        'bicolors-card': ['карта', 'card', 'minvb'],
        'bicolors-card__24vb': ['карта', 'card', '24vb'],
        'bicolors-cars_reload': ['авто', 'автомобили', 'cars', 'перезагрузка', 'перезагрузить', 'reload', 'minvb'],
        'bicolors-cars_reload__24vb': ['авто', 'автомобили', 'cars', 'перезагрузка', 'перезагрузить', 'reload', '24vb'],
        'bicolors-cars_warehouse': ['авто', 'автомобили', 'cars', 'склад', 'warehouse', 'minvb'],
        'bicolors-cars_warehouse__24vb': ['авто', 'автомобили', 'cars', 'склад', 'warehouse', '24vb'],
        'bicolors-cart': ['корзина', 'покупка', 'cart', 'minvb'],
        'bicolors-cart__24vb': ['корзина', 'покупка', 'cart', '24vb'],
        'bicolors-cart_check': ['корзина', 'покупка', 'cart', 'проверка', 'ok', 'check', 'minvb'],
        'bicolors-cart_check__24vb': ['корзина', 'покупка', 'cart', 'проверка', 'ok', 'check', '24vb'],
        'bicolors-cart_cogwheel': ['корзина', 'покупка', 'cart', 'шестеренка', 'шестерёнка', 'cogwheel', 'minvb'],
        'bicolors-cart_cogwheel__24vb': ['корзина', 'покупка', 'cart', 'шестеренка', 'шестерёнка', 'cogwheel', '24vb'],
        'bicolors-chart_bar': ['график', 'диаграмма', 'схема', 'chart', 'bar', 'minvb'],
        'bicolors-chart_bar__24vb': ['график', 'диаграмма', 'схема', 'chart', 'bar', '24vb'],
        'bicolors-chart_column': ['график', 'диаграмма', 'схема', 'chart', 'колонка', 'столбец', 'column', 'minvb'],
        'bicolors-chart_column__24vb': ['график', 'диаграмма', 'схема', 'chart', 'колонка', 'столбец', 'column', '24vb'],
        'bicolors-chart_graph': ['график', 'диаграмма', 'схема', 'chart', 'graph', 'minvb'],
        'bicolors-chart_graph__24vb': ['график', 'диаграмма', 'схема', 'chart', 'graph', '24vb'],
        'bicolors-chart_pie': ['график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie', 'minvb'],
        'bicolors-chart_pie__24vb': ['график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie', '24vb'],
        'bicolors-checklist': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'minvb'],
        'bicolors-checklist__24vb': ['список', 'перечень', 'чеклист', 'лист', 'checklist', '24vb'],
        'bicolors-checklist_add': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'добавить', 'add', 'minvb'],
        'bicolors-checklist_add__24vb': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'добавить', 'add', '24vb'],
        'bicolors-checklist_crown': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'корона', 'crown', 'minvb'],
        'bicolors-checklist_crown__24vb': ['список', 'перечень', 'чеклист', 'лист', 'checklist', 'корона', 'crown', '24vb'],
        'bicolors-checklists': ['списки', 'перечень', 'чеклисты', 'листы', 'checklists', 'minvb'],
        'bicolors-checklists__24vb': ['списки', 'перечень', 'чеклисты', 'листы', 'checklists', '24vb'],
        'bicolors-circle': ['круг', 'circle', 'minvb'],
        'bicolors-circle__24vb': ['круг', 'circle', '24vb'],
        'bicolors-circle_banned': ['круг', 'circle', 'запрещено', 'очистить', 'clear', 'бан', 'banned', 'minvb'],
        'bicolors-circle_banned__24vb': ['круг', 'circle', 'запрещено', 'очистить', 'clear', 'бан', 'banned', '24vb'],
        'bicolors-circle_check': ['круг', 'circle', 'проверка', 'ok', 'check', 'принято', 'пройдено', 'завершено', 'сохранить', 'minvb'],
        'bicolors-circle_check__24vb': ['круг', 'circle', 'проверка', 'ok', 'check', 'принято', 'пройдено', 'завершено', 'сохранить', '24vb'],
        'bicolors-circle_ignore': ['круг', 'circle', 'игнорировать', 'ignore', 'minvb', 'отмена'],
        'bicolors-circle_ignore__24vb': ['круг', 'circle', 'игнорировать', 'ignore', 'отмена', '24vb'],
        'bicolors-circle_information': ['круг', 'circle', 'информация', 'внимание', 'information', 'minvb'],
        'bicolors-circle_information__24vb': ['круг', 'circle', 'информация', 'внимание', 'information', '24vb'],
        'bicolors-circle_stop': ['круг', 'circle', 'остановить', 'прекратить', 'стоп', 'stop', 'minvb'],
        'bicolors-circle_stop__24vb': ['круг', 'circle', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
        'bicolors-check': ['check', 'ok', 'принято', 'пройдено', 'завершено', 'minvb'],
        'bicolors-check__24vb': ['check', 'ok', 'принято', 'пройдено', 'завершено', '24vb'],
        'bicolors-clear': ['удалить', 'очистить', 'очистить', 'clear', 'кисть', 'delete', 'minvb'],
        'bicolors-clear__24vb': ['удалить', 'очистить', 'очистить', 'clear', 'кисть', 'delete', '24vb'],
        'bicolors-click_map': ['карта', 'click', 'map', 'клик', 'minvb'],
        'bicolors-click_map__24vb': ['карта', 'click', 'map', 'клик', '24vb'],
        'bicolors-clipboard_doc': ['clipboard', 'вставить', 'doc', 'документ', 'планшет', 'minvb'],
        'bicolors-clipboard_doc__24vb': ['clipboard', 'вставить', 'doc', 'документ', 'планшет', '24vb'],
        'bicolors-close': ['закрыть', 'close', 'minvb'],
        'bicolors-close__24vb': ['закрыть', 'close', '24vb'],
        'bicolors-code': ['код', 'code', 'minvb'],
        'bicolors-code__24vb': ['код', 'code', '24vb'],
        'bicolors-coffee': ['кофе', 'coffee', 'minvb'],
        'bicolors-coffee__24vb': ['кофе', 'coffee', '24vb'],
        'bicolors-coffee_call': ['кофе', 'coffee', 'звонок', 'call', 'minvb'],
        'bicolors-coffee_call__24vb': ['кофе', 'coffee', 'звонок', 'call', '24vb'],
        'bicolors-coffee_internet': ['кофе', 'coffee', 'интернет', 'internet', 'minvb'],
        'bicolors-coffee_internet__24vb': ['кофе', 'coffee', 'интернет', 'internet', '24vb'],
        'bicolors-cogwheel': ['шестеренка', 'шестерёнка', 'cogwheel', 'minvb'],
        'bicolors-cogwheel__24vb': ['шестеренка', 'шестерёнка', 'cogwheel', '24vb'],
        'bicolors-cogwheel_reload': ['шестеренка', 'шестерёнка', 'cogwheel', 'перезагрузка', 'перезагрузить', 'reload', 'minvb'],
        'bicolors-cogwheel_reload__24vb': ['шестеренка', 'шестерёнка', 'cogwheel', 'перезагрузка', 'перезагрузить', 'reload', '24vb'],
        'bicolors-cogwheel_search': ['шестеренка', 'шестерёнка', 'cogwheel', 'поиск', 'search', 'minvb'],
        'bicolors-cogwheel_search__24vb': ['шестеренка', 'шестерёнка', 'cogwheel', 'поиск', 'search', '24vb'],
        'bicolors-colors': ['цвет', 'цвета', 'colors', 'minvb'],
        'bicolors-colors__24vb': ['цвет', 'цвета', 'colors', '24vb'],
        'bicolors-comment': ['комментарий', 'чат', 'comment', 'minvb'],
        'bicolors-comment__24vb': ['комментарий', 'чат', 'comment', '24vb'],
        'bicolors-control': ['управление', 'control', 'minvb'],
        'bicolors-control__24vb': ['управление', 'control', '24vb'],
        'bicolors-conversion': ['конверсия', 'conversion', 'minvb'],
        'bicolors-conversion__24vb': ['конверсия', 'conversion', '24vb'],
        'bicolors-copy': ['копия', 'копировать', 'copy', 'minvb'],
        'bicolors-copy__24vb': ['копия', 'копировать', 'copy', '24vb'],
        'bicolors-crm': ['crm', 'minvb'],
        'bicolors-crm__24vb': ['crm', '24vb'],
        'bicolors-crown': ['корона', 'crown', 'minvb'],
        'bicolors-crown__24vb': ['корона', 'crown', '24vb'],
        'bicolors-database': ['база', 'бд', 'database', 'minvb'],
        'bicolors-database__24vb': ['база', 'бд', 'database', '24vb'],
        'bicolors-deduplicate': ['клон', 'deduplicate', 'minvb'],
        'bicolors-deduplicate__24vb': ['клон', 'deduplicate', '24vb'],
        'bicolors-delete': ['удалить', 'очистить', 'delete', 'minvb'],
        'bicolors-delete__24vb': ['удалить', 'очистить', 'delete', '24vb'],
        'bicolors-discounts': ['скидки', 'скидка', 'sale', 'discounts', 'minvb'],
        'bicolors-discounts__24vb': ['скидки', 'скидка', 'sale', 'discounts', '24vb'],
        'bicolors-doc': ['doc', 'документ', 'minvb'],
        'bicolors-doc__24vb': ['doc', 'документ', '24vb'],
        'bicolors-doc_add': ['doc', 'документ', 'добавить', 'add', 'minvb'],
        'bicolors-doc_add__24vb': ['doc', 'документ', 'добавить', 'add', '24vb'],
        'bicolors-doc_bill': ['doc', 'документ', 'счёт', 'счет', 'bill', 'minvb'],
        'bicolors-doc_bill__24vb': ['doc', 'документ', 'счёт', 'счет', 'bill', '24vb'],
        'bicolors-doc_certificate': ['doc', 'документ', 'сертификат', 'справка', 'certificate', 'minvb'],
        'bicolors-doc_certificate__24vb': ['doc', 'документ', 'сертификат', 'справка', 'certificate', '24vb'],
        'bicolors-doc_chart_pie': ['doc', 'документ', 'график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie', 'minvb'],
        'bicolors-doc_chart_pie__24vb': ['doc', 'документ', 'график', 'диаграмма', 'схема', 'chart', 'пирог', 'pie', '24vb'],
        'bicolors-doc_clear': ['doc', 'документ', 'удалить', 'очистить', 'очистить', 'clear', 'minvb'],
        'bicolors-doc_clear__24vb': ['doc', 'документ', 'удалить', 'очистить', 'очистить', 'clear', '24vb'],
        'bicolors-doc_cogwheel': ['doc', 'документ', 'шестеренка', 'шестерёнка', 'cogwheel', 'minvb'],
        'bicolors-doc_cogwheel__24vb': ['doc', 'документ', 'шестеренка', 'шестерёнка', 'cogwheel', '24vb'],
        'bicolors-doc_excel': ['doc', 'документ', 'эксель', 'excel', 'xls', 'minvb'],
        'bicolors-doc_excel__24vb': ['doc', 'документ', 'эксель', 'excel', 'xls', '24vb'],
        'bicolors-doc_invoice': ['doc', 'документ', 'счет-фактура', 'счет', 'счёт', 'invoice', 'minvb'],
        'bicolors-doc_invoice__24vb': ['doc', 'документ', 'счет-фактура', 'счет', 'счёт', 'invoice', '24vb'],
        'bicolors-doc_info': ['doc', 'документ', 'info', 'информация', 'minvb'],
        'bicolors-doc_info__24vb': ['doc', 'документ', 'info', 'информация', '24vb'],
        'bicolors-doc_pdf': ['doc', 'документ', 'пдф', 'pdf', 'minvb'],
        'bicolors-doc_pdf__24vb': ['doc', 'документ', 'пдф', 'pdf', '24vb'],
        'bicolors-doc_service': ['doc', 'документ', 'сервис', 'услуга', 'service', 'minvb'],
        'bicolors-doc_service__24vb': ['doc', 'документ', 'сервис', 'услуга', 'service', '24vb'],
        'bicolors-doc_shield': ['doc', 'документ', 'щит', 'защита', 'безопасность', 'shield', 'minvb'],
        'bicolors-doc_shield__24vb': ['doc', 'документ', 'щит', 'защита', 'безопасность', 'shield', '24vb'],
        'bicolors-doc_xml': ['doc', 'документ', 'xml', 'minvb'],
        'bicolors-doc_xml__24vb': ['doc', 'документ', 'xml', '24vb'],
        'bicolors-docs_evacuate': ['документы', 'docs', 'эвакуировать', 'evacuate', 'minvb'],
        'bicolors-docs_evacuate__24vb': ['документы', 'docs', 'эвакуировать', 'evacuate', '24vb'],
        'bicolors-docs_reports': ['документы', 'docs', 'reports', 'minvb'],
        'bicolors-docs_reports__24vb': ['документы', 'docs', 'reports', '24vb'],
        'bicolors-door_enter': ['дверь', 'door', 'вход', 'логин', 'login', 'enter', 'minvb'],
        'bicolors-door_enter__24vb': ['дверь', 'door', 'вход', 'логин', 'login', 'enter', '24vb'],
        'bicolors-door_exit': ['дверь', 'door', 'выход', 'exit', 'minvb'],
        'bicolors-door_exit__24vb': ['дверь', 'door', 'выход', 'exit', '24vb'],
        'bicolors-edit': ['редактировать', 'править', 'edit', 'minvb'],
        'bicolors-edit__24vb': ['редактировать', 'править', 'edit', '24vb'],
        'bicolors-email': ['мыло', 'почта', 'e-mail', 'email', 'minvb'],
        'bicolors-email__24vb': ['мыло', 'почта', 'e-mail', 'email', '24vb'],
        'bicolors-email_ok': ['мыло', 'почта', 'e-mail', 'email', 'ok', 'minvb'],
        'bicolors-email_ok__24vb': ['мыло', 'почта', 'e-mail', 'email', 'ok', '24vb'],
        'bicolors-email_plus__24vb': ['мыло', 'почта', 'e-mail', 'email', 'plus', 'плюс', '24vb'],
        'bicolors-email_plus': ['мыло', 'почта', 'e-mail', 'email', 'plus', 'плюс', 'minvb'],
        'bicolors-email_progress': ['мыло', 'почта', 'e-mail', 'email', 'продвижение', 'прогресс', 'progress', 'minvb'],
        'bicolors-email_progress__24vb': ['мыло', 'почта', 'e-mail', 'email', 'продвижение', 'прогресс', 'progress', '24vb'],
        'bicolors-email_stop': ['мыло', 'почта', 'e-mail', 'email', 'остановить', 'прекратить', 'стоп', 'stop', 'minvb'],
        'bicolors-email_stop__24vb': ['мыло', 'почта', 'e-mail', 'email', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
        'bicolors-emails': ['почта', 'письма', 'emails', 'minvb'],
        'bicolors-emails__24vb': ['почта', 'письма', 'emails', '24vb'],
        'bicolors-engine': ['мотор', 'двигатель', 'engine', 'minvb'],
        'bicolors-engine__24vb': ['мотор', 'двигатель', 'engine', '24vb'],
        'bicolors-erase': ['erase', 'стёрка', 'стерка', 'стерать', 'wipe', 'delete', 'minvb'],
        'bicolors-erase__24vb': ['erase', 'стёрка', 'стерка', 'стерать', 'wipe', 'delete', '24vb'],
        'bicolors-export': ['экспорт', 'выгрузить', 'export', 'скачать', 'minvb'],
        'bicolors-export__24vb': ['экспорт', 'выгрузить', 'export', 'скачать', '24vb'],
        'bicolors-eye': ['глаз', 'око', 'eye', 'minvb'],
        'bicolors-eye__24vb': ['глаз', 'око', 'eye', '24vb'],
        'bicolors-eye_close': ['глаз', 'око', 'eye', 'закрыть', 'close', 'minvb'],
        'bicolors-eye_close__24vb': ['глаз', 'око', 'eye', 'закрыть', 'close', '24vb'],
        'bicolors-favorite': ['любимый', 'favorite', 'minvb'],
        'bicolors-favorite__24vb': ['любимый', 'favorite', '24vb'],
        'bicolors-favorite_full': ['любимый', 'favorite', 'полный', 'заполненый', 'full', 'minvb'],
        'bicolors-favorite_full__24vb': ['любимый', 'favorite', 'полный', 'заполненый', 'full', '24vb'],
        'bicolors-filter': ['фильтр', 'filter', 'minvb'],
        'bicolors-filter__24vb': ['фильтр', 'filter', '24vb'],
        'bicolors-filter_plus': ['фильтр', 'filter', 'плюс', 'plus', 'minvb'],
        'bicolors-filter_plus__24vb': ['фильтр', 'filter', 'плюс', 'plus', '24vb'],
        'bicolors-filter_check': ['фильтр', 'filter', 'check', 'ok', 'добавлен', 'minvb'],
        'bicolors-filter_check__24vb': ['фильтр', 'filter', 'check', 'ok', 'добавлен', '24vb'],
        'bicolors-folder': ['папка', 'folder', 'minvb'],
        'bicolors-folder__24vb': ['папка', 'folder', '24vb'],
        'bicolors-folder_arrow-in': ['папка', 'folder', 'arrow', 'стрелка', 'minvb'],
        'bicolors-folder_arrow-in__24vb': ['папка', 'folder', 'arrow', 'стрелка', '24vb'],
        'bicolors-folder_plus': ['папка', 'folder', 'plus', 'плюс', 'minvb'],
        'bicolors-folder_plus__24vb': ['папка', 'folder', 'plus', 'плюс', '24vb'],
        'bicolors-gearbox': ['коробка', 'передача', 'gearbox', 'minvb'],
        'bicolors-gearbox__24vb': ['коробка', 'передача', 'gearbox', '24vb'],
        'bicolors-gift': ['подарок', 'gift', 'minvb'],
        'bicolors-gift__24vb': ['подарок', 'gift', '24vb'],
        'bicolors-globe': ['шар', 'глобус', 'земля', 'globe', 'minvb'],
        'bicolors-globe__24vb': ['шар', 'глобус', 'земля', 'globe', '24vb'],
        'bicolors-globe_arrow_right': ['шар', 'глобус', 'земля', 'globe', 'arrow', 'стрелка', 'right', 'право', 'вправо', 'minvb'],
        'bicolors-globe_arrow_right__24vb': ['шар', 'глобус', 'земля', 'globe', 'arrow', 'стрелка', 'right', 'право', 'вправо', '24vb'],
        'bicolors-gps': ['gps', 'minvb'],
        'bicolors-gps__24vb': ['gps', '24vb'],
        'bicolors-guarantee_tracker': ['гарантия', 'guarantee', 'трекер', 'tracker', 'minvb'],
        'bicolors-guarantee_tracker__24vb': ['гарантия', 'guarantee', 'трекер', 'tracker', '24vb'],
        'bicolors-hand_car': ['рука', 'hand', 'авто', 'машина','vehicle', 'car', 'minvb'],
        'bicolors-hand_car__24vb': ['рука', 'hand', 'авто', 'машина','vehicle', 'car', '24vb'],
        'bicolors-hand_key': ['рука', 'hand', 'ключ', 'key', 'minvb'],
        'bicolors-hand_key__24vb': ['рука', 'hand', 'ключ', 'key', '24vb'],
        'bicolors-hand_shield': ['рука', 'hand', 'щит', 'защита', 'безопасность', 'shield', 'minvb'],
        'bicolors-hand_shield__24vb': ['рука', 'hand', 'щит', 'защита', 'безопасность', 'shield', '24vb'],
        'bicolors-hand_user': ['рука', 'hand', 'пользователь', 'user', 'minvb'],
        'bicolors-hand_user__24vb': ['рука', 'hand', 'пользователь', 'user', '24vb'],
        'bicolors-height_collapse': ['высота', 'height', 'сверунть', 'скрыть', 'collapse', 'minvb'],
        'bicolors-height_collapse__24vb': ['высота', 'height', 'сверунть', 'скрыть', 'collapse', '24vb'],
        'bicolors-height_expand': ['высота', 'height', 'развернуть', 'показать', 'expand', 'minvb'],
        'bicolors-height_expand__24vb': ['высота', 'height', 'развернуть', 'показать', 'expand', '24vb'],
        'bicolors-home': ['дом', 'home', 'minvb'],
        'bicolors-home__24vb': ['дом', 'home', '24vb'],
        'bicolors-house': ['дом', 'home', 'house', 'minvb'],
        'bicolors-house__24vb': ['дом', 'home', 'house', '24vb'],
        'bicolors-image': ['картинка', 'изображение', 'image', 'minvb'],
        'bicolors-image__24vb': ['картинка', 'изображение', 'image', '24vb'],
        'bicolors-image_car': ['картинка', 'изображение', 'image', 'car', 'автомобиль', 'reg', 'регистрация', 'minvb'],
        'bicolors-image_car__24vb': ['картинка', 'изображение', 'image', 'car', 'автомобиль', 'reg', 'регистрация', '24vb'],
        'bicolors-import': ['импорт', 'import', 'закачать', 'minvb'],
        'bicolors-import__24vb': ['импорт', 'import', 'закачать', '24vb'],
        'bicolors-insurance': ['страховка', 'insurance', 'minvb'],
        'bicolors-insurance__24vb': ['страховка', 'insurance', '24vb'],
        'bicolors-integration': ['интеграция', 'integration', 'minvb'],
        'bicolors-integration__24vb': ['интеграция', 'integration', '24vb'],
        'bicolors-integrationall': ['интеграция', 'integration', 'integrationall', 'minvb'],
        'bicolors-integrationall__24vb': ['интеграция', 'integration', 'integrationall', '24vb'],
        'bicolors-lamp': ['лампа', 'lamp', 'minvb'],
        'bicolors-lamp__24vb': ['лампа', 'lamp', '24vb'],
        'bicolors-leasing': ['лизинг', 'leasing', 'компания', 'юридическое', 'minvb'],
        'bicolors-leasing__24vb': ['лизинг', 'leasing', 'компания', 'юридическое', '24vb'],
        'bicolors-link': ['ссылка', 'link', 'minvb'],
        'bicolors-link__24vb': ['ссылка', 'link', '24vb'],
        'bicolors-link_remove': ['ссылка', 'link', 'unlink', 'удалить', 'remove', 'minvb'],
        'bicolors-link_remove__24vb': ['ссылка', 'link', 'unlink', 'удалить', 'remove', '24vb'],
        'bicolors-list_checked': ['список', 'list', 'проверено', 'checked', 'принято', 'пройдено', 'завершено', 'minvb'],
        'bicolors-list_checked__24vb': ['список', 'list', 'проверено', 'checked', 'принято', 'пройдено', 'завершено', '24vb'],
        'bicolors-list_numbered': ['список', 'list', 'номер', 'numbered', 'minvb'],
        'bicolors-list_numbered__24vb': ['список', 'list', 'номер', 'numbered', '24vb'],
        'bicolors-lock': ['замок', 'закрыто', 'заблокировано', 'lock', 'minvb'],
        'bicolors-lock__24vb': ['замок', 'закрыто', 'заблокировано', 'lock', '24vb'],
        'bicolors-lock_open': ['замок', 'закрыто', 'заблокировано', 'lock', 'открыто', 'open', 'minvb'],
        'bicolors-lock_open__24vb': ['замок', 'закрыто', 'заблокировано', 'lock', 'открыто', 'open', '24vb'],
        'bicolors-megaphone': ['мегафон', 'megaphone', 'minvb'],
        'bicolors-megaphone__24vb': ['мегафон', 'megaphone', '24vb'],
        'bicolors-megaphone_stop': ['мегафон', 'megaphone', 'остановить', 'прекратить', 'стоп', 'stop', 'minvb'],
        'bicolors-megaphone_stop__24vb': ['мегафон', 'megaphone', 'остановить', 'прекратить', 'стоп', 'stop', '24vb'],
        'bicolors-menu': ['меню', 'menu', 'minvb'],
        'bicolors-menu__24vb': ['меню', 'menu', '24vb'],
        'bicolors-menu_big': ['меню', 'menu', 'big', 'minvb'],
        'bicolors-menu_big__24vb': ['меню', 'menu', 'big', '24vb'],
        'bicolors-menu_fries': ['меню', 'menu', 'fries', 'minvb'],
        'bicolors-menu_fries__24vb': ['меню', 'menu', 'fries', '24vb'],
        'bicolors-minus': ['минус', 'minus', 'minvb'],
        'bicolors-minus__24vb': ['минус', 'minus', '24vb'],
        'bicolors-money': ['монета', 'деньги', 'money', 'minvb'],
        'bicolors-money__24vb': ['монета', 'деньги', 'money', '24vb'],
        'bicolors-newspapper': ['газета', 'newspapper', 'minvb'],
        'bicolors-newspapper__24vb': ['газета', 'newspapper', '24vb'],
        'bicolors-notification': ['уведомление', 'сообщение','bell', 'колокольчик', 'notification', 'minvb'],
        'bicolors-notification__24vb': ['уведомление', 'сообщение','bell', 'колокольчик', 'notification', '24vb'],
        'bicolors-options': ['опции', 'варианты', 'options', 'minvb'],
        'bicolors-options__24vb': ['опции', 'варианты', 'options', '24vb'],
        'bicolors-paperclip': ['скрепка', 'прикреплять', 'paperclip', 'minvb'],
        'bicolors-paperclip__24vb': ['скрепка', 'прикреплять', 'paperclip', '24vb'],
        'bicolors-pause': ['пауза', 'pause', 'minvb'],
        'bicolors-pause__24vb': ['пауза', 'pause', '24vb'],
        'bicolors-phone': ['телефон', 'phone', 'minvb'],
        'bicolors-phone__24vb': ['телефон', 'phone', '24vb'],
        'bicolors-photo': ['фото', 'иpображение', 'photo', 'minvb'],
        'bicolors-photo__24vb': ['фото', 'иpображение', 'photo', '24vb'],
        'bicolors-pin': ['pin', 'карта', 'map', 'baloon', 'minvb'],
        'bicolors-pin__24vb': ['pin', 'карта', 'map', 'baloon', '24vb'],
        'bicolors-plan': ['план', 'plan', 'minvb'],
        'bicolors-plan__24vb': ['план', 'plan', '24vb'],
        'bicolors-play': ['начать', 'проиграть', 'play', 'minvb'],
        'bicolors-play_1_5x': ['начать', 'проиграть', 'play', '1.5x', 'minvb'],
        'bicolors-play_1_5x__24vb': ['начать', 'проиграть', 'play', '1.5x', '24vb'],
        'bicolors-play_2x': ['начать', 'проиграть', 'play', '2x', 'minvb'],
        'bicolors-play_2x__24vb': ['начать', 'проиграть', 'play', '2x', '24vb', 'minvb'],
        'bicolors-play__24vb': ['начать', 'проиграть', 'play', '24vb'],
        'bicolors-play_next': ['начать', 'проиграть', 'play', 'next', 'minvb'],
        'bicolors-play_next__24vb': ['начать', 'проиграть', 'play', 'next', '24vb'],
        'bicolors-plus': ['plus', 'плюс', 'minvb'],
        'bicolors-plus__24vb': ['plus', 'плюс', '24vb'],
        'bicolors-presentation': ['презентация', 'представление', 'presentation', 'minvb'],
        'bicolors-presentation__24vb': ['презентация', 'представление', 'presentation', '24vb'],
        'bicolors-printer': ['принтер', 'напечатать', 'printer', 'minvb'],
        'bicolors-printer__24vb': ['принтер', 'напечатать', 'printer', '24vb'],
        'bicolors-qr-code': ['qr', 'код', 'code', 'qr-code', 'qrcode', 'minvb'],
        'bicolors-qr-code__24vb': ['qr', 'код', 'code', 'qr-code', 'qrcode', '24vb'],
        'bicolors-questions': ['questions', 'вопрос', 'circle', 'круг', 'minvb'],
        'bicolors-questions__24vb': ['questions', 'вопрос', 'circle', 'круг', '24vb'],
        'bicolors-questions_full': ['questions', 'вопрос', 'circle', 'круг', 'полный', 'заполненый', 'full', 'minvb'],
        'bicolors-questions_full__24vb': ['questions', 'вопрос', 'circle', 'круг', 'полный', 'заполненый', 'full', '24vb'],
        'bicolors-radio': ['радио', 'аудио', 'звук', 'radio', 'minvb'],
        'bicolors-radio__24vb': ['радио', 'аудио', 'звук', 'radio', '24vb'],
        'bicolors-rocket': ['ракета', 'старт', 'rocket', 'minvb'],
        'bicolors-rocket__24vb': ['ракета', 'старт', 'rocket', '24vb'],
        'bicolors-search': ['поиск', 'search', 'лупа', 'minvb'],
        'bicolors-search__24vb': ['поиск', 'search', 'лупа', '24vb'],
        'bicolors-search_plus': ['поиск', 'search', 'лупа', 'плюс', 'plus', 'minvb'],
        'bicolors-search_plus__24vb': ['поиск', 'search', 'лупа', 'плюс', 'plus', '24vb'],
        'bicolors-send': ['send', 'отправить', 'enter', 'minvb'],
        'bicolors-send__24vb': ['send', 'отправить', 'enter', '24vb'],
        'bicolors-service_plus': ['сервис', 'услуга', 'service', 'plus', 'плюс', 'minvb'],
        'bicolors-service_plus__24vb': ['сервис', 'услуга', 'service', 'plus', 'плюс', '24vb'],
        'bicolors-service_rub': ['сервис', 'услуга', 'service', 'rub', 'руб', 'minvb'],
        'bicolors-service_rub__24vb': ['сервис', 'услуга', 'service', 'rub', 'руб', '24vb'],
        'bicolors-service_time_wait': ['сервис', 'услуга', 'service', 'time', 'wait', 'prolong', 'ожидание', 'продлить', 'minvb'],
        'bicolors-service_time_wait__24vb': ['сервис', 'услуга', 'service', 'time', 'wait', 'prolong', 'ожидание', 'продлить', '24vb'],
        'bicolors-share': ['поделиться', 'share', 'minvb'],
        'bicolors-share__24vb': ['поделиться', 'share', '24vb'],
        'bicolors-shield': ['щит', 'защита', 'безопасность', 'shield', 'defence', 'protection', 'minvb'],
        'bicolors-shield__24vb': ['щит', 'защита', 'безопасность', 'shield', 'defence', 'protection', '24vb'],
        'bicolors-shield_plus': ['щит', 'защита', 'безопасность', 'shield', 'defence', 'protection', 'плюс', 'minvb'],
        'bicolors-shield_plus__24vb': ['щит', 'защита', 'безопасность', 'shield', 'defence', 'protection', 'плюс', '24vb'],
        'bicolors-skype': ['скайп', 'skype', 'minvb'],
        'bicolors-skype__24vb': ['скайп', 'skype', '24vb'],
        'bicolors-sms': ['смс', 'сообщение', 'sms', 'minvb'],
        'bicolors-sms__24vb': ['смс', 'сообщение', 'sms', '24vb'],
        'bicolors-sms_check': ['смс', 'сообщение', 'sms', 'проверка', 'ok', 'check', 'minvb'],
        'bicolors-sms_check__24vb': ['смс', 'сообщение', 'sms', 'проверка', 'ok', 'check', '24vb'],
        'bicolors-social': ['сети', 'социальные', 'social', 'minvb'],
        'bicolors-social__24vb': ['сети', 'социальные', 'social', '24vb'],
        'bicolors-sort_asc': ['сортировка', 'sort', 'возрастание', 'увеличение', 'asc', 'minvb'],
        'bicolors-sort_asc__24vb': ['сортировка', 'sort', 'возрастание', 'увеличение', 'asc', '24vb'],
        'bicolors-sort_az': ['сортировка', 'sort', 'возрастание', 'увеличение', 'az', 'minvb'],
        'bicolors-sort_az__24vb': ['сортировка', 'sort', 'возрастание', 'увеличение', 'az', '24vb'],
        'bicolors-sort_desc': ['сортировка', 'sort', 'уменьшение', 'убывание', 'desc', 'minvb'],
        'bicolors-sort_desc__24vb': ['сортировка', 'sort', 'уменьшение', 'убывание', 'desc', '24vb'],
        'bicolors-sort_za': ['сортировка', 'sort', 'уменьшение', 'убывание', 'za', 'minvb'],
        'bicolors-sort_za__24vb': ['сортировка', 'sort', 'уменьшение', 'убывание', 'za', '24vb'],
        'bicolors-spy': ['скрыто', 'скрыть', 'шпион', 'spy', 'minvb'],
        'bicolors-spy__24vb': ['скрыто', 'скрыть', 'шпион', 'spy', '24vb'],
        'bicolors-square_empty': ['квадрат', 'square', 'пустой', 'empty', 'stop', 'стоп', 'остановить', 'minvb'],
        'bicolors-square_empty__24vb': ['квадрат', 'square', 'пустой', 'empty', 'stop', 'стоп', 'остановить', '24vb'],
        'bicolors-square_empty_check': ['квадрат', 'square', 'пустой', 'empty', 'проверка', 'ok', 'принято', 'пройдено', 'завершено', 'check', 'minvb'],
        'bicolors-square_empty_check__24vb': ['квадрат', 'square', 'пустой', 'empty', 'проверка', 'ok', 'принято', 'пройдено', 'завершено', 'check', '24vb'],
        'bicolors-square_rotate_left': ['квадрат', 'square', 'rotate', 'повернуть', 'картинка', 'images', 'влево', 'minvb'],
        'bicolors-square_rotate_left__24vb': ['квадрат', 'square', 'rotate', 'повернуть', 'картинка', 'images', 'влево', '24vb'],
        'bicolors-stamp_100pr': ['печать', 'stamp', '100', 'percent', 'minvb'],
        'bicolors-stamp_100pr__24vb': ['печать', 'stamp', '100', 'percent', '24vb'],
        'bicolors-stamp_award': ['печать', 'stamp', 'награда', 'приз', 'award', 'minvb'],
        'bicolors-stamp_award__24vb': ['печать', 'stamp', 'награда', 'приз', 'award', '24vb'],
        'bicolors-stamp_bonus': ['печать', 'stamp', 'bonus', 'minvb'],
        'bicolors-stamp_bonus__24vb': ['печать', 'stamp', 'bonus', '24vb'],
        'bicolors-star': ['звезда', 'star', 'minvb'],
        'bicolors-star__24vb': ['звезда', 'star', '24vb'],
        'bicolors-stars': ['звезда', 'звезды', 'stars', 'minvb'],
        'bicolors-stars__24vb': ['звезда', 'звезды', 'stars', '24vb'],
        'bicolors-start': ['пуск', 'начало', 'запуск', 'start', 'minvb'],
        'bicolors-start__24vb': ['пуск', 'начало', 'запуск', 'start', '24vb'],
        'bicolors-sunwatch': ['sunwatch', 'время', 'clock', 'часы', 'minvb'],
        'bicolors-sunwatch__24vb': ['sunwatch', 'время', 'clock', 'часы', '24vb'],
        'bicolors-table': ['таблица', 'table', 'minvb'],
        'bicolors-table__24vb': ['таблица', 'table', '24vb'],
        'bicolors-tag': ['тег', 'тэг', 'tag', 'minvb'],
        'bicolors-tag__24vb': ['тег', 'тэг', 'tag', '24vb'],
        'bicolors-tags': ['тег', 'тэг', 'теги', 'tags', 'minvb'],
        'bicolors-tags__24vb': ['тег', 'тэг', 'теги', 'tags', '24vb'],
        'bicolors-target': ['цель', 'target', 'minvb'],
        'bicolors-target__24vb': ['цель', 'target', '24vb'],
        'bicolors-teach': ['учить', 'teach', 'minvb'],
        'bicolors-teach__24vb': ['учить', 'teach', '24vb'],
        'bicolors-telegram': ['telegram', 'телега', 'отправить', 'minvb'],
        'bicolors-telegram__24vb': ['telegram', 'телега', 'отправить', '24vb'],
        'bicolors-telegram_circle': ['telegram', 'телега', 'круг', 'circle', 'minvb'],
        'bicolors-telegram_circle__24vb': ['telegram', 'телега', 'круг', 'circle', '24vb'],
        'bicolors-telegram_circle_delete': ['telegram', 'телега', 'круг', 'circle', 'delete', 'удалить', 'minvb'],
        'bicolors-telegram_circle_delete__24vb': ['telegram', 'телега', 'круг', 'circle', 'delete', 'удалить', '24vb'],
        'bicolors-testdrive': ['тестдрайв', 'testdrive', 'minvb'],
        'bicolors-testdrive__24vb': ['тестдрайв', 'testdrive', '24vb'],
        'bicolors-time': ['время', 'часы', 'time', 'clock', 'minvb'],
        'bicolors-time__24vb': ['время', 'часы', 'time', 'clock', '24vb'],
        'bicolors-time_wait': ['время', 'часы', 'time', 'wait', 'clock', 'prolong', 'продлить', 'minvb'],
        'bicolors-time_wait__24vb': ['время', 'часы', 'time', 'wait', 'clock', 'prolong', 'продлить', '24vb'],
        'bicolors-timeback': ['обратно', 'обратный', 'время', 'назад', 'timeback', 'clock', 'часы', 'история', 'minvb'],
        'bicolors-timeback__24vb': ['обратно', 'обратный', 'время', 'назад', 'timeback', 'clock', 'часы', 'история', '24vb'],
        'bicolors-tv': ['tv', 'minvb'],
        'bicolors-tv__24vb': ['tv', '24vb'],
        'bicolors-user_add': ['пользователь', 'user', 'добавить', 'add', 'minvb'],
        'bicolors-user_add__24vb': ['пользователь', 'user', 'добавить', 'add', '24vb'],
        'bicolors-user_card': ['пользователь', 'user', 'карта', 'card', 'minvb'],
        'bicolors-user_card__24vb': ['пользователь', 'user', 'карта', 'card', '24vb'],
        'bicolors-user_cards': ['пользователь', 'user', 'cards', 'minvb'],
        'bicolors-user_cards__24vb': ['пользователь', 'user', 'cards', '24vb'],
        'bicolors-user_change': ['пользователь', 'user', 'изменить', 'менять', 'change', 'minvb'],
        'bicolors-user_change__24vb': ['пользователь', 'user', 'изменить', 'менять', 'change', '24vb'],
        'bicolors-user_check': ['пользователь', 'user', 'проверка', 'ok', 'check', 'minvb'],
        'bicolors-user_check__24vb': ['пользователь', 'user', 'проверка', 'ok', 'check', '24vb'],
        'bicolors-user_edit': ['пользователь', 'user', 'редактировать', 'править', 'edit', 'minvb'],
        'bicolors-user_edit__24vb': ['пользователь', 'user', 'редактировать', 'править', 'edit', '24vb'],
        'bicolors-user_lk': ['пользователь', 'user', 'личный кабинет', 'lk', 'minvb'],
        'bicolors-user_lk__24vb': ['пользователь', 'user', 'личный кабинет', 'lk', '24vb'],
        'bicolors-user_lk_service': ['пользователь', 'user', 'личный кабинет', 'lk', 'сервис', 'услуга', 'service', 'minvb'],
        'bicolors-user_lk_service__24vb': ['пользователь', 'user', 'личный кабинет', 'lk', 'сервис', 'услуга', 'service', '24vb'],
        'bicolors-user_manager': ['пользователь', 'user', 'менеджер', 'manager', 'minvb'],
        'bicolors-user_manager__24vb': ['пользователь', 'user', 'менеджер', 'manager', '24vb'],
        'bicolors-user_question': ['пользователь', 'user', 'вопрос', 'question', 'minvb'],
        'bicolors-user_question__24vb': ['пользователь', 'user', 'вопрос', 'question', '24vb'],
        'bicolors-user_stars': ['пользователь', 'user', 'звезда', 'звезды', 'stars', 'minvb'],
        'bicolors-user_stars__24vb': ['пользователь', 'user', 'звезда', 'звезды', 'stars', '24vb'],
        'bicolors-valute_amd': ['валюта', 'valute', 'армянский', 'драм', 'amd', 'minvb'],
        'bicolors-valute_amd__24vb': ['валюта', 'valute', 'армянский', 'драм', 'amd', '24vb'],
        'bicolors-valute_byn': ['валюта', 'valute', 'беларусский', 'byn', 'minvb'],
        'bicolors-valute_byn__24vb': ['валюта', 'valute', 'беларусский', 'byn', '24vb'],
        'bicolors-valute_euro': ['валюта', 'valute', 'евро', 'euro', 'minvb'],
        'bicolors-valute_euro__24vb': ['валюта', 'valute', 'евро', 'euro', '24vb'],
        'bicolors-valute_kgs': ['валюта', 'valute', 'сом', 'киргизский', 'kgs', 'minvb'],
        'bicolors-valute_kgs__24vb': ['валюта', 'valute', 'сом', 'киргизский', 'kgs', '24vb'],
        'bicolors-valute_kzt': ['валюта', 'valute', 'тенге', 'казахстанский', 'kzt', 'minvb'],
        'bicolors-valute_kzt__24vb': ['валюта', 'valute', 'тенге', 'казахстанский', 'kzt', '24vb'],
        'bicolors-valute_rub': ['валюта', 'valute', 'rub', 'руб', 'minvb'],
        'bicolors-valute_rub__24vb': ['валюта', 'valute', 'rub', 'руб', '24vb'],
        'bicolors-valute_usd': ['валюта', 'valute', 'доллар', 'usd', 'minvb'],
        'bicolors-valute_usd__24vb': ['валюта', 'valute', 'доллар', 'usd', '24vb'],
        'bicolors-velocity': ['скорость', 'velocity', 'minvb'],
        'bicolors-velocity__24vb': ['скорость', 'velocity', '24vb'],
        'bicolors-video': ['видео', 'ютуб', 'youtube', 'video', 'minvb'],
        'bicolors-video__24vb': ['видео', 'ютуб', 'youtube', 'video', '24vb'],
        'bicolors-web': ['страница', 'web', 'minvb'],
        'bicolors-web__24vb': ['страница', 'web', '24vb'],
        'bicolors-weight': ['вес', 'weight', 'minvb'],
        'bicolors-weight__24vb': ['вес', 'weight', '24vb'],
        'bicolors-whatsup': ['ватсап', 'whatsup', 'minvb'],
        'bicolors-whatsup__24vb': ['ватсап', 'whatsup', '24vb'],
        'bicolors-wheels_paired': ['колеса', 'wheels', 'пара', 'paired', 'minvb'],
        'bicolors-wheels_paired__24vb': ['колеса', 'wheels', 'пара', 'paired', '24vb'],
        'bicolors-widgets': ['виджет','widgets', 'minvb'],
        'bicolors-widgets__24vb': ['виджет','widgets', '24vb'],
        'bicolors-width': ['ширина', 'width', 'minvb'],
        'bicolors-width__24vb': ['ширина', 'width', '24vb'],
        'bicolors-yandex': ['яндекс', 'yandex', 'minvb'],
        'bicolors-yandex__24vb': ['яндекс', 'yandex', '24vb'],
      };

      let hasVisibleItems = false;
      childrens.forEach(children => {
          const iconKey = children.querySelector('.js-icon-box');
          if (iconKey) {
              const classes = children.classList;
              for (const key in itemsObject) {
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
        $('.js-popover-close').click(function (e) {
          $('.js-icon-box').popover('hide');
        });
        return;
      });
      inputField.addEventListener('input', () => {
          const inputValue = inputField.value.toLowerCase();
          childrens.forEach(child => child.style.display = 'none');
          for (const key in itemsObject) {
              if (itemsObject[key].some(value => value.includes(inputValue))) {
                  const matchingChild = parent.querySelector(`.${key}`);
                  if (matchingChild) {
                      matchingChild.style.display = 'block';
                      // hasVisibleItems = true;
                  }
              }
          }
          // applyCheckboxFilter(hasVisibleItems);
      });
      // function applyCheckboxFilter(hasVisibleItems = true) {
      //   const isChecked = checkbox.checked;

      //   childrens.forEach(child => {
      //       const classes = child.classList;

      //       let hasMinvb = false;
      //       for (const key in itemsObject) {
      //           if (itemsObject.hasOwnProperty(key) && classes.contains(key)) {
      //               if (itemsObject[key].includes('minvb')) {
      //                   hasMinvb = true;
      //                   break;
      //               }
      //           }
      //       }

      //       if (!isChecked && hasMinvb) {
      //           child.style.display = 'none'; // Скрываем, если "minvb" есть и чекбокс не активен
      //       } else if (hasVisibleItems || !inputField.value.trim()) {
      //           child.style.display = ''; // Показываем, если чекбокс активен или нет "minvb"
      //       } else {
      //           child.style.display = 'none'; // Скрываем, если элемент не прошел фильтр поиска
      //       }
      //   });
      // }

      // checkbox.addEventListener('change', () => {
      //     applyCheckboxFilter();
      // });

      // customClassInput.addEventListener('input', () => {
      //   const customClassValue = customClassInput.value;
      //   const iconBoxes = document.querySelectorAll('.js-icon-box');

      //   iconBoxes.forEach(iconBox => {
      //       const svgIcons = iconBox.querySelectorAll('.svg--icon');

      //       svgIcons.forEach(svgIconElement => {

      //           // Добавляем новый класс, если введено значение
      //           if (customClassValue) {
      //               svgIconElement.classList.add(`${customClassValue} `);
      //           }
      //       });
      //   });
      // });

      // applyCheckboxFilter(false);
 }