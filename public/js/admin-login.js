/**
 * Initialize firebase authentication.
 * and give access to only authorized staff.
 * */
var auth = firebase.auth();
var btnLogin = document.getElementById('btnLogin');
var btnLogout = document.getElementById('btnLogout');


function funcLogin() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if (email.value === 'admin') {
        window.location.replace("admin-panel.html");
    } else {
        alert("access denied");
    }

}