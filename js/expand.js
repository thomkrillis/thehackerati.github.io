$(document).ready(function () {

    var expanded = false;

    $('.expand-archive').click(function () {
        if (!expanded) {
            $('.terminal-body').css('height', 'auto');
            $(this).html('- collapse');
            expanded = !expanded;
        } else {
            $('.terminal-body').css('height','254px');
            $(this).html('+ expand');
            expanded = !expanded;
        }   
    });
});
