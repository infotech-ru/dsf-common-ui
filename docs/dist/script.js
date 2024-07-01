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
    document.addEventListener('DOMContentLoaded', function () {
      var inputField = document.getElementById('inputFieldSearchIcon');
      document.getElementById('checkBtnSearchIcon');
      var resetBtn = document.getElementById('resetBtnSearchIcon');
      var parents = document.querySelector('.js-iconContainer');
      var children = parents.querySelectorAll('.js-iconBlock');
      var itemsObject = {
        'bicolors-2wd': ['2wd'],
        'bicolors-2wd__24vb': ['2wd'],
        'bicolors-archive_in': ['archive', 'in'],
        'bicolors-archive_in__24vb': ['archive', 'in'],
        'bicolors-archive_out': ['archive', 'out'],
        'bicolors-archive_out__24vb': ['archive', 'out'],
        'bicolors-arrow-thin_down': ['arrow'],
        'bicolors-arrow-thin_down__24vb': ['arrow'],
        'bicolors-arrow-thin_left': ['arrow'],
        'bicolors-arrow-thin_left__24vb': ['arrow'],
        'bicolors-arrow-thin_right': ['arrow'],
        'bicolors-arrow-thin_right__24vb': ['arrow'],
        'bicolors-arrow-thin_up': ['arrow'],
        'bicolors-arrow-thin_up__24vb': ['arrow'],
        'bicolors-arrow_check': ['arrow', 'check'],
        'bicolors-arrow_check__24vb': ['arrow', 'check'],
        'bicolors-arrow_down': ['arrow', 'down'],
        'bicolors-arrow_down__24vb': ['arrow', 'down'],
        'bicolors-arrow_drag': ['arrow', 'drag'],
        'bicolors-arrow_drag__24vb': ['arrow', 'drag'],
        'bicolors-arrow_expand': ['arrow', 'expand'],
        'bicolors-arrow_expand__24vb': ['arrow', 'expand'],
        'bicolors-arrow_left': ['arrow', 'left'],
        'bicolors-arrow_left__24vb': ['arrow', 'left'],
        'bicolors-arrow_left_double': ['arrow', 'left', 'double'],
        'bicolors-arrow_left_double__24vb': ['arrow', 'left', 'double'],
        'bicolors-arrow_right': ['arrow', 'right'],
        'bicolors-arrow_right__24vb': ['arrow', 'right'],
        'bicolors-arrow_right_double': ['arrow', 'right', 'double'],
        'bicolors-arrow_right_double__24vb': ['arrow', 'right', 'double'],
        'bicolors-arrow_right_down': ['arrow', 'right', 'down'],
        'bicolors-arrow_right_down__24vb': ['arrow', 'right', 'down'],
        'bicolors-arrow_rotate_left': ['arrow', 'rotate', 'left'],
        'bicolors-arrow_rotate_left__24vb': ['arrow', 'rotate', 'left'],
        'bicolors-arrow_rotate_right': ['arrow', 'rotate', 'right'],
        'bicolors-arrow_rotate_right__24vb': ['arrow', 'rotate', 'right'],
        'bicolors-arrow_up': ['arrow', 'up'],
        'bicolors-arrow_up__24vb': ['arrow', 'up'],
        'bicolors-arrows_compare': ['arrows', 'compare'],
        'bicolors-arrows_compare__24vb': ['arrows', 'compare'],
        'bicolors-arrows_redo': ['arrows', 'redo'],
        'bicolors-arrows_redo__24vb': ['arrows', 'redo'],
        'bicolors-arrows_reload': ['arrows', 'reload'],
        'bicolors-arrows_reload__24vb': ['arrows', 'reload'],
        'bicolors-arrows_undo': ['arrows', 'undo'],
        'bicolors-arrows_undo__24vb': ['arrows', 'undo'],
        'bicolors-attention': ['attention'],
        'bicolors-attention__24vb': ['attention'],
        'bicolors-board': ['board'],
        'bicolors-board__24vb': ['board'],
        'bicolors-boards': ['boards'],
        'bicolors-boards__24vb': ['boards'],
        'bicolors-bold': ['bold'],
        'bicolors-bold__24vb': ['bold'],
        'bicolors-book': ['book'],
        'bicolors-book__24vb': ['book'],
        'bicolors-book_lamp': ['book', 'lamp'],
        'bicolors-book_lamp__24vb': ['book', 'lamp'],
        'bicolors-calculator': ['calculator'],
        'bicolors-calculator__24vb': ['calculator'],
        'bicolors-calendar': ['calendar'],
        'bicolors-calendar__24vb': ['calendar'],
        'bicolors-calendar_date': ['calendar', 'date'],
        'bicolors-calendar_date__24vb': ['calendar', 'date'],
        'bicolors-calendar_task': ['calendar', 'task'],
        'bicolors-calendar_task__24vb': ['calendar', 'task'],
        'bicolors-call': ['call'],
        'bicolors-call__24vb': ['call'],
        'bicolors-call_back': ['call', 'back'],
        'bicolors-call_back__24vb': ['call', 'back'],
        'bicolors-call_cold': ['call', 'cold'],
        'bicolors-call_cold__24vb': ['call', 'cold'],
        'bicolors-call_import': ['call', 'import'],
        'bicolors-call_import__24vb': ['call', 'import'],
        'bicolors-callcenter': ['callcenter'],
        'bicolors-callcenter__24vb': ['callcenter'],
        'bicolors-car': ['car'],
        'bicolors-car__24vb': ['car'],
        'bicolors-car_buy': ['car', 'buy'],
        'bicolors-car_buy__24vb': ['car', 'buy'],
        'bicolors-car_check': ['car', 'check'],
        'bicolors-car_check__24vb': ['car', 'check'],
        'bicolors-car_enter': ['car', 'enter'],
        'bicolors-car_enter__24vb': ['car', 'enter'],
        'bicolors-car_globe': ['car', 'globe'],
        'bicolors-car_globe__24vb': ['car', 'globe'],
        'bicolors-car_pay': ['car', 'pay'],
        'bicolors-car_pay__24vb': ['car', 'pay'],
        'bicolors-car_plus': ['car', 'plus'],
        'bicolors-car_plus__24vb': ['car', 'plus'],
        'bicolors-car_service': ['car', 'service'],
        'bicolors-car_service__24vb': ['car', 'service'],
        'bicolors-car_square_check': ['car', 'square', 'check'],
        'bicolors-car_square_check__24vb': ['car', 'square', 'check'],
        'bicolors-car_stop': ['car', 'stop'],
        'bicolors-car_stop__24vb': ['car', 'stop'],
        'bicolors-car_subscribe': ['car', 'subscribe'],
        'bicolors-car_subscribe__24vb': ['car', 'subscribe'],
        'bicolors-car_update': ['car', 'update'],
        'bicolors-car_update__24vb': ['car', 'update'],
        'bicolors-card': ['card'],
        'bicolors-card__24vb': ['card'],
        'bicolors-cars_reload': ['cars', 'reload'],
        'bicolors-cars_reload__24vb': ['cars', 'reload'],
        'bicolors-cars_warehouse': ['cars', 'warehouse'],
        'bicolors-cars_warehouse__24vb': ['cars', 'warehouse'],
        'bicolors-cart': ['cart'],
        'bicolors-cart__24vb': ['cart'],
        'bicolors-cart_check': ['cart', 'check'],
        'bicolors-cart_check__24vb': ['cart', 'check'],
        'bicolors-cart_cogwheel': ['cart', 'cogwheel'],
        'bicolors-cart_cogwheel__24vb': ['cart', 'cogwheel'],
        'bicolors-chart_bar': ['chart', 'bar'],
        'bicolors-chart_bar__24vb': ['chart', 'bar'],
        'bicolors-chart_column': ['chart', 'column'],
        'bicolors-chart_column__24vb': ['chart', 'column'],
        'bicolors-chart_graph': ['chart', 'graph'],
        'bicolors-chart_graph__24vb': ['chart', 'graph'],
        'bicolors-chart_pie': ['chart', 'pie'],
        'bicolors-chart_pie__24vb': ['chart', 'pie'],
        'bicolors-checklist': ['checklist'],
        'bicolors-checklist__24vb': ['checklist'],
        'bicolors-checklist_add': ['checklist', 'add'],
        'bicolors-checklist_add__24vb': ['checklist', 'add'],
        'bicolors-checklist_crown': ['checklist', 'crown'],
        'bicolors-checklist_crown__24vb': ['checklist', 'crown'],
        'bicolors-checklists': ['checklists'],
        'bicolors-checklists__24vb': ['checklists'],
        'bicolors-circle': ['circle'],
        'bicolors-circle__24vb': ['circle'],
        'bicolors-circle_banned': ['circle', 'banned'],
        'bicolors-circle_banned__24vb': ['circle', 'banned'],
        'bicolors-circle_check': ['circle', 'check'],
        'bicolors-circle_check__24vb': ['circle', 'check'],
        'bicolors-circle_ignore': ['circle', 'ignore'],
        'bicolors-circle_ignore__24vb': ['circle', 'ignore'],
        'bicolors-circle_information': ['circle', 'information'],
        'bicolors-circle_information__24vb': ['circle', 'information'],
        'bicolors-circle_stop': ['circle', 'stop'],
        'bicolors-circle_stop__24vb': ['circle', 'stop'],
        'bicolors-clear': ['clear'],
        'bicolors-clear__24vb': ['clear'],
        'bicolors-close': ['close'],
        'bicolors-close__24vb': ['close'],
        'bicolors-code': ['code'],
        'bicolors-code__24vb': ['code'],
        'bicolors-coffee': ['coffee'],
        'bicolors-coffee__24vb': ['coffee'],
        'bicolors-coffee_call': ['coffee', 'call'],
        'bicolors-coffee_call__24vb': ['coffee', 'call'],
        'bicolors-coffee_internet': ['coffee', 'internet'],
        'bicolors-coffee_internet__24vb': ['coffee', 'internet'],
        'bicolors-cogwheel': ['cogwheel'],
        'bicolors-cogwheel__24vb': ['cogwheel'],
        'bicolors-cogwheel_reload': ['cogwheel', 'reload'],
        'bicolors-cogwheel_reload__24vb': ['cogwheel', 'reload'],
        'bicolors-cogwheel_search': ['cogwheel', 'search'],
        'bicolors-cogwheel_search__24vb': ['cogwheel', 'search'],
        'bicolors-colors': ['colors'],
        'bicolors-colors__24vb': ['colors'],
        'bicolors-comment': ['comment'],
        'bicolors-comment__24vb': ['comment'],
        'bicolors-control': ['control'],
        'bicolors-control__24vb': ['control'],
        'bicolors-conversion': ['conversion'],
        'bicolors-conversion__24vb': ['conversion'],
        'bicolors-copy': ['copy'],
        'bicolors-copy__24vb': ['copy'],
        'bicolors-crm': ['crm'],
        'bicolors-crm__24vb': ['crm'],
        'bicolors-crown': ['crown'],
        'bicolors-crown__24vb': ['crown'],
        'bicolors-database': ['database'],
        'bicolors-database__24vb': ['database'],
        'bicolors-deduplicate': ['deduplicate'],
        'bicolors-deduplicate__24vb': ['deduplicate'],
        'bicolors-delete': ['delete'],
        'bicolors-delete__24vb': ['delete'],
        'bicolors-discounts': ['discounts'],
        'bicolors-discounts__24vb': ['discounts'],
        'bicolors-doc': ['doc'],
        'bicolors-doc__24vb': ['doc'],
        'bicolors-doc_add': ['doc', 'add'],
        'bicolors-doc_add__24vb': ['doc', 'add'],
        'bicolors-doc_bill': ['doc', 'bill'],
        'bicolors-doc_bill__24vb': ['doc', 'bill'],
        'bicolors-doc_certificate': ['doc', 'certificate'],
        'bicolors-doc_certificate__24vb': ['doc', 'certificate'],
        'bicolors-doc_chart_pie': ['doc', 'chart', 'pie'],
        'bicolors-doc_chart_pie__24vb': ['doc', 'chart', 'pie'],
        'bicolors-doc_clear': ['doc', 'clear'],
        'bicolors-doc_clear__24vb': ['doc', 'clear'],
        'bicolors-doc_cogwheel': ['doc', 'cogwheel'],
        'bicolors-doc_cogwheel__24vb': ['doc', 'cogwheel'],
        'bicolors-doc_excel': ['doc', 'excel'],
        'bicolors-doc_excel__24vb': ['doc', 'excel'],
        'bicolors-doc_invoice': ['doc', 'invoice'],
        'bicolors-doc_invoice__24vb': ['doc', 'invoice'],
        'bicolors-doc_pdf': ['doc', 'pdf'],
        'bicolors-doc_pdf__24vb': ['doc', 'pdf'],
        'bicolors-doc_service': ['doc', 'service'],
        'bicolors-doc_service__24vb': ['doc', 'service'],
        'bicolors-doc_shield': ['doc', 'shield'],
        'bicolors-doc_shield__24vb': ['doc', 'shield'],
        'bicolors-doc_xml': ['doc', 'xml'],
        'bicolors-doc_xml__24vb': ['doc', 'xml'],
        'bicolors-docs_evacuate': ['docs', 'evacuate'],
        'bicolors-docs_evacuate__24vb': ['docs', 'evacuate'],
        'bicolors-docs_reports': ['docs', 'reports'],
        'bicolors-docs_reports__24vb': ['docs', 'reports'],
        'bicolors-door_enter': ['door', 'enter'],
        'bicolors-door_enter__24vb': ['door', 'enter'],
        'bicolors-door_exit': ['door', 'exit'],
        'bicolors-door_exit__24vb': ['door', 'exit'],
        'bicolors-edit': ['edit'],
        'bicolors-edit__24vb': ['edit'],
        'bicolors-email': ['email'],
        'bicolors-email__24vb': ['email'],
        'bicolors-email_ok': ['email', 'ok'],
        'bicolors-email_ok__24vb': ['email', 'ok'],
        'bicolors-email_progress': ['email', 'progress'],
        'bicolors-email_progress__24vb': ['email', 'progress'],
        'bicolors-email_stop': ['email', 'stop'],
        'bicolors-email_stop__24vb': ['email', 'stop'],
        'bicolors-emails': ['emails'],
        'bicolors-emails__24vb': ['emails'],
        'bicolors-engine': ['engine'],
        'bicolors-engine__24vb': ['engine'],
        'bicolors-export': ['export'],
        'bicolors-export__24vb': ['export'],
        'bicolors-eye': ['eye'],
        'bicolors-eye__24vb': ['eye'],
        'bicolors-eye_close': ['eye', 'close'],
        'bicolors-eye_close__24vb': ['eye', 'close'],
        'bicolors-favorite': ['favorite'],
        'bicolors-favorite__24vb': ['favorite'],
        'bicolors-favorite_full': ['favorite', 'full'],
        'bicolors-favorite_full__24vb': ['favorite', 'full'],
        'bicolors-filter': ['filter'],
        'bicolors-filter__24vb': ['filter'],
        'bicolors-folder': ['folder'],
        'bicolors-folder__24vb': ['folder'],
        'bicolors-folder_arrow-in': ['folder', 'arrow'],
        'bicolors-folder_arrow-in__24vb': ['folder', 'arrow'],
        'bicolors-folder_plus': ['folder', 'plus'],
        'bicolors-folder_plus__24vb': ['folder', 'plus'],
        'bicolors-gearbox': ['gearbox'],
        'bicolors-gearbox__24vb': ['gearbox'],
        'bicolors-globe': ['globe'],
        'bicolors-globe__24vb': ['globe'],
        'bicolors-globe_arrow_right': ['globe', 'arrow', 'right'],
        'bicolors-globe_arrow_right__24vb': ['globe', 'arrow', 'right'],
        'bicolors-gps': ['gps'],
        'bicolors-gps__24vb': ['gps'],
        'bicolors-guarantee_tracker': ['guarantee', 'tracker'],
        'bicolors-guarantee_tracker__24vb': ['guarantee', 'tracker'],
        'bicolors-hand_car': ['hand', 'car'],
        'bicolors-hand_car__24vb': ['hand', 'car'],
        'bicolors-hand_key': ['hand', 'key'],
        'bicolors-hand_key__24vb': ['hand', 'key'],
        'bicolors-hand_shield': ['hand', 'shield'],
        'bicolors-hand_shield__24vb': ['hand', 'shield'],
        'bicolors-hand_user': ['hand', 'user'],
        'bicolors-hand_user__24vb': ['hand', 'user'],
        'bicolors-height_collapse': ['height', 'collapse'],
        'bicolors-height_collapse__24vb': ['height', 'collapse'],
        'bicolors-height_expand': ['height', 'expand'],
        'bicolors-height_expand__24vb': ['height', 'expand'],
        'bicolors-home': ['home'],
        'bicolors-home__24vb': ['home'],
        'bicolors-image': ['image'],
        'bicolors-image__24vb': ['image'],
        'bicolors-import': ['import'],
        'bicolors-import__24vb': ['import'],
        'bicolors-insurance': ['insurance'],
        'bicolors-insurance__24vb': ['insurance'],
        'bicolors-integration': ['integration'],
        'bicolors-integration__24vb': ['integration'],
        'bicolors-integrationall': ['integration', 'integrationall'],
        'bicolors-integrationall__24vb': ['integration', 'integrationall'],
        'bicolors-lamp': ['lamp'],
        'bicolors-lamp__24vb': ['lamp'],
        'bicolors-leasing': ['leasing'],
        'bicolors-leasing__24vb': ['leasing'],
        'bicolors-link': ['link'],
        'bicolors-link__24vb': ['link'],
        'bicolors-link_remove': ['link', 'remove'],
        'bicolors-link_remove__24vb': ['link', 'remove'],
        'bicolors-list_checked': ['list', 'checked'],
        'bicolors-list_checked__24vb': ['list', 'checked'],
        'bicolors-list_numbered': ['list', 'numbered'],
        'bicolors-list_numbered__24vb': ['list', 'numbered'],
        'bicolors-lock': ['lock'],
        'bicolors-lock__24vb': ['lock'],
        'bicolors-lock_open': ['lock', 'open'],
        'bicolors-lock_open__24vb': ['lock', 'open'],
        'bicolors-megaphone': ['megaphone'],
        'bicolors-megaphone__24vb': ['megaphone'],
        'bicolors-megaphone_stop': ['megaphone', 'stop'],
        'bicolors-megaphone_stop__24vb': ['megaphone', 'stop'],
        'bicolors-menu': ['menu'],
        'bicolors-menu__24vb': ['menu'],
        'bicolors-menu_big': ['menu', 'big'],
        'bicolors-menu_big__24vb': ['menu', 'big'],
        'bicolors-menu_fries': ['menu', 'fries'],
        'bicolors-menu_fries__24vb': ['menu', 'fries'],
        'bicolors-minus': ['minus'],
        'bicolors-minus__24vb': ['minus'],
        'bicolors-money': ['money'],
        'bicolors-money__24vb': ['money'],
        'bicolors-newspapper': ['newspapper'],
        'bicolors-newspapper__24vb': ['newspapper'],
        'bicolors-notification': ['notification'],
        'bicolors-notification__24vb': ['notification'],
        'bicolors-options': ['options'],
        'bicolors-options__24vb': ['options'],
        'bicolors-paperclip': ['paperclip'],
        'bicolors-paperclip__24vb': ['paperclip'],
        'bicolors-pause': ['pause'],
        'bicolors-pause__24vb': ['pause'],
        'bicolors-phone': ['phone'],
        'bicolors-phone__24vb': ['phone'],
        'bicolors-photo': ['photo'],
        'bicolors-photo__24vb': ['photo'],
        'bicolors-pin': ['pin'],
        'bicolors-pin__24vb': ['pin'],
        'bicolors-plan': ['plan'],
        'bicolors-plan__24vb': ['plan'],
        'bicolors-play': ['play'],
        'bicolors-play_1_5x': ['play', '1', '5x'],
        'bicolors-play_1_5x__24vb': ['play', '1', '5x'],
        'bicolors-play_2x': ['play', '2x'],
        'bicolors-play_2x__24vb': ['play', '2x'],
        'bicolors-play__24vb': ['play'],
        'bicolors-play_next': ['play', 'next'],
        'bicolors-play_next__24vb': ['play', 'next'],
        'bicolors-plus': ['plus'],
        'bicolors-plus__24vb': ['plus'],
        'bicolors-presentation': ['presentation'],
        'bicolors-presentation__24vb': ['presentation'],
        'bicolors-printer': ['printer'],
        'bicolors-printer__24vb': ['printer'],
        'bicolors-qr-code': ['qr'],
        'bicolors-qr-code__24vb': ['qr'],
        'bicolors-questions': ['questions'],
        'bicolors-questions__24vb': ['questions'],
        'bicolors-questions_full': ['questions', 'full'],
        'bicolors-questions_full__24vb': ['questions', 'full'],
        'bicolors-radio': ['radio'],
        'bicolors-radio__24vb': ['radio'],
        'bicolors-rocket': ['rocket'],
        'bicolors-rocket__24vb': ['rocket'],
        'bicolors-search': ['search'],
        'bicolors-search__24vb': ['search'],
        'bicolors-send': ['send'],
        'bicolors-send__24vb': ['send'],
        'bicolors-service_plus': ['service', 'plus'],
        'bicolors-service_plus__24vb': ['service', 'plus'],
        'bicolors-service_rub': ['service', 'rub'],
        'bicolors-service_rub__24vb': ['service', 'rub'],
        'bicolors-share': ['share'],
        'bicolors-share__24vb': ['share'],
        'bicolors-shield': ['shield'],
        'bicolors-shield__24vb': ['shield'],
        'bicolors-skype': ['skype'],
        'bicolors-skype__24vb': ['skype'],
        'bicolors-sms': ['sms'],
        'bicolors-sms__24vb': ['sms'],
        'bicolors-sms_check': ['sms', 'check'],
        'bicolors-sms_check__24vb': ['sms', 'check'],
        'bicolors-social': ['social'],
        'bicolors-social__24vb': ['social'],
        'bicolors-sort_asc': ['sort', 'asc'],
        'bicolors-sort_asc__24vb': ['sort', 'asc'],
        'bicolors-sort_az': ['sort', 'az'],
        'bicolors-sort_az__24vb': ['sort', 'az'],
        'bicolors-sort_desc': ['sort', 'desc'],
        'bicolors-sort_desc__24vb': ['sort', 'desc'],
        'bicolors-sort_za': ['sort', 'za'],
        'bicolors-sort_za__24vb': ['sort', 'za'],
        'bicolors-spy': ['spy'],
        'bicolors-spy__24vb': ['spy'],
        'bicolors-square_empty': ['square', 'empty'],
        'bicolors-square_empty__24vb': ['square', 'empty'],
        'bicolors-square_empty_check': ['square', 'empty', 'check'],
        'bicolors-square_empty_check__24vb': ['square', 'empty', 'check'],
        'bicolors-stamp_100pr': ['stamp', '100', 'procent'],
        'bicolors-stamp_100pr__24vb': ['stamp', '100', 'procent'],
        'bicolors-stamp_award': ['stamp', 'award'],
        'bicolors-stamp_award__24vb': ['stamp', 'award'],
        'bicolors-stamp_bonus': ['stamp', 'bonus'],
        'bicolors-stamp_bonus__24vb': ['stamp', 'bonus'],
        'bicolors-star': ['star'],
        'bicolors-star__24vb': ['star'],
        'bicolors-stars': ['stars'],
        'bicolors-stars__24vb': ['stars'],
        'bicolors-start': ['start'],
        'bicolors-start__24vb': ['start'],
        'bicolors-sunwatch': ['sunwatch'],
        'bicolors-sunwatch__24vb': ['sunwatch'],
        'bicolors-table': ['table'],
        'bicolors-table__24vb': ['table'],
        'bicolors-tag': ['tag'],
        'bicolors-tag__24vb': ['tag'],
        'bicolors-tags': ['tags'],
        'bicolors-tags__24vb': ['tags'],
        'bicolors-target': ['target'],
        'bicolors-target__24vb': ['target'],
        'bicolors-teach': ['teach'],
        'bicolors-teach__24vb': ['teach'],
        'bicolors-telegram': ['telegram'],
        'bicolors-telegram__24vb': ['telegram'],
        'bicolors-telegram_circle': ['telegram', 'circle'],
        'bicolors-telegram_circle__24vb': ['telegram', 'circle'],
        'bicolors-testdrive': ['testdrive'],
        'bicolors-testdrive__24vb': ['testdrive'],
        'bicolors-time': ['time'],
        'bicolors-time__24vb': ['time'],
        'bicolors-time_wait': ['time', 'wait'],
        'bicolors-time_wait__24vb': ['time', 'wait'],
        'bicolors-timeback': ['timeback'],
        'bicolors-timeback__24vb': ['timeback'],
        'bicolors-tv': ['tv'],
        'bicolors-tv__24vb': ['tv'],
        'bicolors-user_add': ['user', 'add'],
        'bicolors-user_add__24vb': ['user', 'add'],
        'bicolors-user_card': ['user', 'card'],
        'bicolors-user_card__24vb': ['user', 'card'],
        'bicolors-user_cards': ['user', 'cards'],
        'bicolors-user_cards__24vb': ['user', 'cards'],
        'bicolors-user_change': ['user', 'change'],
        'bicolors-user_change__24vb': ['user', 'change'],
        'bicolors-user_check': ['user', 'check'],
        'bicolors-user_check__24vb': ['user', 'check'],
        'bicolors-user_edit': ['user', 'edit'],
        'bicolors-user_edit__24vb': ['user', 'edit'],
        'bicolors-user_lk': ['user', 'lk'],
        'bicolors-user_lk__24vb': ['user', 'lk'],
        'bicolors-user_lk_service': ['user', 'lk', 'service'],
        'bicolors-user_lk_service__24vb': ['user', 'lk', 'service'],
        'bicolors-user_manager': ['user', 'manager'],
        'bicolors-user_manager__24vb': ['user', 'manager'],
        'bicolors-user_question': ['user', 'question'],
        'bicolors-user_question__24vb': ['user', 'question'],
        'bicolors-user_stars': ['user', 'stars'],
        'bicolors-user_stars__24vb': ['user', 'stars'],
        'bicolors-valute_amd': ['valute', 'amd'],
        'bicolors-valute_amd__24vb': ['valute', 'amd'],
        'bicolors-valute_byn': ['valute', 'byn'],
        'bicolors-valute_byn__24vb': ['valute', 'byn'],
        'bicolors-valute_euro': ['valute', 'euro'],
        'bicolors-valute_euro__24vb': ['valute', 'euro'],
        'bicolors-valute_kgs': ['valute', 'kgs'],
        'bicolors-valute_kgs__24vb': ['valute', 'kgs'],
        'bicolors-valute_kzt': ['valute', 'kzt'],
        'bicolors-valute_kzt__24vb': ['valute', 'kzt'],
        'bicolors-valute_rub': ['valute', 'rub'],
        'bicolors-valute_rub__24vb': ['valute', 'rub'],
        'bicolors-valute_usd': ['valute', 'usd'],
        'bicolors-valute_usd__24vb': ['valute', 'usd'],
        'bicolors-velocity': ['velocity'],
        'bicolors-velocity__24vb': ['velocity'],
        'bicolors-video': ['video'],
        'bicolors-video__24vb': ['video'],
        'bicolors-web': ['web'],
        'bicolors-web__24vb': ['web'],
        'bicolors-weight': ['weight'],
        'bicolors-weight__24vb': ['weight'],
        'bicolors-whatsup': ['whatsup'],
        'bicolors-whatsup__24vb': ['whatsup'],
        'bicolors-wheels_paired': ['wheels', 'paired'],
        'bicolors-wheels_paired__24vb': ['wheels', 'paired'],
        'bicolors-widgets': ['widgets'],
        'bicolors-widgets__24vb': ['widgets'],
        'bicolors-width': ['width'],
        'bicolors-width__24vb': ['width'],
        'bicolors-yandex': ['yandex'],
        'bicolors-yandex__24vb': ['yandex']
      };
      inputField.addEventListener('input', function () {
        var inputValue = inputField.value.toLowerCase(); // Hide all children initially

        children.forEach(function (child) {
          return child.style.display = 'none';
        }); // Filter and display matching children

        for (var key in itemsObject) {
          if (itemsObject[key].some(function (value) {
            return value.includes(inputValue);
          })) {
            var matchingChild = parents.querySelector(".".concat(key));

            if (matchingChild) {
              matchingChild.style.display = 'block';
            }
          }
        }
      }); // checkBtn.addEventListener('click', () => {
      //     const inputText = inputField.value.trim();
      //     parent.forEach(parent => {
      //         const children = parent.children;
      //         Array.from(children).forEach(child => {
      //             if (valuesArray[child.className].includes(inputText)) {
      //                 child.classList.add('hidden');
      //             }
      //         });
      //     });
      // });

      resetBtn.addEventListener('click', function () {
        inputField.value = '';
        parents.forEach(function () {
          Array.from(children).forEach(function (child) {
            child.style.display = 'block';
          });
        });
      });
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
