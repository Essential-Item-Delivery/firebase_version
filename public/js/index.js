/**
 * Created by yzou on 8/7/20.
 */

var indexControl = (function () {

    //global variables
    var pub = {};

    pub.displayUser = function(){
        $("#loggerRemove").remove();
        $("#createrRemove").remove();
        $("#logger").html('<i class=\"fa fa-user\">Welcome '+firebase.auth().currentUser.uid+'</i>');
    }

    return pub;

}());