/* Instansiate firebase */
var firestore = firebase.firestore();

// Start grabbing our DOM objects
const submitBtn = document.querySelector("#submit");

let messenger = document.querySelector("#msgSender");
let msgEmail = document.querySelector("#msgEmail");
let msgDetails = document.querySelector("#msgDetails");

const db = firestore.collection("customerMessages");

submitBtn.addEventListener('click', function() {
    let messengerInput = messenger.value;
    let msgEmailInput = msgEmail.value;
    let msgDetailsInput = msgDetails.value;

    // Access the database collection
    db.doc().set({
        email = msgEmailInput,
        message = msgDetailsInput,
        name = messengerInput
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log("Didnt make it")
        console.log(error);
    });
});

