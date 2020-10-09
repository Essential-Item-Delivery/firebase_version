/**
 * This is just for testing purpose of the map.
 */
var map_display = (function () {
    'use strict';
    var pub = {}, centralMarker, northMarker, southMarker, map;
    function onMapClick(e) {
        alert('You clicked the map at ' + e.latlng);
    }

    /**
     * recentre the map
     * @param e
     */
    function centreMap(e) {

        var markerLocation, markerBounds;

        if (this.textContent === 'Central') {
            markerLocation = [centralMarker.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            map.fitBounds(markerBounds);
            centralMarker.openPopup();

        }
        //if north
        else if (this.textContent === 'North') {

            markerLocation = [northMarker.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            map.fitBounds(markerBounds);
            northMarker.openPopup();

        }
        //if south
        else {
            markerLocation = [southMarker.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            map.fitBounds(markerBounds);
            southMarker.openPopup();
        }

    }

    //setup public
    pub.setup = function () {

        map = L.map("map").setView([-45.875, 170.500], 15);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap contributors</a> CC-BY-SA'
            }
        ).addTo(map);
        map.on('click', onMapClick);
        centralMarker = L.marker([-45.873937, 170.50311]).addTo(map);
        northMarker = L.marker([-45.853076, 170.52721]).addTo(map);
        southMarker = L.marker([-45.896012, 170.500431]).addTo(map);
        centralMarker.bindPopup("<img src=\"images/Gone_With_the_Wind.jpg\" style='float: left; width: 40px; margin-right: 10px;'> <b>Central Store</b><p>Specialising in Classic Cinema</p>");
        northMarker.bindPopup("<img src=\"images/The_Jazz_Singer.jpg\" style='float: left; width: 40px; margin-right: 10px;'> <b>north Store</b><p>Specialising in Classic Cinema</p>");
        southMarker.bindPopup("<img src=\"images/Attack_of_the_50ft_Woman.jpg\" style='float: left; width: 40px; margin-right: 10px;'> <b>South Store</b><p>Specialising in Classic Cinema</p>");


        //set circle for south Marker
        L.circle([-45.896012, 170.500431],
            {
                radius: 50,
                color: 'red',
                fillColor: 'red',
                fillOpacity: 0.5
            }).addTo(map);

        //get tags
        var stores, name, i;
        stores = document.getElementsByTagName("h3");
        //for each tag
        for (i = 0; i < stores.length; i++) {
            //set's cursor to pointer and add onclick function
            name = stores[i];
            name.style.cursor = "pointer";
            name.onclick = centreMap;
        }

    };

    return pub;


}());



if (window.addEventListener) {
    window.addEventListener("load", map_display.setup);
} else if (window.attachEvent) {
    window.attachEvent("onload", map_display.setup);
} else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
}
















