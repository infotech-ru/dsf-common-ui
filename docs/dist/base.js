/* Highlight */

$( document ).ready(function() {
    // hljs.initHighlightingOnLoad();
    // $('table').addClass('table table-striped table-hover');
    // $('pre').addClass('highlight');

});

const ItemActionMenu = function(){
    $('.js-actionMenu').popover({
      container: 'body',
      placement: 'left',
      html: true,
      trigger: 'focus hover',
      customClass: 'popoverActionMenu',
      sanitize: false
    });
}

ItemActionMenu();
