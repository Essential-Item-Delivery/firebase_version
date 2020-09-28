// Start grabbing our DOM Objects
const submitBtn = document.querySelector("#submit");

let email = document.querySelector("#usrname");
let password = document.querySelector("#psword");

submitBtn.addEventListener('click', function() {

        console.log("It reaches here");

        let email = email.value;
        let password = password.value;
        console.log(messenger.value);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(response) {
                location.href = 'deliveries.html';
            })
            .catch(function(error) {
                // Handle Errors here.
                console.log("error messge: " + error.message);
            });
    }
}