var expanded = false,
    numOfListItems = $('.post-list').children().length,
    newHeight = 22 * numOfListItems;

$('.expand-archive').click(function () {
    if (!expanded) {
        $('.terminal-body').css('height', newHeight + 'px');
        expanded = !expanded;
    } else {
        $('.terminal-body').css('height','254px');
        expanded = !expanded;
    }
});
