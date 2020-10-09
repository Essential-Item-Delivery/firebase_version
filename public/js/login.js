/**
 * Direct the user to the home page when logged in.
 * Controls the login page by making sure only users with correct password and email can sign in.
 */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        location.href = 'index.html';

    } else {}
});



var login = (function() {
    'use strict';
    //global variables
    var pub = {},
        submit;

    //create new account
    function create() {
        const auth = firebase.auth();
        var email = $(this).children('#input-Email').val();
        var password = $(this).children('#input-Password').val();

        const promise = firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(response) {
                location.href = 'index.html';
            })
            .catch(function(error) {
                $('p').html("<p>Oh No!: " + error.message + "</p>");

            });

        return false;
    }



    //setup public
    pub.setup = function() {
        //console.log("test");
        $('#login_form').submit(create);

    };

    pub.logout = function() {
        firebase.auth().signOut()
            .then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
            });
    }

    return pub;


}());



if (window.addEventListener) {
    window.addEventListener("load", login.setup);
} else if (window.attachEvent) {
    window.attachEvent("onload", login.setup);
} else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
}