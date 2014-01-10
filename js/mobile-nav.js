$(document).ready(function() {
    var trayOut = false;
    
    $('.tray-button').click(function() {
        if(!trayOut){
            var contentPos = $('#all-content').css('left','85%')
            
            document.ontouchmove = function(e){
                e.preventDefault();
            }
        } else {
            var contentPos = $('#all-content').css('left','0')
        
            document.ontouchmove = function(e){
                return true;
            }
        }
        trayOut = !trayOut
    });

});
