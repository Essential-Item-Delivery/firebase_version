/**
 * Send an email when a user forgets his password.
 */
var sendemail = (function () {

    var pub = {};

    pub.send = function () {
        var auth = firebase.auth();
        var emailAddress = $("#input-Email").val();;
        auth.sendPasswordResetEmail(emailAddress).then( function () {

           alert("sended email");
           location.href = 'index.html';
        }).catch(function (error) {
            alert(error.message);
        });
    }

    return pub;

}());




