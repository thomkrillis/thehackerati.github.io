$(function(){
  var clientsOpen = false; 
  var trayOpen = false;
   
  $("li").on("click", function() {
    var className = $(this).attr("class");
    
    if(!trayOpen) {
      $('.' + className).css("max-height", "1000px");
      trayOpen = !trayOpen;
    } else {
      $('.' + className).css("max-height", "3em");
      trayOpen = !trayOpen;
    }
  });
  
  $("#tile-container").click(function() {
    var className = $(this).attr("class");

    if(!clientsOpen) {
      clientsOpen = !clientsOpen;
    } else {
      clientsOpen = !clientsOpen;
    }

  });
});
