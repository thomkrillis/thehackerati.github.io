window.onscroll = function (oEvent) {
  var header = document.getElementById("section1-anchor-link").offsetTop;
  var indexHeader = document.getElementById("welcome-container").offsetTop;
  var scrollPos = document.getElementsByTagName("body")[0].scrollTop;

  if(scrollPos >= header+100 || scrollPos >= indexHeader+2000){
    document.getElementById("persistent-header").className = "visible";
    console.log("just scrolled down");
  }
  else {
    document.getElementById("persistent-header").className = "hidden";
    console.log("haven't scrolled down yet");
  }
};