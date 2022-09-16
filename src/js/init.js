export function init(){
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
  })
  $('.selectpicker').selectpicker();
}
