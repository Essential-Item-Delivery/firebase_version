/* global L:false */
/* jshint node: true */

var map_display = (function () {
 'use strict';
 //global variables
 var pub = {},centralMarker,northMarker,southMarker,map;

 //click
    function onMapClick(e) {
        alert('You clicked the map at ' + e.latlng);
    }

    /**
     * recentre the map
     * @param e
     */
    function centreMap(e) {
        //test
        //console.log(this);

        var markerLocation,markerBounds;


        //if central
        if (this.textContent === 'Central') {
            //get location
            markerLocation = [centralMarker.getLatLng()];
            markerBounds = L.latLngBounds(markerLocation);
            //reset map display
            map.fitBounds(markerBounds);
            //open pop up
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
        else{
             markerLocation = [southMarker.getLatLng()];
             markerBounds = L.latLngBounds(markerLocation);
           map.fitBounds(markerBounds);
           southMarker.openPopup();
        }

    }

 //setup public
 pub.setup = function () {

  //console.log("set up");

   map = L.map("map").setView([-45.875, 170.500], 15);

    // console.log(map);

     //set map to default location
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
       maxZoom: 18,
       attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap contributors</a> CC-BY-SA'}
  ).addTo(map);
    //add handler
     map.on('click', onMapClick);

     //locations for each store
     centralMarker = L.marker([-45.873937, 170.50311]).addTo(map);
     northMarker = L.marker([-45.853076, 170.52721]).addTo(map);
     southMarker = L.marker([-45.896012, 170.500431]).addTo(map);
     //set up pop ups
     centralMarker.bindPopup("<img src=\"images/Gone_With_the_Wind.jpg\" style='float: left; width: 40px; margin-right: 10px;'> <b>Central Store</b><p>Specialising in Classic Cinema</p>");
     northMarker.bindPopup("<img src=\"images/The_Jazz_Singer.jpg\" style='float: left; width: 40px; margin-right: 10px;'> <b>north Store</b><p>Specialising in Classic Cinema</p>");
     southMarker.bindPopup("<img src=\"images/Attack_of_the_50ft_Woman.jpg\" style='float: left; width: 40px; margin-right: 10px;'> <b>South Store</b><p>Specialising in Classic Cinema</p>");


     //set circle for south Marker
     L.circle( [-45.896012, 170.500431],
         { radius: 50,
             color: 'red',
     fillColor: 'red',
     fillOpacity: 0.5 } ).addTo(map);

     //get tags
     var stores, name, i;
     stores = document.getElementsByTagName("h3");
     //console.log(stores);
     //for each tag
     for ( i = 0; i < stores.length; i ++) {
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
















