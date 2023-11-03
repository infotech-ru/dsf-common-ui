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
      expanderTemplate: "<span class='collapseTrIcon'><svg width='14px' height='14px'><use xlink:href='/dist/sprite.symbol.svg#bicolors-plus__24vb'></use></svg ></span>",
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
  }
  function tablesInit() {
    initTreeTable();
  }

  exports.OnLoad = OnLoad;
  exports.tablesInit = tablesInit;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
