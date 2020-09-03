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
    
    pub.displayUser = function(){
        $("#loggerRemove").remove();
        $("#createrRemove").remove();
        console.log(firebase.auth().currentUser.uid);
        $("#logger").html('<i class=\"fa fa-user\">Welcome '+datacontrol.getUserName(firebase.auth().currentUser.uid)+'</i>');
    }

    //set  drop down list to database variables
    pub.dropDownControl = function() {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            firebase.database().ref('/CountDown/0/Category').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    childSnapshot.val();
                    $("#dropper").append('<li><a href="#"></a>"childSnapshot.val()"</li>');
                    // ...
                });
            });
        });
    }
    return pub;

}());

$(document).ready(indexControl.dropDownControl());