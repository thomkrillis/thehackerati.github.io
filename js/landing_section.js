
// Landing section height
$(document).ready(function () {
  if ( $('.welcome-container').outerHeight() < $(window).height() ) {
    $('.welcome-container').css('height', $(window).height() + 'px');
  }
});

