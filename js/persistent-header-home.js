$(document).ready(function() {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}
  else {
    window.onscroll = function () {
      var scrollPos = window.pageYOffset;
      var offsetHeight = 65;

      if(window.innerWidth < 768) {
      }
      else if(scrollPos >= offsetHeight){
        document.getElementById('content-container').style.marginTop = "0";
        document.getElementById('nav-links').style.lineHeight = "55px";
        document.getElementById('sb-nav-home').style.height = "65px";
        document.getElementById('content-container').style.height = "55px";
      }
      else {
        document.getElementById('sb-nav-home').style.height = "180px";
        document.getElementById('content-container').style.marginTop = "2.5em";
        document.getElementById('nav-links').style.lineHeight = "130px";
        document.getElementById('content-container').style.height = "130px";
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
    document.getElementById('content-container').style.marginTop = "0";
    document.getElementById('nav-links').style.lineHeight = "55px";
    document.getElementById('sb-nav-home').style.height = "65px";
    document.getElementById('content-container').style.height = "55px";
  }
  else {
    document.getElementById('sb-nav-home').style.height = "180px";
    document.getElementById('content-container').style.marginTop = "2.5em";
    document.getElementById('nav-links').style.lineHeight = "130px";
    document.getElementById('content-container').style.height = "130px";
  }
})

$(window).on('resize', function() {
  if(window.innerWidth < 768) {
  }
  else if(scrollPos >= offsetHeight){
    document.getElementById('content-container').style.marginTop = "0";
    document.getElementById('nav-links').style.lineHeight = "55px";
    document.getElementById('sb-nav-home').style.height = "65px";
    document.getElementById('content-container').style.height = "55px";
  }
  else {
    document.getElementById('sb-nav-home').style.height = "180px";
    document.getElementById('content-container').style.marginTop = "2.5em";
    document.getElementById('nav-links').style.lineHeight = "130px";
    document.getElementById('content-container').style.height = "130px";
  }
});

