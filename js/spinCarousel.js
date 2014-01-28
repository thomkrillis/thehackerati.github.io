(function(e){function t(e){var t=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];var n;while(n=t.shift()){if(typeof e.style[n]!="undefined"){return n}}return"transform"}var n=null;var r=e.fn.css;e.fn.css=function(i,s){if(n===null){if(typeof e.cssProps!="undefined"){n=e.cssProps}else if(typeof e.props!="undefined"){n=e.props}else{n={}}}if(typeof n["transform"]=="undefined"&&(i=="transform"||typeof i=="object"&&typeof i["transform"]!="undefined")){n["transform"]=t(this.get(0))}if(n["transform"]!="transform"){if(i=="transform"){i=n["transform"];if(typeof s=="undefined"&&jQuery.style){return jQuery.style(this.get(0),i)}}else if(typeof i=="object"&&typeof i["transform"]!="undefined"){i[n["transform"]]=i["transform"];delete i["transform"]}}return r.apply(this,arguments)}})(jQuery)

// RESIVE DIVS
    if (screen.width >= 600) {
      (function ($) {
        $(document).ready(function() {
           resizeDiv();
            function resizeDiv() {
              vpw = $(window).width(); 
              vph = $(window).height(); 
              $('.full-block').css({'height': vph + 'px'});
              $('.wrapper').css({'height': vph + 'px'});
            }
            window.onresize = function() {
            resizeDiv();
            }
        });
      }(jQuery));
    }

// TOGGLE DETAILS / MOBILE MENU 
    (function ($) {
    $(document).ready(function(){
        $('.toggle-details').click(function(){
            $('.test-details').slideToggle();
        });
            $('.mobile-menu-button').click(function(){
            $('.mobile-menu').slideToggle();
        });
            $("#map-meet").attr("href", "/#who");
            $("#map-what").attr("href", "/#what");
            $("#map-how").attr("href", "/#how");
            $("#map-projects").attr("href", "/#clients");
            $("#map-contact").attr("href", "/#contact");
    });
    }(jQuery));

(function ($) {
 $(document).ready(function() { 


// H & L CAROUSEL FUNCTIONALITY
      $("html").keypress(function (e) {
        if (e.which == 108  && $(window).scrollTop() <= ($(window).height() * 2.5)) {
                    $(".cover-copy").css("margin-top","-1000px"),
                    setTimeout(function() {
                    $("#carouselcover").css("margin-left","-1000px");
                    }, 175);
                var r = $("#page-one-stage").data('rot') + 90;

                $("#page-one-stage").css({
                  '-webkit-transform': 'rotate('+r+'deg)',
                     '-moz-transform': 'rotate('+r+'deg)',
                      '-ms-transform': 'rotate('+r+'deg)',
                       '-o-transform': 'rotate('+r+'deg)',
                          'transform': 'rotate('+r+'deg)'
                });
                $("#page-one-stage").data('rot', r).trigger('contentchanged');
        }         
        else if (e.which == 104  && $(window).scrollTop() <= ($(window).height() * 2.5)) {
                    $(".cover-copy").css("margin-top","-1000px"),
                    setTimeout(function() {
                    $("#carouselcover").css("margin-left","-1000px");
                    }, 175);
                var r = $("#page-one-stage").data('rot') - 90;
                $("#page-one-stage").css({
                    '-webkit-transform': 'rotate('+r+'deg)',
                        '-moz-transform': 'rotate('+r+'deg)',
                        '-ms-transform': 'rotate('+r+'deg)',
                        '-o-transform': 'rotate('+r+'deg)',
                            'transform': 'rotate('+r+'deg)'
                });
               $("#page-one-stage").data('rot', r).trigger('leftchecker');
        }



$('#page-one-stage').bind('leftchecker', function() {
    console.log('left checker checking...');

    function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle +=360 : angle;
}

    var angle = getRotationDegrees($('#page-one-stage'));

    console.log(angle);

    if(angle == 0) {
        $('#what-one,#what-two,#what-three').removeClass('spin-active'),
        $('#what-four').addClass("spin-active");
    }
    if(angle == 270) {
        $('#what-two,#what-one,#what-four').removeClass('spin-active'),
        $('#what-three').addClass("spin-active");
    }

    if(angle == 180) {
        $('#what-three,#what-two,#what-one').removeClass('spin-active'),
        $('#what-two').addClass("spin-active");
    }
    if(angle == 90) {
        $('#what-three,#what-two,#what-four').removeClass('spin-active'),
        $('#what-one').addClass("spin-active");
    }

});


// Spin Checker
$('#page-one-stage').bind('contentchanged', function() {

        console.log('Spin Checking...');

    function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle +=360 : angle;
}

    var angle = getRotationDegrees($('#page-one-stage'));

    console.log(angle);

    if(angle == 0) {
        $('#what-one,#what-four,#what-three').removeClass('spin-active'),
        $('#what-two').addClass("spin-active");
    }
    if(angle == 90) {
        $('#what-two,#what-one,#what-four').removeClass('spin-active'),
        $('#what-three').addClass("spin-active");
    }

    if(angle == 180) {
        $('#what-three,#what-two,#what-one').removeClass('spin-active'),
        $('#what-four').addClass("spin-active");
    }
    if(angle == 270) {
        $('#what-three,#what-two,#what-four').removeClass('spin-active'),
        $('#what-one').addClass("spin-active");
    }
});
// Spin Buttons
    spinToB = function() {            
        $("#page-one-stage").css('transform', 'rotate(90deg)'),
        $('a.spin-active').removeClass('spin-active'),
        $("#what-two").addClass('spin-active'),
        $(".cover-copy").css("margin-top","-1000px"),
        setTimeout(function() {
        $("#carouselcover").css("margin-left","-1000px");
        }, 175);
     };

    spinToC = function() {
        $("#page-one-stage").css('transform','rotate(180deg)'),
        $(".cover-copy").css("margin-top","-1000px"),
        $('a.spin-active').removeClass('spin-active'),
        $("#what-three").addClass('spin-active'),
        setTimeout(function() {
        $("#carouselcover").css("margin-left","-1000px");
        }, 175);
     };

    spinToD = function() {
        $("#page-one-stage").css('transform','rotate(270deg)'),
        $(".cover-copy").css("margin-top","-1000px"),
        $('a.spin-active').removeClass('spin-active'),
        $("#what-four").addClass('spin-active'),
        setTimeout(function() {
        $("#carouselcover").css("margin-left","-1000px");
        }, 175);
     };

    spinToHome = function() {
        $("#page-one-stage").css('transform','rotate(0deg)'),
        $('a.spin-active').removeClass('spin-active'),
        $("#what-one").addClass('spin-active'),
        $(".cover-copy").css("margin-top","-1000px"),
        setTimeout(function() {
        $("#carouselcover").css("margin-left","-1000px");
        }, 175);
     };
// Carousel Cover
        $('#carouselcover').click(function(){
        $(".cover-copy").css("margin-top","-1000px"),
        setTimeout(function() {
        $("#carouselcover").css("margin-left","-1000px");
        }, 175);
        });
// Cover Button
        $('#coverbutton').click(function(){
        $("#carouselcover").css("margin-left","0"),
        setTimeout(function() {
        $(".cover-copy").css("margin-top","-175px");
        }, 175);
        });

    });
});
}(jQuery));

//Quote JS


$(document).ready(function(){
    
         $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };

     $('.quote-show div').shuffle();
    $(".quote-show > div:gt(0)").hide();

    setInterval(function() { 
    $('.quote-show > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.quote-show');
},  10000);
});

// Slider
(function(e){"use strict";e.fn.bjqs=function(t){var n={width:700,height:300,animtype:"fade",animduration:450,animspeed:4e3,automatic:true,showcontrols:true,centercontrols:true,nexttext:"▶",prevtext:"◀",showmarkers:false,centermarkers:false,keyboardnav:true,hoverpause:true,usecaptions:true,randomstart:false,responsive:true};var r=e.extend({},n,t);var i=this,s=i.find("ul.bjqs"),o=s.children("li"),u=null,a=null,f=null,l=null,c=null,h=null,p=null,d=null;var v={slidecount:o.length,animating:false,paused:false,currentslide:1,nextslide:0,currentindex:0,nextindex:0,interval:null};var m={width:null,height:null,ratio:null};var g={fwd:"forward",prev:"previous"};var y=function(){o.addClass("bjqs-slide");if(r.responsive){b()}else{E()}if(v.slidecount>1){if(r.randomstart){L()}if(r.showcontrols){x()}if(r.showmarkers){T()}if(r.keyboardnav){N()}if(r.hoverpause&&r.automatic){C()}if(r.animtype==="slide"){S()}}else{r.automatic=false}if(r.usecaptions){k()}if(r.animtype==="slide"&&!r.randomstart){v.currentindex=1;v.currentslide=2}s.show();o.eq(v.currentindex).show();if(r.automatic){v.interval=setInterval(function(){O(g.fwd,false)},r.animspeed)}};var b=function(){m.width=i.outerWidth();m.ratio=m.width/r.width,m.height=r.height*m.ratio;if(r.animtype==="fade"){o.css({height:r.height,width:"100%"});o.children("img").css({height:r.height,width:"100%"});s.css({height:r.height,width:"100%"});i.css({height:r.height,"max-width":r.width,position:"relative"});if(m.width<r.width){o.css({height:m.height});o.children("img").css({height:m.height});s.css({height:m.height});i.css({height:m.height})}e(window).resize(function(){m.width=i.outerWidth();m.ratio=m.width/r.width,m.height=r.height*m.ratio;o.css({height:m.height});o.children("img").css({height:m.height});s.css({height:m.height});i.css({height:m.height})})}if(r.animtype==="slide"){o.css({height:r.height,width:r.width});o.children("img").css({height:r.height,width:r.width});s.css({height:r.height,width:r.width*r.slidecount});i.css({height:r.height,"max-width":r.width,position:"relative"});if(m.width<r.width){o.css({height:m.height});o.children("img").css({height:m.height});s.css({height:m.height});i.css({height:m.height})}e(window).resize(function(){m.width=i.outerWidth(),m.ratio=m.width/r.width,m.height=r.height*m.ratio;o.css({height:m.height,width:m.width});o.children("img").css({height:m.height,width:m.width});s.css({height:m.height,width:m.width*r.slidecount});i.css({height:m.height});h.css({height:m.height,width:m.width});w(function(){O(false,v.currentslide)},200,"some unique string")})}};var w=function(){var e={};return function(t,n,r){if(!r){r="Don't call this twice without a uniqueId"}if(e[r]){clearTimeout(e[r])}e[r]=setTimeout(t,n)}}();var E=function(){o.css({height:r.height,width:r.width});s.css({height:r.height,width:r.width});i.css({height:r.height,width:r.width,position:"relative"})};var S=function(){p=o.eq(0).clone();d=o.eq(v.slidecount-1).clone();p.attr({"data-clone":"last","data-slide":0}).appendTo(s).show();d.attr({"data-clone":"first","data-slide":0}).prependTo(s).show();o=s.children("li");v.slidecount=o.length;h=e('<div class="bjqs-wrapper"></div>');if(r.responsive&&m.width<r.width){h.css({width:m.width,height:m.height,overflow:"hidden",position:"relative"});s.css({width:m.width*(v.slidecount+2),left:-m.width*v.currentslide})}else{h.css({width:r.width,height:r.height,overflow:"hidden",position:"relative"});s.css({width:r.width*(v.slidecount+2),left:-r.width*v.currentslide})}o.css({"float":"left",position:"relative",display:"list-item"});h.prependTo(i);s.appendTo(h)};var x=function(){u=e('<ul class="bjqs-controls"></ul>');a=e('<li class="bjqs-next"><a href="#" data-direction="'+g.fwd+'">'+r.nexttext+"</a></li>");f=e('<li class="bjqs-prev"><a href="#" data-direction="'+g.prev+'">'+r.prevtext+"</a></li>");u.on("click","a",function(t){t.preventDefault();var n=e(this).attr("data-direction");if(!v.animating){if(n===g.fwd){O(g.fwd,false)}if(n===g.prev){O(g.prev,false)}}});f.appendTo(u);a.appendTo(u);u.appendTo(i);if(r.centercontrols){u.addClass("v-centered");var t=(i.height()-a.children("a").outerHeight())/2,n=t/r.height*100,s=n+"%";a.find("a").css("top",s);f.find("a").css("top",s)}};var T=function(){l=e('<ol class="bjqs-markers"></ol>');e.each(o,function(t,n){var i=t+1,s=t+1;if(r.animtype==="slide"){s=t+2}var o=e('<li><a href="#">'+i+"</a></li>");if(i===v.currentslide){o.addClass("active-marker")}o.on("click","a",function(e){e.preventDefault();if(!v.animating&&v.currentslide!==s){O(false,s)}});o.appendTo(l)});l.appendTo(i);c=l.find("li");if(r.centermarkers){l.addClass("h-centered");var t=(r.width-l.width())/2;l.css("left",t)}};var N=function(){e(document).keyup(function(e){if(!v.paused){clearInterval(v.interval);v.paused=true}if(!v.animating){if(e.keyCode===39){e.preventDefault();O(g.fwd,false)}else if(e.keyCode===37){e.preventDefault();O(g.prev,false)}}if(v.paused&&r.automatic){v.interval=setInterval(function(){O(g.fwd)},r.animspeed);v.paused=false}})};var C=function(){i.hover(function(){if(!v.paused){clearInterval(v.interval);v.paused=true}},function(){if(v.paused){v.interval=setInterval(function(){O(g.fwd,false)},r.animspeed);v.paused=false}})};var k=function(){e.each(o,function(t,n){var r=e(n).children("img:first-child").attr("title");if(!r){r=e(n).children("a").find("img:first-child").attr("title")}if(r){r=e('<p class="bjqs-caption">'+r+"</p>");r.appendTo(e(n))}})};var L=function(){var e=Math.floor(Math.random()*v.slidecount)+1;v.currentslide=e;v.currentindex=e-1};var A=function(e){if(e===g.fwd){if(o.eq(v.currentindex).next().length){v.nextindex=v.currentindex+1;v.nextslide=v.currentslide+1}else{v.nextindex=0;v.nextslide=1}}else{if(o.eq(v.currentindex).prev().length){v.nextindex=v.currentindex-1;v.nextslide=v.currentslide-1}else{v.nextindex=v.slidecount-1;v.nextslide=v.slidecount}}};var O=function(e,t){if(!v.animating){v.animating=true;if(t){v.nextslide=t;v.nextindex=t-1}else{A(e)}if(r.animtype==="fade"){if(r.showmarkers){c.removeClass("active-marker");c.eq(v.nextindex).addClass("active-marker")}o.eq(v.currentindex).fadeOut(r.animduration);o.eq(v.nextindex).fadeIn(r.animduration,function(){v.animating=false;v.currentslide=v.nextslide;v.currentindex=v.nextindex})}if(r.animtype==="slide"){if(r.showmarkers){var n=v.nextindex-1;if(n===v.slidecount-2){n=0}else if(n===-1){n=v.slidecount-3}c.removeClass("active-marker");c.eq(n).addClass("active-marker")}if(r.responsive&&m.width<r.width){v.slidewidth=m.width}else{v.slidewidth=r.width}s.animate({left:-v.nextindex*v.slidewidth},r.animduration,function(){v.currentslide=v.nextslide;v.currentindex=v.nextindex;if(o.eq(v.currentindex).attr("data-clone")==="last"){s.css({left:-v.slidewidth});v.currentslide=2;v.currentindex=1}else if(o.eq(v.currentindex).attr("data-clone")==="first"){s.css({left:-v.slidewidth*(v.slidecount-2)});v.currentslide=v.slidecount-1;v.currentindex=v.slidecount-2}v.animating=false})}}};y()}})(jQuery);jQuery(document).ready(function(e){e("#test-slider").bjqs({height:335,width:270,responsive:false})});jQuery(document).ready(function(e){e("#test-slider2").bjqs({height:335,width:270,responsive:false})});jQuery(document).ready(function(e){e("#test-slider3").bjqs({height:335,width:270,responsive:false})})
