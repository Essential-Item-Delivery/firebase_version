var db = firebase.firestore();
//When the user is signed in 
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("user is logged in" +user);
        $("#accountAppend").append(<li><a href="./my-account.html">My Account</a></li>);
        //checkout.fill_form(firebase.auth().currentUser.uid);
        //console.log("Calling this function")
        
    } else {
        console.log("not logged in");
        //$("#my-account.html").remove();
       // $("#loggerRemove").remove();

        console.log("check if the account page is remved")
    }
});
//add all the functions related to the my-account page here
var myAccount = (function(){

    
    var pub = {};

    pub.accountDetails = function() {
        
    }

    //setup function
    pub.setup = function () {
        
        //this.accountDetails();
    }
    return pub;

}());

$(document).ready(myAccount.setup);