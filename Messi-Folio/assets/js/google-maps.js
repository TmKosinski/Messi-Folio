function initMap() {
    
    var myLatLng = {lat: 26.194081755538786, lng: -80.16115039271659};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Inter Miami CF' // Title Location
    });
}