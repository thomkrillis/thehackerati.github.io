if (navigator.userAgent.match(/MSIE\s(?!10.0)/)) {
    // ie less than version 9
}

(function ($) {
    $(document).ready(function () {
          // TOGGLE DETAILS / MOBILE MENU
          $('.toggle-details').click(function () {        
              if ($('.test-details').css('opacity') == 1) {
                $('.test-details').css('opacity','0');
              }
              else{
                $('.test-details').css('opacity','1');
              }
          });
          // DETAILS ORIENTATION CHANGE
/*          jQuery(window).bind('orientationchange', function(e) {
            switch ( window.orientation ) {
              case 0:
              break;
              case 90:
                  $('.views-slideshow-cycle-main-frame').css('width','447px');
              break;
              case -90:
                  $('.views-slideshow-cycle-main-frame ').css('width','447px');
              break;
            }
          });
*/
          //Menu Links
          $('#wrapper-nav .menu li.leaf').each(function(){
          $(this).wrap("<a class='wrapperLeaf' href=''></a>");
              $('.wrapperLeaf').each(function(){
                  var linkSource = $(this).find('a').attr('href');
                  $(this).attr('href',linkSource);
              });
          });

           // Spin Buttons
          spinToB = function () {
              $("#page-one-stage").css('transform', 'rotate(90deg)'),
              $("#carouselcover").css("margin-top", "-1000px");
              $('#what-two').addClass('spin-active');
          };
          spinToC = function () {
              $("#page-one-stage").css('transform', 'rotate(180deg)'),
              $("#carouselcover").css("margin-top", "-1000px");
              $('#what-three').addClass('spin-active');
          };
          spinToD = function () {
              $("#page-one-stage").css('transform', 'rotate(270deg)'),
              $("#carouselcover").css("margin-top", "-1000px");
              $('#what-four').addClass('spin-active');
          };
          spinToHome = function () {
              $("#page-one-stage").css('transform', 'rotate(0deg)'),
              $("#carouselcover").css("margin-top", "-1000px");
              $('#what-one').addClass('spin-active');
          };
          // Cover Button
          $('#coverbutton').click(function () {
              $('a.spin-active').removeClass('spin-active');
              $("#carouselcover").css("margin-top", "0");
          });
          liftCover = function () {
              $("#carouselcover").css("margin-top", "-1000px");
          };
          // Carousel Click
          $('#carousel-buttons a').click(function(){
            liftCover();
            $('a.spin-active').removeClass("spin-active"),
            $(this).addClass("spin-active");
          });
          $('#what-one').click(function(){
            spinToHome();
          });
          $('#what-two').click(function(){
            spinToB();
          });
          $('#what-three').click(function(){
            spinToC();
          });
          $('#what-four').click(function(){
            spinToD();
          });
          // Mobile Menu Button
          $('.mobile-menu-button').click(function () {
              $('.mobile-menu').slideToggle();
          });
          //Anchor Tags
          $("#map-meet").attr("href", "/#who");
          $("#map-what").attr("href", "/#what");
          $("#map-how").attr("href", "/#how");
          $("#map-projects").attr("href", "/#clients");
          $("#map-contact").attr("href", "/#contact");
          //Course Info
          $('.course-list a').click(function () {
            var className = $(this).attr('class');
          $('#course-info div').fadeOut('fast');
          $('.course-list a').removeClass('course-active');
          $('#course-info .'+ className +'').fadeIn('slow');
          $(this).addClass('course-active');
          });         


      // H & L CAROUSEL FUNCTIONALITY

     
      $("html").keypress(function (e) {
          if (e.which == 108 && $(window).scrollTop() <= ($(window).height() * 2.5)) {
              $("#carouselcover").css("margin-top", "-1000px");
              var r = $("#page-one-stage").data('rot') + 90;
              $("#page-one-stage").css({
                  '-webkit-transform': 'rotate(' + r + 'deg)',
                      '-moz-transform': 'rotate(' + r + 'deg)',
                      '-ms-transform': 'rotate(' + r + 'deg)',
                      '-o-transform': 'rotate(' + r + 'deg)',
                      'transform': 'rotate(' + r + 'deg)'
              });
              $("#page-one-stage").data('rot', r).trigger('contentchanged');
          } else if (e.which == 104 && $(window).scrollTop() <= ($(window).height() * 2.5)) {
              $("#carouselcover").css("margin-top", "-1000px");
              var r = $("#page-one-stage").data('rot') - 90;
              $("#page-one-stage").css({
                  '-webkit-transform': 'rotate(' + r + 'deg)',
                      '-moz-transform': 'rotate(' + r + 'deg)',
                      '-ms-transform': 'rotate(' + r + 'deg)',
                      '-o-transform': 'rotate(' + r + 'deg)',
                      'transform': 'rotate(' + r + 'deg)'
              });
              $("#page-one-stage").data('rot', r).trigger('leftchecker');
          }
          $('#page-one-stage').bind('leftchecker', function () {
              function getRotationDegrees(obj) {
                  var matrix = obj.css("-webkit-transform") || obj.css("-moz-transform") || obj.css("-ms-transform") || obj.css("-o-transform") || obj.css("transform");
                  if (matrix !== 'none') {
                      var values = matrix.split('(')[1].split(')')[0].split(',');
                      var a = values[0];
                      var b = values[1];
                      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                  } else {
                      var angle = 0;
                  }
                  return (angle < 0) ? angle += 360 : angle;
              }
              var angle = getRotationDegrees($('#page-one-stage'));
              if (angle == 0) {
                  $('#what-one,#what-two,#what-three').removeClass('spin-active'),
                  $('#what-four').addClass("spin-active");
              }
              if (angle == 270) {
                  $('#what-two,#what-one,#what-four').removeClass('spin-active'),
                  $('#what-three').addClass("spin-active");
              }

              if (angle == 180) {
                  $('#what-three,#what-two,#what-one').removeClass('spin-active'),
                  $('#what-two').addClass("spin-active");
              }
              if (angle == 90) {
                  $('#what-three,#what-two,#what-four').removeClass('spin-active'),
                  $('#what-one').addClass("spin-active");
              }

          });
          // Spin Checker
          $('#page-one-stage').bind('contentchanged', function () {
              function getRotationDegrees(obj) {
                  var matrix = obj.css("-webkit-transform") || obj.css("-moz-transform") || obj.css("-ms-transform") || obj.css("-o-transform") || obj.css("transform");
                  if (matrix !== 'none') {
                      var values = matrix.split('(')[1].split(')')[0].split(',');
                      var a = values[0];
                      var b = values[1];
                      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                  } else {
                      var angle = 0;
                  }
                  return (angle < 0) ? angle += 360 : angle;
              }
              var angle = getRotationDegrees($('#page-one-stage'));
              if (angle == 0) {
                  $('#what-one,#what-four,#what-three').removeClass('spin-active'),
                  $('#what-two').addClass("spin-active");
              }
              if (angle == 90) {
                  $('#what-two,#what-one,#what-four').removeClass('spin-active'),
                  $('#what-three').addClass("spin-active");
              }

              if (angle == 180) {
                  $('#what-three,#what-two,#what-one').removeClass('spin-active'),
                  $('#what-four').addClass("spin-active");
              }
              if (angle == 270) {
                  $('#what-three,#what-two,#what-four').removeClass('spin-active'),
                  $('#what-one').addClass("spin-active");
              }
          });
      });

// UNIVERSAL ROTATE 
(function(e){function t(e){var t=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];var n;while(n=t.shift()){if(typeof e.style[n]!="undefined"){return n}}return"transform"}var n=null;var r=e.fn.css;e.fn.css=function(i,s){if(n===null){if(typeof e.cssProps!="undefined"){n=e.cssProps}else if(typeof e.props!="undefined"){n=e.props}else{n={}}}if(typeof n["transform"]=="undefined"&&(i=="transform"||typeof i=="object"&&typeof i["transform"]!="undefined")){n["transform"]=t(this.get(0))}if(n["transform"]!="transform"){if(i=="transform"){i=n["transform"];if(typeof s=="undefined"&&jQuery.style){return jQuery.style(this.get(0),i)}}else if(typeof i=="object"&&typeof i["transform"]!="undefined"){i[n["transform"]]=i["transform"];delete i["transform"]}}return r.apply(this,arguments)}})(jQuery)
    });
}(jQuery));

// Jquery Easing
$(document).ready(function(){$("body").plusAnchor({easing:"easeOutBack",speed:400})});(function(e){e.plusAnchor=function(t,n){var r=this;r.el=t;r.$el=e(t);r.$el.data("plusAnchor",r);r.scrollEl="body, html";r.initHash=window.location.hash;r.offsetTop=function(){return e("html").offset().top};r.init=function(){r.options=e.extend({},e.plusAnchor.defaults,n);if(r.options.onInit&&typeof r.options.onInit=="function")r.options.onInit(r);r.$el.find('a[href^="#"]').click(function(t){t.preventDefault();var n=e(this);href=n.attr("href"),$name=e('a[name="'+e(this).attr("href").substring(1)+'"]');if(e(href).length){if(r.options.onSlide&&typeof r.options.onSlide=="function")r.options.onSlide(r);e(r.scrollEl).animate({scrollTop:e(href).offset().top+r.options.offsetTop},r.options.speed,r.options.easing)}else if($name.length){if(r.options.onSlide&&typeof r.options.onSlide=="function")r.options.onSlide(r);e(r.scrollEl).animate({scrollTop:$name.offset().top},r.options.speed,r.options.easing)}})};r.init()};e.plusAnchor.defaults={easing:"swing",offsetTop:0,speed:1e3,onInit:null,onSlide:null};e.fn.plusAnchor=function(t){return this.each(function(){new e.plusAnchor(this,t)})}})(jQuery)

//Quote JS
$(document).ready(function(){$.fn.shuffle=function(){var e=this.get(),t=function(e){return Math.floor(Math.random()*e)},n=$.map(e,function(){var n=t(e.length),r=$(e[n]).clone(true)[0];e.splice(n,1);return r});this.each(function(e){$(this).replaceWith($(n[e]))});return $(n)};$(".quote-show div").shuffle();$(".quote-show > div:gt(0)").hide();setInterval(function(){$(".quote-show > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo(".quote-show")},1e4)})
