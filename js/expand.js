$(document).ready(function () {

  var expanded = false,
    numOfListItems = $('.post-list').children().length,
    newHeight = 24 * numOfListItems,
    consoleHeight = $('terminal-body').innerHeight();

  if (newHeight >= 253) {
    $('.expand-archive').click(function () {
        if (!expanded) {
            $('.terminal-body').css('height', newHeight + 'px');
            expanded = !expanded;
        } else {
            $('.terminal-body').css('height','254px');
            expanded = !expanded;
        }   
      });
  } else {
    $('.expand-archive').remove();
    $('.terminal-body').css('height', newHeight + 'px');
  }
});
