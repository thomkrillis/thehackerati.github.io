// H,J,K,L FUNCTIONALITY 

if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
}

else {
  $(document).ready(function() {
      $('.clients-slideshow-previous a').html("← H");
      $('.clients-slideshow-next a').html("L →");

      var firstRun = true,
          box = $('.clients-box'),
          gears = $('.conveyor-gear');


      $('.clients-slideshow-next').click(function(){
        var boxNext = TweenLite.to(gears, 2, { rotation: 720, transformOrigin:"74% 50%", ease: Power4.easeInOut });
        var gearsNext = TweenLite.to(box, 3, { left: "1000px", ease: Power4.easeInOut});

        if (!firstRun) {
        boxNext.restart();
        gearsNext.restart();
        }
      });

      $('.clients-slideshow-previous').click(function(){
        var boxPrev = TweenLite.to(gears, 2, { rotation: -720, transformOrigin:"74px, 50px", ease: Power4.easeInOut });
        var gearsPrev = TweenLite.to(box, 3, { left: "-1000px", ease: Power4.easeInOut});

        if (!firstRun) {
        boxPrev.restart();
        gearsPrev.restart();
        }
      });

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

          if (event.keyCode === 76 && $(window).scrollTop() >= ($(window).height() * 2.5) ) {
            $('.clients-slideshow-next').click();
          }

          else if (event.keyCode === 72 && $(window).scrollTop() >= ($(window).height() * 2.5) ) {
            $('.clients-slideshow-previous').click();
          }
      })
  })
}
