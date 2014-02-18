if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {}
else {
  $(document).ready(function() {
      $(window).keydown(function(event){

          switch(event.keyCode) {
              case 74:            // If the j key is pressed
                  window.scrollBy(0,50);
                  break;
              case 75:            // If the k key is pressed
                  window.scrollBy(0,-50);
                  break;
          }
      })
  })
}
