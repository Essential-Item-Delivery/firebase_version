var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};

    pub.categoryControl = function() {
        $("#categoryList").ready(function () {
            $("#categoryList").html("");
            firebase.database().ref("/Store").once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var path = "/Store/"+childSnapshot.key;
                    firebase.database().ref().child(path).once('value', function(snapshotChild) {
                        snapshotChild.forEach(function(child) {
                            var path1 = path+"/"+child.key+"/Category";
                            firebase.database().ref().child(path1).once('value', function(cat) {
                                console.log(cat.node_.value_);

                            });
                        });
                    });
                    // ...
                });
            });
        });
    }


    //setup public
    pub.setup = function () {


    };

    return pub;

}());



$(document).ready(productControl.categoryControl());