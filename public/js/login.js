

var login = (function () {
    'use strict';
    //global variables
    var pub = {}, submit;
 
    //create new account
    function create() {
       const auth = firebase.auth();
       var email = $(this).child('#input-Email');
       var passwrods =$(this).child('#input-Password');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (response) {
        
            })
            .catch(function (error) {
        
            });
      return false;
    }
 
 
 
    //setup public
    pub.setup = function () {
      console.log("test");
       var test = $('#login_form').submit(create);
       create();
    };
 
    return pub;
 
 
 }());
 
 
 
 if (window.addEventListener) {
    window.addEventListener("load", login.setup);
 } else if (window.attachEvent) {
    window.attachEvent("onload", login.setup);
 } else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 