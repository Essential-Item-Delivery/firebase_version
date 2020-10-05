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

/* Instansiate firebase */
var firestore = firebase.firestore();

// Start grabbing our DOM objects
const submitBtn = document.querySelector("#submit");

let messenger = document.querySelector("#msgSender");
let msgEmail = document.querySelector("#msgEmail");
let msgDetails = document.querySelector("#msgDetails");

const db = firestore.collection("custMessages");

submitBtn.addEventListener('click', function() {
    console.log("It reaches here");

    let messengerInput = messenger.value;
    let msgEmailInput = msgEmail.value;
    let msgDetailsInput = msgDetails.value;
    console.log(messenger.value);

    // Access the database collection
    db.doc().set({
        email : msgEmailInput,
        message : msgDetailsInput,
        name : messengerInput
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log("Didnt make it")
        console.log(error);
    });
});

