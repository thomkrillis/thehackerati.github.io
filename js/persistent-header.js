$(document).ready(function() {
  if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {}
  else {
    window.onscroll = function (oEvent) {
      var scrollPos = document.documentElement.scrollTop;
      var offsetHeight = document.getElementById('welcome-container').offsetHeight;

      if(scrollPos >= offsetHeight){
        document.getElementById('sb-nav').style.opacity = "1";
      }
      else {
        document.getElementById('sb-nav').style.opacity = "0";
      }
    }
  }
})
