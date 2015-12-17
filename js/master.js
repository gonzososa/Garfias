google.maps.event.addDomListener(window, 'load', function () {
  var centerXalapa = new google.maps.LatLng(19.537868, -96.901117);
  var centerElCastillo = new google.maps.LatLng(19.5481989, -96.8756014);

  var mapData = {
    center: centerXalapa,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var container = document.getElementById('googleMap');
  var map = new google.maps.Map(container, mapData);

  var marker = new google.maps.Marker ({
      position: centerXalapa,
      animation: google.maps.Animation.BOUNCE
    }).setMap(map);

  var marker = new google.maps.Marker({
      position: centerElCastillo,
      animation: google.maps.Animation.BOUNCE
  }).setMap(map);
});
