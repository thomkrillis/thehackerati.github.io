// H,J,K,L FUNCTIONALITY 

if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
}

else {
  $(document).ready(function() {
    $('.clients-slideshow-previous a').html("← H");
    $('.clients-slideshow-next a').html("L →");

    var firstRun = true,
      stillFading = false,
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
    clients.eq(slideCount.getCurrentClient()).css("position", "absolute");
    clients.eq(slideCount.getCurrentClient()).find('.tooltip').css("display", "block");

    $('.clients-slideshow-next').click(function(){
      stillFading = true;
      var tooltips = clients.eq(slideCount.getCurrentClient()).find('.tooltip');
      var box = clients.eq(slideCount.getCurrentClient()).find('.clients-box');

      tooltips.fadeOut( 200, function() {
        //spin the gears
        TweenLite.to(gears, .8, { rotation: "+=720", transformOrigin:"74% 50%", ease: Power4.easeInOut });

        //move current box offscreen
        TweenLite.to(box, .7, { left: "+=100%", ease: Power4.easeInOut, 
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
        clients.eq(slideCount.getNextClient()).css("position", "absolute");

        //roll in the new box
        TweenLite.to(box, .7, { left: "37%", ease: Power4.easeInOut, 
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
        TweenLite.to(gears, .8, { rotation: "-=720", transformOrigin:"74% 50%", ease: Power4.easeInOut });

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
        clients.eq(slideCount.getPrevClient()).css("position", "absolute");

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
/*
    $('.clients-slideshow-next').click(function(){
        var newBox = $('.new-box');
        newBox.css("left", "-50%");
        newBox.css("display", "inline");

        var currentBox = $('.current-box');
        var gearsNext = TweenLite.to(gears, 1, { rotation: "+=720", transformOrigin:"74% 50%", ease: Power4.easeInOut });
        var currentBoxNext = TweenLite.to(box, 2, { left: "+=100%", ease: Power4.easeInOut});
        var newBoxNext = TweenLite.fromTo(box, 2, {left: "-120%"}, { left: "37%", ease: Power4.easeInOut});

        if (!firstRun) {
          client3.fadeOut();
          newBoxNext.play(0);
          currentBoxNext.play(0);
          gearsNext.play(0);
         // client3.fadeIn(1);
        }
      });

      $('.clients-slideshow-previous').click(function(){
        var newBox = $('.new-box');
        newBox.css("left", "150%");
        newBox.css("display", "inline");

        var currentBox = $('.current-box');
        var gearsPrev = TweenLite.to(gears, 1, { rotation: "-=720", transformOrigin:"74% 50%", ease: Power4.easeInOut });
        var currentBoxPrev = TweenLite.to(box, 2, { left: "-=100%", ease: Power4.easeInOut});
        var newBoxPrev = TweenLite.to(box, 2, { left: "37%", ease: Power4.easeInOut});
        if (!firstRun) {
          client3.fadeOut();
          newBoxPrev.play(0);
          currentBoxPrev.play(0);
          gearsPrev.play(0);
          //client3.fadeIn(1);
        }
      });
*/

      firstRun = false;

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
}
