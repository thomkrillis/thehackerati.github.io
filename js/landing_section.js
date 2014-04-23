
// Landing section height
$(document).ready(function () {
  if ($(window).height() > 755 && $(window).height() < 1000) {
    $('.welcome-container').css('height', $(window).height() + 'px');
  }
});
