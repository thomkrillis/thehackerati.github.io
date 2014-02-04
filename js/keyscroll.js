// H,J,K,L FUNCTIONALITY 

if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
}

else {
  $(document).ready(function() {
      //$(document.body).animate({
      //    'scrollTop':   $('#section1-anchor-link').offset().top
      //}, 1000, 'easeInOutQuint', function(){});

      $('.views-slideshow-controls-text-previous a').html("← H");
      $('.views-slideshow-controls-text-next a').html("L →");

      var currentSection = 1;
      var nextSection = currentSection + 1;
      var previousSection = currentSection - 1;
/*
      var ctrlDown = false;
      // Listen for ctrl key
      $(window).keydown(function(event) {
          if (event.keyCode === 17) ctrlDown = true;
      }).keyup(function(event) {
          if (event.keyCode === 17) ctrlDown = false;
      }); 
*/
      $(window).keydown(function(event){

          switch(event.keyCode) {
              case 74:            // If the j key is pressed
                  window.scrollBy(0,50);
                  break;
              case 75:            // If the k key is pressed
                  window.scrollBy(0,-50);
                  break;
          }
/*
          // Page up
          if(ctrlDown && event.keyCode === 66) {
              console.log("page up");

              $(document.body).animate({
                  'scrollTop':   $('#section' + (currentSection - 1) + '-anchor-link').offset().top
              }, 1000, 'easeInOutQuint', function(){});

              currentSection = currentSection - 1;
          }

          // Page down
          else if(ctrlDown && event.keyCode === 70) {
              console.log("page down");

              $(document.body).animate({
                  'scrollTop':   $('#section' + (currentSection + 1) + '-anchor-link').offset().top
              }, 1000, 'easeInOutQuint', function(){});

             currentSection = currentSection + 1;
          }

          else if (event.keyCode === 76 && $(window).scrollTop() >= ($(window).height() * 2.5) ) {
            $('.views-slideshow-controls-text-next').click();
          }

          else if (event.keyCode === 72 && $(window).scrollTop() >= ($(window).height() * 2.5) ) {
            $('.views-slideshow-controls-text-previous').click();
          }
*/
          if (event.keyCode === 76 && $(window).scrollTop() >= ($(window).height() * 2.5) ) {
            $('.views-slideshow-controls-text-next').click();
          }

          else if (event.keyCode === 72 && $(window).scrollTop() >= ($(window).height() * 2.5) ) {
            $('.views-slideshow-controls-text-previous').click();
          }
      })
  })
}
