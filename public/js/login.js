firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        location.href = 'index.html';
        console.log(user);
        
    } else {
        console.log("not logged in");
    }
});



var login = (function () {
    'use strict';
    //global variables
    var pub = {}, submit;
 
    //create new account
     function create() {
       const auth =  firebase.auth();
       var email = $(this).children('#input-Email').val();
       var password =$(this).children('#input-Password').val();
     
        const promise  =firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (response) {
                location.href = 'index.html';
               // const user=firebase.auth().currentUser;
               // console.log(user);
            })
            .catch(function (error) {
                $('p').html("<p>error messge: "+error.message+"</p>");

               console.log("error messge: "+error.message);
            });

      return false;
    }
 
 
 
    //setup public
    pub.setup = function () {
      //console.log("test");
      $('#login_form').submit(create);
      
    };
    
    pub.logout=function(){
       firebase.auth().signOut()
           .then(function () {
               // Sign-out successful.
           }).catch(function (error) {
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 