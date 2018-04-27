var map
var infowindow



function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)

/* this may be used for a custom marker
  var markerImage = new google.maps.MarkerImage('images/maskicon.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(15, 15),
                new google.maps.Point(30, 30));
*/
  
var customIcon = {
    url: "images/mark.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: map,
    icon: customIcon,
    animation: google.maps.Animation.DROP
      
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}

function showStadium() {
createMarker(41.3809, 2.1228, "Camp Nou Stadium, FC Barcelona <br><img src='images/nou.jpg'>")
createMarker(43.3014, -1.9737, "Anoeta Stadium, Real Sociedad <br><img src='images/anoeta_top.jpg'>")
createMarker(42.2124, -8.7401, "Balaídos Stadium, Celta Vigo <br><img src='images/Celta.jpg'>")
createMarker(37.3565, -5.9818, "Benito Villamarín Stadium, Real Betis <br><img src='images/Bet.jpg'>")
createMarker(39.4746, -0.3582, "Mestalla, Valencia <br><img src='images/vcf.jpg'>")
createMarker(40.4364, -3.5996, "Santiago Bernabéu Stadium, Real Madrid <br><img src='images/Real.jpg'>")
createMarker(53.4631, -2.2913, "Old trafford, Manchester United <br><img src='images/Tan.jpg'>")
createMarker(51.5549, -0.1084, "Emirates Stadium, Arsenal FC <br><img src='images/Arse.jpg'>")
createMarker(53.4308, -2.9608, "Anfield, Liverpool F.C <br><img src='images/liver.jpg'>")
createMarker(51.4817, -0.1910, "Stamford Bridge, Chelsea F.C <br><img src='images/chel.jpg'>")
createMarker(48.2188, 11.6247, "Allianz Arena, FC Bayern Munich <br><img src='images/bayern.jpg'>")
createMarker(51.4926, 7.4519, "Westfalenstadion, Borussia Dortmund <br><img src='images/bvb.jpg'>")
createMarker(48.8414, 2.2530, "Parc des Princes, Paris Saint-Germain F.C. <br><img src='images/psg.jpg'>")
createMarker(41.1618, -8.5836, "Estádio do Dragão, FC Porto <br><img src='images/Porto.jpg'>")
createMarker(45.1096, 7.6413, "Juventus Stadium, Juventus F.C. <br><img src='images/Juve.jpg'>")
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center:  {lat: 40.4637, lng: -3.7492},
    zoom: 3
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })

  showStadium()
}
