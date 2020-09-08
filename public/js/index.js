/**
 * Created by yzou on 8/7/20.
 */




var indexControl = (function () {

    //global variables
    var pub = {};
    
   

    //set  drop down list to database variables
    pub.dropDownControl = function() {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            firebase.database().ref("/Store").once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    console.log(childSnapshot);
                    $("#dropper").append('<li><a href="#"></a>'+childSnapshot.key+'</li>');
                    // ...
                });
            });
        });
    }

    pub.categoryDropDown = function() {
        $("#categoryList").ready(function () {
            $("#categoryList").append("<select id='lister'></select>");
                    // ...
                });
    }
    return pub;

}());

$(document).ready(indexControl.dropDownControl());