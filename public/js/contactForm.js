/** 
 * Add acccount page when the user is looged in. 
 * Customers can contact the staff here, using a subit form.
 */
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#headerList").append('<li ><a href="./my-account.html?" >' + "My Account" + '</a></li>');

    } else {
    }
});

var firestore = firebase.firestore();
const submitBtn = document.querySelector("#submit");

let messenger = document.querySelector("#msgSender");
let msgEmail = document.querySelector("#msgEmail");
let msgDetails = document.querySelector("#msgDetails");

const db = firestore.collection("custMessages");

submitBtn.addEventListener('click', function () {

    let messengerInput = messenger.value;
    let msgEmailInput = msgEmail.value;
    let msgDetailsInput = msgDetails.value;

    db.doc().set({
        email: msgEmailInput,
        message: msgDetailsInput,
        name: messengerInput
    })
        .then(function () {
        })
        .catch(function (error) {

        });
});

