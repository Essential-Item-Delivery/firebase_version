// Start grabbing our DOM Objects

// initialize firebase auth
var auth = firebase.auth();

var email = document.getElementById('email');
var password = document.getElementById('password');
var btnLogin = document.getElementById('btnLogin');
var btnLogout = document.getElementById('btnLogout');

// action response to click
btnLogin.addEventListener('click', funcLogin);
btnLogout.addEventListener('click', funcLogout);

function funcLogin() {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function(data) {
            console.log(email.value);
            console.log("Login Success");
            console.log(data);
            location.href = 'admin-panel.html';
            //location.reload();
        })
        .catch(function(error) {
            alert(error);
        })
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        btnLogout.classList.remove('hidden');

    } else {
        // User is signed out.
        btnLogout.classList.add('hidden');
        btnLogin.classList.remove('hidden');
    }
})

// function logout
function funcLogout() {
    auth.signOut().then(function() {
        console.log("You are logged out")
        location.href = 'admin-login.html';
    }).catch(function(err) {
        alert(err)
    })
}