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
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }

        var clipText = itemCopyToClipboard.getAttribute('data-clipboard-text');
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
      expanderTemplate: "<span class='collapseTrIcon'><svg width='14px' height='14px'><use xlink:href='dist/sprite.symbol.svg#2colors-plus__24vb'></use></svg ></span>",
      indenterTemplate: "<a class='collapseTrIcon_link' href=\"#\"></a>"
    }, options));
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

  function OnLoad() {
    itemActionMenu();
    multilevelMenu();
    CopyToClipboard();
    init();
  }
  function tablesInit() {
    initTreeTable();
  }

  exports.OnLoad = OnLoad;
  exports.tablesInit = tablesInit;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
