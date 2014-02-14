$(document).ready(function() {
  if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {}
  else {
    $('.clients-slideshow-previous a').html("← H");
    $('.clients-slideshow-next a').html("L →");
  }

  var stillFading = false,
    gears = $('.conveyor-gear'),
    clients = $('.clients-info');

  function slideShowCounter(){
    var currentClient = 0;
    return {
      getCurrentClient:function(){
        return currentClient;
      },
      getNextClient:function() {
        var next = currentClient+ 1;
        if (next > (clients.length -1)) {
          next = next - clients.length;
        }
        return next;
      },
      getPrevClient:function() {
        var prev = currentClient-1;
        if (prev < 0) {
          prev = prev + clients.length;
        }
        return prev;
      },
      incrCurrentClient:function() {
        currentClient++;
        if (currentClient > (clients.length -1)) {
          currentClient = currentClient - clients.length;
        }
      },
      decrCurrentClient:function() {
        currentClient--;
        if (currentClient < 0) {
          currentClient = clients.length + currentClient;
        }
      }
    }
  }

  slideCount = slideShowCounter();

  clients.eq(slideCount.getCurrentClient()).css("display", "block");
  clients.eq(slideCount.getCurrentClient()).find('.tooltip').css("display", "block");

  $('.clients-slideshow-next').click(function(){
    stillFading = true;
    var tooltips = clients.eq(slideCount.getCurrentClient()).find('.tooltip');
    var box = clients.eq(slideCount.getCurrentClient()).find('.clients-box');

    tooltips.fadeOut( 200, function() {
      //spin the gears
      TweenLite.to(gears, .8, { rotation: "+=720", transformOrigin:"72% 50%", ease: Expo.easeInOut });

      //move current box offscreen
      TweenLite.to(box, .7, { left: "+=100%", ease: Expo.easeInOut, 
        onComplete: function(){
          // remove old slide from view
          clients.eq(slideCount.getCurrentClient()).css("display", "none");
        }
      });

      //get new slide
      box = clients.eq(slideCount.getNextClient()).find('.clients-box');

      // position box on outside left of screen
      box.css("left", "-50%");
      clients.eq(slideCount.getNextClient()).css("display", "block");

      //roll in the new box
      TweenLite.to(box, .7, { left: "37%", ease: Expo.easeInOut, 
        onComplete: function(){
          //Display the new tooltips
          clients.eq(slideCount.getNextClient()).find('.tooltip').fadeIn(200);
          slideCount.incrCurrentClient();
          stillFading = false;
        }
      });
    });
  });

  $('.clients-slideshow-previous').click(function(){
    stillFading = true;
    var tooltips = clients.eq(slideCount.getCurrentClient()).find('.tooltip');
    var box = clients.eq(slideCount.getCurrentClient()).find('.clients-box');

    tooltips.fadeOut( 200, function() {
      //spin the gears
      TweenLite.to(gears, .8, { rotation: "-=720", transformOrigin:"72% 50%", ease: Expo.easeInOut });

      //move current box offscreen
      TweenLite.to(box, .7, { left: "-=100%", ease: Power4.easeInOut, 
        onComplete: function(){
          // remove old slide from view
          clients.eq(slideCount.getCurrentClient()).css("display", "none");
        }
      });

      //get new slide
      box = clients.eq(slideCount.getPrevClient()).find('.clients-box');

      // position box on outside right of screen
      box.css("left", "150%");
      clients.eq(slideCount.getPrevClient()).css("display", "block");

      //roll in the new box
      TweenLite.to(box, .7, { left: "37%", ease: Power4.easeInOut, 
        onComplete: function(){
          //Display the new tooltips
          clients.eq(slideCount.getPrevClient()).find('.tooltip').fadeIn(200);
          slideCount.decrCurrentClient();
          stillFading = false;
        }
      });
    });
  });

    $(window).keydown(function(event){

        switch(event.keyCode) {
            case 74:            // If the j key is pressed
                window.scrollBy(0,50);
                break;
            case 75:            // If the k key is pressed
                window.scrollBy(0,-50);
                break;
        }

        if (event.keyCode === 76 && $(window).scrollTop() >= ($(window).height() * 2.5) && !stillFading ) {
          $('.clients-slideshow-next').click();
        }

        else if (event.keyCode === 72 && $(window).scrollTop() >= ($(window).height() * 2.5) && !stillFading) {
          $('.clients-slideshow-previous').click();
        }
    })
})
