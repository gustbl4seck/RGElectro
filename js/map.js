jQuery(function ($) {
    function init_map1() {
        var myLocation = new google.maps.LatLng(-23.486492304726553, -47.44885673077066,15);
        var mapOpition = {
            center: myLocation,
            zoom: 16

        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Localização"
        });
        var map = new google.maps.Map(document.getElementById("map1"),
            mapOpition);
        marker.setMap(map);    
    }
    init_map1();
});