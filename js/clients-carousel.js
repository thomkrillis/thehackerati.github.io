$(window).on('resize', function() {
  if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) || window.innerWidth < 768 ) {
    var clientsOpen = false; 
    var tileFlags = new Array();
      
    $('.clients-info').css("max-height", "3em");
    $('.clients-info').css("display", "block");
    $('.tooltip').css("display", "block");
    $('.clients-box').css("display", "block");
    $('.clients-box').css("left", "0");
    $('.clients-info').css("position", "relative");

    for (var i = 0; i < $('.clients-info').length; i++)
      tileFlags[i] = false;

    $('.clients-info').on("click", function() {
      var listIndex = $(this).index();
      var elem = $('.clients-info').eq(listIndex);

      if(!tileFlags[listIndex]) {
        elem.css("max-height", "1000px");
        tileFlags[listIndex] = !tileFlags[listIndex];
      } else {
        elem.css("max-height", "3em");
        tileFlags[listIndex] = !tileFlags[listIndex];
      }
    });

  }
  else {
    $('.clients-slideshow-previous a').html("← H");
    $('.clients-slideshow-next a').html("L →");

      $('.clients-info').css("display", "none"); 
      $('.tooltip').css("display", "none");
      $('.clients-info').eq(0).css("display", "block"); 
      $('.tooltip').eq(0).css("display", "block"); 
      $('.clients-box').eq(0).css("display", "block"); 
      $('.clients-box').css("left", "37%");
      $('.clients-info').css("max-height", "none");
      $('.clients-info').css("position", "absolute");

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

    $(window).keydown(function(event){
        if (window.innerWidth > 767 && event.keyCode === 76 && $(window).scrollTop() >= ($(window).height() * 2.5) && !stillFading ) {
          $('.clients-slideshow-next').click();
        }

        else if (window.innerWidth > 767 && event.keyCode === 72 && $(window).scrollTop() >= ($(window).height() * 2.5) && !stillFading) {
          $('.clients-slideshow-previous').click();
        }
    })
  }
})

$(document).ready(function(){
  $(window).trigger('resize');
});
