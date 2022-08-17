$(function () {
  $('[data-toggle="popover"]').popover({
    sanitize: false,
    html: true
  })
})
$('[data-toggle="popover"]').on('show.bs.popover', function () {
  CopyToClipboard();
})
// $( document ).ready(function() {
    // hljs.initHighlightingOnLoad();
    // $('table').addClass('table table-striped table-hover');
    // $('pre').addClass('highlight');

// });

// const ItemActionMenu = function(){
//     $('.js-actionMenu').popover({
//       container: 'body',
//       placement: 'left',
//       html: true,
//       trigger: 'focus hover',
//       customClass: 'popoverActionMenu',
//       sanitize: false
//     });
// }
//
// ItemActionMenu();
