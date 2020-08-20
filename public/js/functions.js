// Get elements
const email = document.getElementById('input-Email');
const password = document.getElementById('input-Password');

// Add login event
function login() {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    })
};