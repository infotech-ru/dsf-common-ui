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
    expanderTemplate: "<span class='collapseTrIcon'><svg width='14px' height='14px'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus__24vb'></use></svg ></span>",
    indenterTemplate: "<a class='collapseTrIcon_link' href=\"#\"></a>",
    ...options,
  });
}