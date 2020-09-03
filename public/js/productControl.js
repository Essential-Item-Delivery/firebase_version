var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};

    pub.getStore = function(){
        db.ref('ReferernceName').once('value',   function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
            });
        });
    }
    //setup public
    pub.setup = function () {


    };

    return pub;

});



$(document).ready(productControl.setup);