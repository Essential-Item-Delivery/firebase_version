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
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
    }

    //setup public
    pub.setup = function () {
        //console.log("test");
        $('#login_form').submit(create);

    };

    return pub;

}());



$(document).ready(name_of_module.setup);