/**
 * Created by yzou on 8/7/20.
 */

var indexControl = (function () {

    //global variables
    var pub = {};

    pub.displayUser = function(){
        $("#loggerRemove").remove();
        $("#createrRemove").remove();
        $("#logger").html('<i class=\"fa fa-user\">Welcome '+firebase.auth().currentUser.uid+'</i>');
    }

    //set  drop down list to database variables
    pub.dropDownControl = function() {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            $("#dropper").append('<li><a href="#">Does this work</a></li>');
        });
    }
    return pub;

}());

$(document).ready(indexControl.dropDownControl());