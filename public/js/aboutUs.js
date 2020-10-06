//to add the append the acccount page when the user is looged in.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
       // console.log("Account page should be here. logged in" +user);
        $("#headerList").append('<li ><a href="./my-account.html?" >' + "My Account" +'</a></li>');
    
        
    } else {
        console.log("not logged in");
    }
});