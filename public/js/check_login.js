firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user);
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

        $("#logger").html('<i class=\"fa fa-user\">Welcome ' +await datacontrol.getUserName(uid) +'</i>');

        console.log("function called");
    }

    return pub;

}());