var sendemail = (function () {

    //global variables
    var pub = {};

    pub.send = function () {
        var auth = firebase.auth();
        var emailAddress = $("#input-Email").val();;
        // alert(emailAddress);
        auth.sendPasswordResetEmail(emailAddress).then( function () {

           alert("sended email");
           location.href = 'index.html';
            // Email sent.
        }).catch(function (error) {
            // An error happened.
            alert(error.message);
           // $("p.hint-text").html(error.message);
        });
    }

    return pub;

}());




