/** Javascript Functions for Shopperly */

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1YUfUwKlU_Ge1YO0IAL-XtoxyhZ5IPqQ",
    authDomain: "shopperly-application.firebaseapp.com",
    databaseURL: "https://shopperly-application.firebaseio.com",
    projectId: "shopperly-application",
    storageBucket: "shopperly-application.appspot.com",
    messagingSenderId: "676747994228",
    appId: "1:676747994228:web:679586322f0c01df191d21",
    measurementId: "G-LZJZTDD4E8"
};

const admin = require('firebase-admin');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
})


// Sign Up Function
function signUp() {
    var email = document.getElementById("input-Email");
    var password = document.getElementById("input-Password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
        .then(function(response) {
            alert("Signed Up" + email)

        })
        .catch(function(error) {
            e => alert(e.message);

        });
}

// Sign In Function
/**function signIn() {
    var email = document.getElementById("input-Email");
    var password = document.getElementById("input-Password");

    auth.signInWithEmailAndPassword(email.value, password.value)
        .then(function(response) {
            console(email.value)
            alert("Signed In" + email);
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);

        });
}
**/