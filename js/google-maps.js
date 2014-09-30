var isMapDisplayed = false;
var cooper = new google.maps.LatLng(40.7286, -73.9905);
if (screen.width >= 600) {
  var center = new google.maps.LatLng(40.736778, -73.9905);
}
else {
  var center = new google.maps.LatLng(40.742217, -73.9905);
} 
var marker;
var map;
var contentString = 
  '<img src="../assets/img/logo.png" style="width: 100%; height: auto;" />' +
  '<p> 41 Cooper Square</p><p>New York, NY, 10003</p><br/><p>(917) 426-1066</p><a style="color: #0078D3" href="mailto:info@thehackerati.com"><p>info@thehackerati.com</p></a>';
var infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 180,
  maxHeight: 200
});

var styles = [
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color : "#007fe2" },
      { saturation: -50 }
    ]    
  },{
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      { color : "#5B5752" }
    ]    
  },{
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      { color : "#766e6b" }
    ]  
  },{
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [
      { visibility : "off" }
    ]    
  },{
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      { visibility : "off" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility : "off" },
    ]
  },{
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      { visibility : "on" },
      { color : "#F86827"}
    ]    
  },{
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      { visibility : "on" },
      { color : "#F86827"}
    ]    
  }  
];

function initializeMaps() {
  var mapOptions = {
    zoom: 13,
     scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center,
    disableDefaultUI: true,
    styles: styles
  };

  map = new google.maps.Map(document.getElementById('google-maps-wrapper'), mapOptions);

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    position: cooper
  });

  google.maps.event.addListener(window, 'load', toggleBounce);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, "resize", function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center); 
});

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);    
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);    
  }
}

google.maps.event.addDomListener(window, 'load', initializeMaps);

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  );
}

function growLetsTalk(){
  setTimeout(function(){expandMap()}, 0001);
}

function expandMap(){
  setTimeout(function(){slideMaps()}, 0100);
}

function slideMaps() {
  if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) &&
      window.innerWidth < 480 ) {}
  else {
    document.getElementById('google-maps-wrapper').style.marginLeft = "-50%";
    isMapDisplayed = true;
  }
}

function scrollHandler(){
  var scrollPos = window.pageYOffset;
  var offsetHeight = document.getElementById('welcome-container').clientHeight - 65;

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

  if (!isMapDisplayed && isElementInViewport(document.getElementById('contact-title'))) {
    growLetsTalk();
  }
}


if( /iPad/i.test(navigator.userAgent) || ( /Android/i.test(navigator.userAgent) && window.innerWidth > 480) ) {
  document.getElementById('google-maps-wrapper').style['-webkit-transition'] = "none";
  document.getElementById('google-maps-wrapper').style['-moz-transition'] = "none";
  document.getElementById('google-maps-wrapper').style['-ms-transition'] = "none";
  document.getElementById('google-maps-wrapper').style['-o-transition'] = "none";
  document.getElementById('google-maps-wrapper').style['transition'] = "none";
  document.getElementById('google-maps-wrapper').style.marginLeft = "-50%";
}
else{
  window.onscroll = scrollHandler
}

function bouncePause(){
  if (window.pageYOffset > (window.innerHeight * 3.4)) {
    setTimeout(function(){toggleBounce()}, 0001);    
  }    
}
 
