/**
 * Check if the user is logged in and displays user name and a button to logout, if the user is loggged in.
 */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        logcheck.displayUser();

    } else {}
});
var logcheck = (function() {

    var pub = {};

    pub.displayUser = async function() {
        $("#loggerRemove").remove();
        $("#createrRemove").remove();

        var uid = firebase.auth().currentUser.uid;

        $("#logger").html('<i class style="font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;font-style:normal;"\"fa fa-user\"> Hi ' + await datacontrol.getUserName(uid) + '</i> <button class="btn btn-outline-btn btn-outline-secondary btm-sm btn-sm" onclick="logcheck.logout()">Log Out</button>');
    }
    pub.logout = function() {
        firebase.auth().signOut()
            .then(function() {
                location.href = 'index.html';
            }).catch(function(error) {});
    }
    return pub;

}());