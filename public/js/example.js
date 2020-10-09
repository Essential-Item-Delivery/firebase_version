/**
 * This is jsut an example file, whic shows how a jquery file and the functions can be setup.
 */
var name_of_module = (function () {

    //global variables
    var pub = {};

    //private function
    function create() {

    }

    //public funtion
    pub.functiona = function () {
        firebase.auth().signOut()
            .then(function () {
            }).catch(function (error) {
            });
    }

    //setup public
    pub.setup = function () {
        $('#login_form').submit(create);

    };

    return pub;

}());

$(document).ready(name_of_module.setup);





