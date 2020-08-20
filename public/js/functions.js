// Get elements
const txtemail = document.getElementById('input-Email');
const txtpassword = document.getElementById('input-Password');
const btnLogin = document.getElementById('btnlogin');

// Add login event
btnLogin.addEventListener('submit', e => {
    e.preventDefault();

    // Get email and password
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();

    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert());
    console(email + password);
});