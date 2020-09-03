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
        $("#logger").html('<i class=\"fa fa-user\">Welcome '+firebase.auth().currentUser.uid+'</i>');
    }

    return pub;

}());