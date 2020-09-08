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
                    var path = "/Store/"+childSnapshot.key+"/Category";
                    firebase.database().ref(path).once('value', function(snapshotChild) {
                        snapshotChild.forEach(function(child) {
                            console.log(childSnapshot);
                            console.log("OMG ITS WORKING");
                        });
                    });
                    // ...
                });
            });
        });
    }

    //Set this method up to sort through the categories and find one label for each of them to return
    pub.getCategories = function() {
        $("#lister").ready(function () {
            var categories = [];
            firebase.database().ref().child("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {

                    categories.push(childSnapshot.name);
                    console.log(childSnapshot.name);
                });
            });
            categories.forEach(function(cat){
                $("#lister").append('<li><a href="#"></a>'+cat.name+'</li>');
            });
        });
    }

    //setup public
    pub.setup = function () {


    };

    return pub;

});



$(document).ready(productControl.categoryControl());