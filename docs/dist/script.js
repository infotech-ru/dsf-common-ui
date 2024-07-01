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
      $(this).parent("li").toggleClass('open');
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
        var successful = document.execCommand('copy');
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
      'bicolors-archive_in': ['archive', 'in'],
      'bicolors-archive_in__24vb': ['archive', 'in', '24vb'],
      'bicolors-archive_out': ['archive', 'out'],
      'bicolors-archive_out__24vb': ['archive', 'out', '24vb'],
      'bicolors-arrow-thin_down': ['arrow', 'стрелка', 'thin', 'down', 'вниз'],
      'bicolors-arrow-thin_down__24vb': ['arrow', 'стрелка', 'thin', 'down', 'вниз', '24vb'],
      'bicolors-arrow-thin_left': ['arrow', 'стрелка', 'thin', 'left', 'лево', 'влево'],
      'bicolors-arrow-thin_left__24vb': ['arrow', 'стрелка', 'thin', 'left', 'лево', 'влево', '24vb'],
      'bicolors-arrow-thin_right': ['arrow', 'стрелка', 'thin', 'right', 'право', 'вправо'],
      'bicolors-arrow-thin_right__24vb': ['arrow', 'стрелка', 'thin', 'right', 'право', 'вправо', '24vb'],
      'bicolors-arrow-thin_up': ['arrow', 'стрелка', 'thin', 'up', 'верх', 'вверх'],
      'bicolors-arrow-thin_up__24vb': ['arrow', 'стрелка', 'thin', 'up', 'верх', 'вверх', '24vb'],
      'bicolors-arrow_check': ['arrow', 'стрелка', 'check'],
      'bicolors-arrow_check__24vb': ['arrow', 'стрелка', 'check', '24vb'],
      'bicolors-arrow_down': ['arrow', 'стрелка', 'down', 'вниз'],
      'bicolors-arrow_down__24vb': ['arrow', 'стрелка', 'down', 'вниз', '24vb'],
      'bicolors-arrow_drag': ['arrow', 'стрелка', 'drag'],
      'bicolors-arrow_drag__24vb': ['arrow', 'стрелка', 'drag', '24vb'],
      'bicolors-arrow_expand': ['arrow', 'стрелка', 'expand'],
      'bicolors-arrow_expand__24vb': ['arrow', 'стрелка', 'expand', '24vb'],
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
      'bicolors-arrows_compare': ['arrows', 'compare'],
      'bicolors-arrows_compare__24vb': ['arrows', 'compare', '24vb'],
      'bicolors-arrows_redo': ['arrows', 'redo'],
      'bicolors-arrows_redo__24vb': ['arrows', 'redo', '24vb'],
      'bicolors-arrows_reload': ['arrows', 'reload'],
      'bicolors-arrows_reload__24vb': ['arrows', 'reload', '24vb'],
      'bicolors-arrows_undo': ['arrows', 'undo'],
      'bicolors-arrows_undo__24vb': ['arrows', 'undo', '24vb'],
      'bicolors-attention': ['attention'],
      'bicolors-attention__24vb': ['attention', '24vb'],
      'bicolors-board': ['board'],
      'bicolors-board__24vb': ['board', '24vb'],
      'bicolors-boards': ['boards'],
      'bicolors-boards__24vb': ['boards', '24vb'],
      'bicolors-bold': ['bold'],
      'bicolors-bold__24vb': ['bold', '24vb'],
      'bicolors-book': ['book'],
      'bicolors-book__24vb': ['book', '24vb'],
      'bicolors-book_lamp': ['book', 'lamp'],
      'bicolors-book_lamp__24vb': ['book', 'lamp', '24vb'],
      'bicolors-calculator': ['calculator'],
      'bicolors-calculator__24vb': ['calculator', '24vb'],
      'bicolors-calendar': ['calendar'],
      'bicolors-calendar__24vb': ['calendar', '24vb'],
      'bicolors-calendar_date': ['calendar', 'date'],
      'bicolors-calendar_date__24vb': ['calendar', 'date', '24vb'],
      'bicolors-calendar_task': ['calendar', 'task'],
      'bicolors-calendar_task__24vb': ['calendar', 'task', '24vb'],
      'bicolors-call': ['call'],
      'bicolors-call__24vb': ['call', '24vb'],
      'bicolors-call_back': ['call', 'back'],
      'bicolors-call_back__24vb': ['call', 'back', '24vb'],
      'bicolors-call_cold': ['call', 'cold'],
      'bicolors-call_cold__24vb': ['call', 'cold', '24vb'],
      'bicolors-call_import': ['call', 'import'],
      'bicolors-call_import__24vb': ['call', 'import', '24vb'],
      'bicolors-callcenter': ['callcenter', 'call'],
      'bicolors-callcenter__24vb': ['callcenter', 'call', '24vb'],
      'bicolors-car': ['car'],
      'bicolors-car__24vb': ['car', '24vb'],
      'bicolors-car_buy': ['car', 'buy'],
      'bicolors-car_buy__24vb': ['car', 'buy', '24vb'],
      'bicolors-car_check': ['car', 'check'],
      'bicolors-car_check__24vb': ['car', 'check', '24vb'],
      'bicolors-car_enter': ['car', 'enter'],
      'bicolors-car_enter__24vb': ['car', 'enter', '24vb'],
      'bicolors-car_globe': ['car', 'globe'],
      'bicolors-car_globe__24vb': ['car', 'globe', '24vb'],
      'bicolors-car_pay': ['car', 'pay'],
      'bicolors-car_pay__24vb': ['car', 'pay', '24vb'],
      'bicolors-car_plus': ['car', 'plus', 'плюс'],
      'bicolors-car_plus__24vb': ['car', 'plus', 'плюс', '24vb'],
      'bicolors-car_service': ['car', 'service'],
      'bicolors-car_service__24vb': ['car', 'service', '24vb'],
      'bicolors-car_square_check': ['car', 'square', 'check'],
      'bicolors-car_square_check__24vb': ['car', 'square', 'check', '24vb'],
      'bicolors-car_stop': ['car', 'stop'],
      'bicolors-car_stop__24vb': ['car', 'stop', '24vb'],
      'bicolors-car_subscribe': ['car', 'subscribe'],
      'bicolors-car_subscribe__24vb': ['car', 'subscribe', '24vb'],
      'bicolors-car_update': ['car', 'update'],
      'bicolors-car_update__24vb': ['car', 'update', '24vb'],
      'bicolors-card': ['card'],
      'bicolors-card__24vb': ['card', '24vb'],
      'bicolors-cars_reload': ['cars', 'reload'],
      'bicolors-cars_reload__24vb': ['cars', 'reload', '24vb'],
      'bicolors-cars_warehouse': ['cars', 'warehouse'],
      'bicolors-cars_warehouse__24vb': ['cars', 'warehouse', '24vb'],
      'bicolors-cart': ['cart'],
      'bicolors-cart__24vb': ['cart', '24vb'],
      'bicolors-cart_check': ['cart', 'check'],
      'bicolors-cart_check__24vb': ['cart', 'check', '24vb'],
      'bicolors-cart_cogwheel': ['cart', 'cogwheel'],
      'bicolors-cart_cogwheel__24vb': ['cart', 'cogwheel', '24vb'],
      'bicolors-chart_bar': ['chart', 'bar'],
      'bicolors-chart_bar__24vb': ['chart', 'bar', '24vb'],
      'bicolors-chart_column': ['chart', 'column'],
      'bicolors-chart_column__24vb': ['chart', 'column', '24vb'],
      'bicolors-chart_graph': ['chart', 'graph'],
      'bicolors-chart_graph__24vb': ['chart', 'graph', '24vb'],
      'bicolors-chart_pie': ['chart', 'pie'],
      'bicolors-chart_pie__24vb': ['chart', 'pie', '24vb'],
      'bicolors-checklist': ['checklist'],
      'bicolors-checklist__24vb': ['checklist', '24vb'],
      'bicolors-checklist_add': ['checklist', 'add'],
      'bicolors-checklist_add__24vb': ['checklist', 'add', '24vb'],
      'bicolors-checklist_crown': ['checklist', 'crown'],
      'bicolors-checklist_crown__24vb': ['checklist', 'crown', '24vb'],
      'bicolors-checklists': ['checklists'],
      'bicolors-checklists__24vb': ['checklists', '24vb'],
      'bicolors-circle': ['circle'],
      'bicolors-circle__24vb': ['circle', '24vb'],
      'bicolors-circle_banned': ['circle', 'banned'],
      'bicolors-circle_banned__24vb': ['circle', 'banned', '24vb'],
      'bicolors-circle_check': ['circle', 'check'],
      'bicolors-circle_check__24vb': ['circle', 'check', '24vb'],
      'bicolors-circle_ignore': ['circle', 'ignore'],
      'bicolors-circle_ignore__24vb': ['circle', 'ignore', '24vb'],
      'bicolors-circle_information': ['circle', 'information'],
      'bicolors-circle_information__24vb': ['circle', 'information', '24vb'],
      'bicolors-circle_stop': ['circle', 'stop'],
      'bicolors-circle_stop__24vb': ['circle', 'stop', '24vb'],
      'bicolors-clear': ['clear'],
      'bicolors-clear__24vb': ['clear', '24vb'],
      'bicolors-close': ['close'],
      'bicolors-close__24vb': ['close', '24vb'],
      'bicolors-code': ['code'],
      'bicolors-code__24vb': ['code', '24vb'],
      'bicolors-coffee': ['coffee'],
      'bicolors-coffee__24vb': ['coffee', '24vb'],
      'bicolors-coffee_call': ['coffee', 'call'],
      'bicolors-coffee_call__24vb': ['coffee', 'call', '24vb'],
      'bicolors-coffee_internet': ['coffee', 'internet'],
      'bicolors-coffee_internet__24vb': ['coffee', 'internet', '24vb'],
      'bicolors-cogwheel': ['cogwheel'],
      'bicolors-cogwheel__24vb': ['cogwheel', '24vb'],
      'bicolors-cogwheel_reload': ['cogwheel', 'reload'],
      'bicolors-cogwheel_reload__24vb': ['cogwheel', 'reload', '24vb'],
      'bicolors-cogwheel_search': ['cogwheel', 'search'],
      'bicolors-cogwheel_search__24vb': ['cogwheel', 'search', '24vb'],
      'bicolors-colors': ['colors'],
      'bicolors-colors__24vb': ['colors', '24vb'],
      'bicolors-comment': ['comment'],
      'bicolors-comment__24vb': ['comment', '24vb'],
      'bicolors-control': ['control'],
      'bicolors-control__24vb': ['control', '24vb'],
      'bicolors-conversion': ['conversion'],
      'bicolors-conversion__24vb': ['conversion', '24vb'],
      'bicolors-copy': ['copy'],
      'bicolors-copy__24vb': ['copy', '24vb'],
      'bicolors-crm': ['crm'],
      'bicolors-crm__24vb': ['crm', '24vb'],
      'bicolors-crown': ['crown'],
      'bicolors-crown__24vb': ['crown', '24vb'],
      'bicolors-database': ['database'],
      'bicolors-database__24vb': ['database', '24vb'],
      'bicolors-deduplicate': ['deduplicate'],
      'bicolors-deduplicate__24vb': ['deduplicate', '24vb'],
      'bicolors-delete': ['delete'],
      'bicolors-delete__24vb': ['delete', '24vb'],
      'bicolors-discounts': ['discounts'],
      'bicolors-discounts__24vb': ['discounts', '24vb'],
      'bicolors-doc': ['doc'],
      'bicolors-doc__24vb': ['doc', '24vb'],
      'bicolors-doc_add': ['doc', 'add'],
      'bicolors-doc_add__24vb': ['doc', 'add', '24vb'],
      'bicolors-doc_bill': ['doc', 'bill'],
      'bicolors-doc_bill__24vb': ['doc', 'bill', '24vb'],
      'bicolors-doc_certificate': ['doc', 'certificate'],
      'bicolors-doc_certificate__24vb': ['doc', 'certificate', '24vb'],
      'bicolors-doc_chart_pie': ['doc', 'chart', 'pie'],
      'bicolors-doc_chart_pie__24vb': ['doc', 'chart', 'pie', '24vb'],
      'bicolors-doc_clear': ['doc', 'clear'],
      'bicolors-doc_clear__24vb': ['doc', 'clear', '24vb'],
      'bicolors-doc_cogwheel': ['doc', 'cogwheel'],
      'bicolors-doc_cogwheel__24vb': ['doc', 'cogwheel', '24vb'],
      'bicolors-doc_excel': ['doc', 'excel'],
      'bicolors-doc_excel__24vb': ['doc', 'excel', '24vb'],
      'bicolors-doc_invoice': ['doc', 'invoice'],
      'bicolors-doc_invoice__24vb': ['doc', 'invoice', '24vb'],
      'bicolors-doc_pdf': ['doc', 'pdf'],
      'bicolors-doc_pdf__24vb': ['doc', 'pdf', '24vb'],
      'bicolors-doc_service': ['doc', 'service'],
      'bicolors-doc_service__24vb': ['doc', 'service', '24vb'],
      'bicolors-doc_shield': ['doc', 'shield'],
      'bicolors-doc_shield__24vb': ['doc', 'shield', '24vb'],
      'bicolors-doc_xml': ['doc', 'xml'],
      'bicolors-doc_xml__24vb': ['doc', 'xml', '24vb'],
      'bicolors-docs_evacuate': ['docs', 'evacuate'],
      'bicolors-docs_evacuate__24vb': ['docs', 'evacuate', '24vb'],
      'bicolors-docs_reports': ['docs', 'reports'],
      'bicolors-docs_reports__24vb': ['docs', 'reports', '24vb'],
      'bicolors-door_enter': ['door', 'enter'],
      'bicolors-door_enter__24vb': ['door', 'enter', '24vb'],
      'bicolors-door_exit': ['door', 'exit'],
      'bicolors-door_exit__24vb': ['door', 'exit', '24vb'],
      'bicolors-edit': ['edit'],
      'bicolors-edit__24vb': ['edit', '24vb'],
      'bicolors-email': ['email'],
      'bicolors-email__24vb': ['email', '24vb'],
      'bicolors-email_ok': ['email', 'ok'],
      'bicolors-email_ok__24vb': ['email', 'ok', '24vb'],
      'bicolors-email_progress': ['email', 'progress'],
      'bicolors-email_progress__24vb': ['email', 'progress', '24vb'],
      'bicolors-email_stop': ['email', 'stop'],
      'bicolors-email_stop__24vb': ['email', 'stop', '24vb'],
      'bicolors-emails': ['emails'],
      'bicolors-emails__24vb': ['emails', '24vb'],
      'bicolors-engine': ['engine'],
      'bicolors-engine__24vb': ['engine', '24vb'],
      'bicolors-export': ['export'],
      'bicolors-export__24vb': ['export', '24vb'],
      'bicolors-eye': ['eye'],
      'bicolors-eye__24vb': ['eye', '24vb'],
      'bicolors-eye_close': ['eye', 'close'],
      'bicolors-eye_close__24vb': ['eye', 'close', '24vb'],
      'bicolors-favorite': ['favorite'],
      'bicolors-favorite__24vb': ['favorite', '24vb'],
      'bicolors-favorite_full': ['favorite', 'full'],
      'bicolors-favorite_full__24vb': ['favorite', 'full', '24vb'],
      'bicolors-filter': ['filter'],
      'bicolors-filter__24vb': ['filter', '24vb'],
      'bicolors-folder': ['folder'],
      'bicolors-folder__24vb': ['folder', '24vb'],
      'bicolors-folder_arrow-in': ['folder', 'arrow', 'стрелка'],
      'bicolors-folder_arrow-in__24vb': ['folder', 'arrow', 'стрелка', '24vb'],
      'bicolors-folder_plus': ['folder', 'plus', 'плюс'],
      'bicolors-folder_plus__24vb': ['folder', 'plus', 'плюс', '24vb'],
      'bicolors-gearbox': ['gearbox'],
      'bicolors-gearbox__24vb': ['gearbox', '24vb'],
      'bicolors-globe': ['globe'],
      'bicolors-globe__24vb': ['globe', '24vb'],
      'bicolors-globe_arrow_right': ['globe', 'arrow', 'стрелка', 'right', 'право', 'вправо'],
      'bicolors-globe_arrow_right__24vb': ['globe', 'arrow', 'стрелка', 'right', 'право', 'вправо', '24vb'],
      'bicolors-gps': ['gps'],
      'bicolors-gps__24vb': ['gps', '24vb'],
      'bicolors-guarantee_tracker': ['guarantee', 'tracker'],
      'bicolors-guarantee_tracker__24vb': ['guarantee', 'tracker', '24vb'],
      'bicolors-hand_car': ['hand', 'car'],
      'bicolors-hand_car__24vb': ['hand', 'car', '24vb'],
      'bicolors-hand_key': ['hand', 'key'],
      'bicolors-hand_key__24vb': ['hand', 'key', '24vb'],
      'bicolors-hand_shield': ['hand', 'shield'],
      'bicolors-hand_shield__24vb': ['hand', 'shield', '24vb'],
      'bicolors-hand_user': ['hand', 'user'],
      'bicolors-hand_user__24vb': ['hand', 'user', '24vb'],
      'bicolors-height_collapse': ['height', 'collapse'],
      'bicolors-height_collapse__24vb': ['height', 'collapse', '24vb'],
      'bicolors-height_expand': ['height', 'expand'],
      'bicolors-height_expand__24vb': ['height', 'expand', '24vb'],
      'bicolors-home': ['home'],
      'bicolors-home__24vb': ['home', '24vb'],
      'bicolors-image': ['image'],
      'bicolors-image__24vb': ['image', '24vb'],
      'bicolors-import': ['import'],
      'bicolors-import__24vb': ['import', '24vb'],
      'bicolors-insurance': ['insurance'],
      'bicolors-insurance__24vb': ['insurance', '24vb'],
      'bicolors-integration': ['integration'],
      'bicolors-integration__24vb': ['integration', '24vb'],
      'bicolors-integrationall': ['integration', 'integrationall'],
      'bicolors-integrationall__24vb': ['integration', 'integrationall', '24vb'],
      'bicolors-lamp': ['lamp'],
      'bicolors-lamp__24vb': ['lamp', '24vb'],
      'bicolors-leasing': ['leasing'],
      'bicolors-leasing__24vb': ['leasing', '24vb'],
      'bicolors-link': ['link'],
      'bicolors-link__24vb': ['link', '24vb'],
      'bicolors-link_remove': ['link', 'remove'],
      'bicolors-link_remove__24vb': ['link', 'remove', '24vb'],
      'bicolors-list_checked': ['list', 'checked'],
      'bicolors-list_checked__24vb': ['list', 'checked', '24vb'],
      'bicolors-list_numbered': ['list', 'numbered'],
      'bicolors-list_numbered__24vb': ['list', 'numbered', '24vb'],
      'bicolors-lock': ['lock'],
      'bicolors-lock__24vb': ['lock', '24vb'],
      'bicolors-lock_open': ['lock', 'open'],
      'bicolors-lock_open__24vb': ['lock', 'open', '24vb'],
      'bicolors-megaphone': ['megaphone'],
      'bicolors-megaphone__24vb': ['megaphone', '24vb'],
      'bicolors-megaphone_stop': ['megaphone', 'stop'],
      'bicolors-megaphone_stop__24vb': ['megaphone', 'stop', '24vb'],
      'bicolors-menu': ['menu'],
      'bicolors-menu__24vb': ['menu', '24vb'],
      'bicolors-menu_big': ['menu', 'big'],
      'bicolors-menu_big__24vb': ['menu', 'big', '24vb'],
      'bicolors-menu_fries': ['menu', 'fries'],
      'bicolors-menu_fries__24vb': ['menu', 'fries', '24vb'],
      'bicolors-minus': ['minus'],
      'bicolors-minus__24vb': ['minus', '24vb'],
      'bicolors-money': ['money'],
      'bicolors-money__24vb': ['money', '24vb'],
      'bicolors-newspapper': ['newspapper'],
      'bicolors-newspapper__24vb': ['newspapper', '24vb'],
      'bicolors-notification': ['notification'],
      'bicolors-notification__24vb': ['notification', '24vb'],
      'bicolors-options': ['options'],
      'bicolors-options__24vb': ['options', '24vb'],
      'bicolors-paperclip': ['paperclip'],
      'bicolors-paperclip__24vb': ['paperclip', '24vb'],
      'bicolors-pause': ['pause'],
      'bicolors-pause__24vb': ['pause', '24vb'],
      'bicolors-phone': ['phone'],
      'bicolors-phone__24vb': ['phone', '24vb'],
      'bicolors-photo': ['photo'],
      'bicolors-photo__24vb': ['photo', '24vb'],
      'bicolors-pin': ['pin'],
      'bicolors-pin__24vb': ['pin', '24vb'],
      'bicolors-plan': ['plan'],
      'bicolors-plan__24vb': ['plan', '24vb'],
      'bicolors-play': ['play'],
      'bicolors-play_1_5x': ['play', '1.5x'],
      'bicolors-play_1_5x__24vb': ['play', '1.5x', '24vb'],
      'bicolors-play_2x': ['play', '2x'],
      'bicolors-play_2x__24vb': ['play', '2x', '24vb'],
      'bicolors-play__24vb': ['play', '24vb'],
      'bicolors-play_next': ['play', 'next'],
      'bicolors-play_next__24vb': ['play', 'next', '24vb'],
      'bicolors-plus': ['plus', 'плюс'],
      'bicolors-plus__24vb': ['plus', 'плюс', '24vb'],
      'bicolors-presentation': ['presentation'],
      'bicolors-presentation__24vb': ['presentation', '24vb'],
      'bicolors-printer': ['printer'],
      'bicolors-printer__24vb': ['printer', '24vb'],
      'bicolors-qr-code': ['qr', 'code', 'qr-code', 'qrcode'],
      'bicolors-qr-code__24vb': ['qr', 'code', 'qr-code', 'qrcode', '24vb'],
      'bicolors-questions': ['questions', 'вопрос'],
      'bicolors-questions__24vb': ['questions', 'вопрос', '24vb'],
      'bicolors-questions_full': ['questions', 'вопрос', 'full'],
      'bicolors-questions_full__24vb': ['questions', 'вопрос', 'full', '24vb'],
      'bicolors-radio': ['radio'],
      'bicolors-radio__24vb': ['radio', '24vb'],
      'bicolors-rocket': ['rocket'],
      'bicolors-rocket__24vb': ['rocket', '24vb'],
      'bicolors-search': ['search', 'лупа'],
      'bicolors-search__24vb': ['search', 'лупа', '24vb'],
      'bicolors-send': ['send', 'отправить'],
      'bicolors-send__24vb': ['send', 'отправить', '24vb'],
      'bicolors-service_plus': ['service', 'plus', 'плюс'],
      'bicolors-service_plus__24vb': ['service', 'plus', 'плюс', '24vb'],
      'bicolors-service_rub': ['service', 'rub', 'руб'],
      'bicolors-service_rub__24vb': ['service', 'rub', 'руб', '24vb'],
      'bicolors-share': ['share'],
      'bicolors-share__24vb': ['share', '24vb'],
      'bicolors-shield': ['shield'],
      'bicolors-shield__24vb': ['shield', '24vb'],
      'bicolors-skype': ['skype'],
      'bicolors-skype__24vb': ['skype', '24vb'],
      'bicolors-sms': ['sms'],
      'bicolors-sms__24vb': ['sms', '24vb'],
      'bicolors-sms_check': ['sms', 'check'],
      'bicolors-sms_check__24vb': ['sms', 'check', '24vb'],
      'bicolors-social': ['social'],
      'bicolors-social__24vb': ['social', '24vb'],
      'bicolors-sort_asc': ['sort', 'asc'],
      'bicolors-sort_asc__24vb': ['sort', 'asc', '24vb'],
      'bicolors-sort_az': ['sort', 'az'],
      'bicolors-sort_az__24vb': ['sort', 'az', '24vb'],
      'bicolors-sort_desc': ['sort', 'desc'],
      'bicolors-sort_desc__24vb': ['sort', 'desc', '24vb'],
      'bicolors-sort_za': ['sort', 'za'],
      'bicolors-sort_za__24vb': ['sort', 'za', '24vb'],
      'bicolors-spy': ['spy'],
      'bicolors-spy__24vb': ['spy', '24vb'],
      'bicolors-square_empty': ['square', 'empty'],
      'bicolors-square_empty__24vb': ['square', 'empty', '24vb'],
      'bicolors-square_empty_check': ['square', 'empty', 'check'],
      'bicolors-square_empty_check__24vb': ['square', 'empty', 'check', '24vb'],
      'bicolors-stamp_100pr': ['stamp', '100', 'procent'],
      'bicolors-stamp_100pr__24vb': ['stamp', '100', 'procent', '24vb'],
      'bicolors-stamp_award': ['stamp', 'award'],
      'bicolors-stamp_award__24vb': ['stamp', 'award', '24vb'],
      'bicolors-stamp_bonus': ['stamp', 'bonus'],
      'bicolors-stamp_bonus__24vb': ['stamp', 'bonus', '24vb'],
      'bicolors-star': ['star'],
      'bicolors-star__24vb': ['star', '24vb'],
      'bicolors-stars': ['stars'],
      'bicolors-stars__24vb': ['stars', '24vb'],
      'bicolors-start': ['start'],
      'bicolors-start__24vb': ['start', '24vb'],
      'bicolors-sunwatch': ['sunwatch', 'clock', 'часы'],
      'bicolors-sunwatch__24vb': ['sunwatch', 'clock', 'часы', '24vb'],
      'bicolors-table': ['table'],
      'bicolors-table__24vb': ['table', '24vb'],
      'bicolors-tag': ['тег', 'tag'],
      'bicolors-tag__24vb': ['тег', 'tag', '24vb'],
      'bicolors-tags': ['tags'],
      'bicolors-tags__24vb': ['tags', '24vb'],
      'bicolors-target': ['target'],
      'bicolors-target__24vb': ['target', '24vb'],
      'bicolors-teach': ['teach'],
      'bicolors-teach__24vb': ['teach', '24vb'],
      'bicolors-telegram': ['telegram', 'телега'],
      'bicolors-telegram__24vb': ['telegram', 'телега', '24vb'],
      'bicolors-telegram_circle': ['telegram', 'телега', 'circle'],
      'bicolors-telegram_circle__24vb': ['telegram', 'телега', 'circle', '24vb'],
      'bicolors-testdrive': ['testdrive'],
      'bicolors-testdrive__24vb': ['testdrive', '24vb'],
      'bicolors-time': ['time'],
      'bicolors-time__24vb': ['time', '24vb'],
      'bicolors-time_wait': ['time', 'wait'],
      'bicolors-time_wait__24vb': ['time', 'wait', '24vb'],
      'bicolors-timeback': ['timeback'],
      'bicolors-timeback__24vb': ['timeback', '24vb'],
      'bicolors-tv': ['tv'],
      'bicolors-tv__24vb': ['tv', '24vb'],
      'bicolors-user_add': ['user', 'add'],
      'bicolors-user_add__24vb': ['user', 'add', '24vb'],
      'bicolors-user_card': ['user', 'card'],
      'bicolors-user_card__24vb': ['user', 'card', '24vb'],
      'bicolors-user_cards': ['user', 'cards'],
      'bicolors-user_cards__24vb': ['user', 'cards', '24vb'],
      'bicolors-user_change': ['user', 'change'],
      'bicolors-user_change__24vb': ['user', 'change', '24vb'],
      'bicolors-user_check': ['user', 'check'],
      'bicolors-user_check__24vb': ['user', 'check', '24vb'],
      'bicolors-user_edit': ['user', 'edit'],
      'bicolors-user_edit__24vb': ['user', 'edit', '24vb'],
      'bicolors-user_lk': ['user', 'lk'],
      'bicolors-user_lk__24vb': ['user', 'lk', '24vb'],
      'bicolors-user_lk_service': ['user', 'lk', 'service'],
      'bicolors-user_lk_service__24vb': ['user', 'lk', 'service', '24vb'],
      'bicolors-user_manager': ['user', 'manager'],
      'bicolors-user_manager__24vb': ['user', 'manager', '24vb'],
      'bicolors-user_question': ['user', 'question'],
      'bicolors-user_question__24vb': ['user', 'question', '24vb'],
      'bicolors-user_stars': ['user', 'stars'],
      'bicolors-user_stars__24vb': ['user', 'stars', '24vb'],
      'bicolors-valute_amd': ['valute', 'amd'],
      'bicolors-valute_amd__24vb': ['valute', 'amd', '24vb'],
      'bicolors-valute_byn': ['valute', 'byn'],
      'bicolors-valute_byn__24vb': ['valute', 'byn', '24vb'],
      'bicolors-valute_euro': ['valute', 'euro'],
      'bicolors-valute_euro__24vb': ['valute', 'euro', '24vb'],
      'bicolors-valute_kgs': ['valute', 'kgs'],
      'bicolors-valute_kgs__24vb': ['valute', 'kgs', '24vb'],
      'bicolors-valute_kzt': ['valute', 'kzt'],
      'bicolors-valute_kzt__24vb': ['valute', 'kzt', '24vb'],
      'bicolors-valute_rub': ['valute', 'rub', 'руб'],
      'bicolors-valute_rub__24vb': ['valute', 'rub', 'руб', '24vb'],
      'bicolors-valute_usd': ['valute', 'usd'],
      'bicolors-valute_usd__24vb': ['valute', 'usd', '24vb'],
      'bicolors-velocity': ['velocity'],
      'bicolors-velocity__24vb': ['velocity', '24vb'],
      'bicolors-video': ['video'],
      'bicolors-video__24vb': ['video', '24vb'],
      'bicolors-web': ['web'],
      'bicolors-web__24vb': ['web', '24vb'],
      'bicolors-weight': ['weight'],
      'bicolors-weight__24vb': ['weight', '24vb'],
      'bicolors-whatsup': ['whatsup'],
      'bicolors-whatsup__24vb': ['whatsup', '24vb'],
      'bicolors-wheels_paired': ['wheels', 'paired'],
      'bicolors-wheels_paired__24vb': ['wheels', 'paired', '24vb'],
      'bicolors-widgets': ['widgets'],
      'bicolors-widgets__24vb': ['widgets', '24vb'],
      'bicolors-width': ['width'],
      'bicolors-width__24vb': ['width', '24vb'],
      'bicolors-yandex': ['yandex'],
      'bicolors-yandex__24vb': ['yandex', '24vb']
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
