firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("is logged in" +user);
        logcheck.displayUser();
        
    } else {
        console.log("not logged in");
    }
});

var logcheck = (function () {

    //global variables
    var pub = {};
    
    pub.displayUser = async function(){
        $("#loggerRemove").remove();
        $("#createrRemove").remove();

        console.log(firebase.auth().currentUser.uid);

        var uid = firebase.auth().currentUser.uid;

       // console.log("result is"+datacontrol.getUserName(uid));

        $("#logger").html('<i class=\"fa fa-user\">Welcome ' +await datacontrol.getUserName(uid) +'</i> <button onclick="logcheck.logout()">Log Out</button>');

        console.log("function called");
    }
    pub.logout=function(){
        firebase.auth().signOut()
            .then(function () {
                location.href = 'index.html';
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
     }
    return pub;

}());