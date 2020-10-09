/**
 * Check if the user is logged in and displays user name and a button to logout, if the user is loggged in.
 */
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        logcheck.displayUser();

    } else {
    }
});
var logcheck = (function () {

    var pub = {};

    pub.displayUser = async function () {
        $("#loggerRemove").remove();
        $("#createrRemove").remove();

        var uid = firebase.auth().currentUser.uid;

        $("#logger").html('<i class=\"fa fa-user\">Welcome ' + await datacontrol.getUserName(uid) + '</i> <button onclick="logcheck.logout()">Log Out</button>');
    }
    pub.logout = function () {
        firebase.auth().signOut()
            .then(function () {
                location.href = 'index.html';
            }).catch(function (error) {
            });
    }
    return pub;

}());