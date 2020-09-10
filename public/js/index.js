/**
 * Created by yzou on 8/7/20.
 */




var indexControl = (function () {

    //global variables
    var pub = {};

    pub.setItems = function (){
        $("#setPopular").ready(function () {
            productControl.indexProductSet();
        });
    }

    //set  drop down list to database variables
    pub.dropDownControl = function () {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    console.log(childSnapshot);
                    $("#dropper").append('<li><a href="#"></a>' + childSnapshot.key + '</li>');
                    // ...
                });
            });
        });
    };

    pub.categoryDropDown = async function () {

        var  list = productControl.getCategory().then();
      return list;
    };

    return pub;

}());


$(document).ready(indexControl.dropDownControl);
$(document).ready( indexControl.categoryDropDown );
$(document).ready( indexControl.setItems);