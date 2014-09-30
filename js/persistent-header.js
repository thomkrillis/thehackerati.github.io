$(document).ready(function() {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}
  else {
    window.onscroll = function () {
      var scrollPos = window.pageYOffset;
      var offsetHeight = document.getElementById('top-section').clientHeight - 85;

      if(scrollPos >= offsetHeight || window.innerWidth < 768){
        document.getElementById('nav-links').style.lineHeight = "55px";
        document.getElementById('sb-nav-home').style.height = "65px";
        document.getElementById('content-container').style.marginTop = "0";
        document.getElementById('content-container').style.height = "55px";
      }
      else {
        document.getElementById('sb-nav-home').style.height = "98px";
        document.getElementById('nav-links').style.lineHeight = "68px";
        document.getElementById('content-container').style.marginTop = "10px";
        document.getElementById('content-container').style.height = "68px";
      }
    }
  }
})

$(window).on("touchmove", function() {
      var scrollPos = window.pageYOffset;
      var offsetHeight = document.getElementById('top-section').clientHeight - 85;

      if(scrollPos >= offsetHeight || window.innerWidth < 768){
        document.getElementById('nav-links').style.lineHeight = "55px";
        document.getElementById('sb-nav-home').style.height = "65px";
        document.getElementById('content-container').style.marginTop = "0";
        document.getElementById('content-container').style.height = "55px";
      }
      else {
        document.getElementById('sb-nav-home').style.height = "98px";
        document.getElementById('nav-links').style.lineHeight = "68px";
        document.getElementById('content-container').style.marginTop = "10px";
        document.getElementById('content-container').style.height = "68px";
      }
})

$(window).on('resize', function() {
    if(scrollPos >= offsetHeight || window.innerWidth < 768){
      document.getElementById('nav-links').style.lineHeight = "55px";
      document.getElementById('sb-nav-home').style.height = "65px";
      document.getElementById('content-container').style.marginTop = "0";
      document.getElementById('content-container').style.height = "55px";
    }
    else {
      document.getElementById('sb-nav-home').style.height = "98px";
      document.getElementById('nav-links').style.lineHeight = "68px";
      document.getElementById('content-container').style.marginTop = "10px";
      document.getElementById('content-container').style.height = "68px";
    }
});

