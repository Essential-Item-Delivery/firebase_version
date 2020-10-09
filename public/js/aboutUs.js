//To only add the account page when the user is looged in.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        $("#headerList").append('<li ><a href="./my-account.html?" >' + "My Account" + '</a></li>');
    } else {
    }
});