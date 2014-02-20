$(document).ready(function() {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {}
  else {
    window.onscroll = function () {
      var scrollPos = window.pageYOffset;
      var offsetHeight = document.getElementById('top-section').clientHeight;

      if(scrollPos >= offsetHeight || window.innerWidth < 768){
        document.getElementById('sb-nav-home').style.display = "block";
        document.getElementById('sb-nav-home').style.opacity = "1";
      }
      else {
        document.getElementById('sb-nav-home').style.opacity = "0";
        document.getElementById('sb-nav-home').style.display = "none";
      }
    }
  }
})
