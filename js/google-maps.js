// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initialize() {
  var center = new google.maps.LatLng(40.746778, -73.9905);
  var cooper = new google.maps.LatLng(40.7286, -73.9905);

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

  var mapOptions = {
    zoom: 13,
    center: center,
    styles: styles
  };

  var map = new google.maps.Map(document.getElementById('google-maps-wrapper'), mapOptions);

  var contentString = '<img src="../assets/img/logo.png" style="width: 100%; height: auto;" /> \
    <a href="https://www.google.com/maps?f=q&source=s_q&hl=en&geocode&q=41+Cooper+Square,+New+York,+NY&aq=2&oq=cooper+union&sll=42.747012,-71.312256&sspn=4.574022,9.140625&vpsrc=0&t=h&ie=UTF8&hq=The+Cooper+Union,&hnear=Cooper+Square,+New+York,+10003&ll=40.729795,-73.990602&spn=0.00922,0.017853&z=16&iwloc=A&cid=8065674550730992253"> \
      <p> 41 Cooper Square</p><p>New York, NY, 10003</p> \
    </a> \
    <br/> \
    <a href="tel:+16469790150"><p>(646) 979-0150</p></a> \
    <a style="color: #0078D3" href="mailto:info@thehackerati.com"><p>info@thehackerati.com</p></a>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 180,
    maxHeight: 200
  });

  var marker = new google.maps.Marker({
    position: cooper,
    map: map,
    title: 'The Hackerati'
  });

  infowindow.open(map,marker);

}

google.maps.event.addDomListener(window, 'load', initialize);
