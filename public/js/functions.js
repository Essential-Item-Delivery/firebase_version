function login() {
    window.alert("Its working");
}




/**const auth = firebase.auth();
const db = firebase.firestore();

const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
})*/


// Sign Up Function
/**function signUp() {
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
*/

// Sign In Function
/**function login() {
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