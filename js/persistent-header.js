$(document).ready(function() {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}
  else {
    window.onscroll = function () {
      var scrollPos = window.pageYOffset;
      var offsetHeight = 65;

      if(window.innerWidth < 768) {
      }
      else if(scrollPos >= offsetHeight){
        document.getElementById('nav-links').style.lineHeight = "55px";
        document.getElementById('sb-nav').style.height = "65px";
        document.getElementById('content-container').style.marginTop = "0";
        document.getElementById('content-container').style.height = "55px";
      }
      else {
        document.getElementById('sb-nav').style.height = "98px";
        document.getElementById('nav-links').style.lineHeight = "68px";
        document.getElementById('content-container').style.marginTop = "10px";
        document.getElementById('content-container').style.height = "68px";
      }
    }
  }
})

$(window).on("touchmove", function() {
      var scrollPos = window.pageYOffset;
      var offsetHeight = 65;

      if(window.innerWidth < 768) {
      }
      else if(scrollPos >= offsetHeight){
        document.getElementById('nav-links').style.lineHeight = "55px";
        document.getElementById('sb-nav').style.height = "65px";
        document.getElementById('content-container').style.marginTop = "0";
        document.getElementById('content-container').style.height = "55px";
      }
      else {
        document.getElementById('sb-nav').style.height = "98px";
        document.getElementById('nav-links').style.lineHeight = "68px";
        document.getElementById('content-container').style.marginTop = "10px";
        document.getElementById('content-container').style.height = "68px";
      }
})

$(window).on('resize', function() {
    if(window.innerWidth < 768) {
    }
    else if(scrollPos >= offsetHeight){
      document.getElementById('nav-links').style.lineHeight = "55px";
      document.getElementById('sb-nav').style.height = "65px";
      document.getElementById('content-container').style.marginTop = "0";
      document.getElementById('content-container').style.height = "55px";
    }
    else {
      document.getElementById('sb-nav').style.height = "98px";
      document.getElementById('nav-links').style.lineHeight = "68px";
      document.getElementById('content-container').style.marginTop = "10px";
      document.getElementById('content-container').style.height = "68px";
    }
});

