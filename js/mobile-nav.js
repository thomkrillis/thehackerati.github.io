$(document).ready(function() {

    $('.mobile-tray').click(function() {
        var trayPos = $('.mobile-nav').css('left','0')
    });

    $('.collapse-nav').click(function() {
        var trayPos = $('.mobile-nav').css('left','-100%')
    });

});
