/**
 * Created by yzou on 8/7/20.
 */

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user);
        indexControl.displayUser();
        
    } else {
        console.log("not logged in");
    }
});



var indexControl = (function () {

    //global variables
    var pub = {};
    
    pub.displayUser = async function(){
        $("#loggerRemove").remove();
        $("#createrRemove").remove();

        console.log(firebase.auth().currentUser.uid);

        var uid = firebase.auth().currentUser.uid;

       // console.log("result is"+datacontrol.getUserName(uid));

        $("#logger").html('<i class=\"fa fa-user\">Welcome ' +await datacontrol.getUserName(uid) +'</i>');
        console.log("function called");
    }

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
    return pub;

}());

$(document).ready(indexControl.dropDownControl());