// Start grabbing our DOM Objects
const submitBtn = document.querySelector("#submit");

let email = document.querySelector("#usrname");
let password = document.querySelector("#psword");


firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

firebase.auth().signOut().then(function() {
    // Sign-out successful.
}).catch(function(error) {
    // An error happened.
});