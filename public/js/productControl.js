var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};

    pub.categoryControl =async function() {
        var categories = [];

       await $("#categoryList").ready(async function () {
            $("#categoryList").html("");
           await firebase.database().ref("/Store").once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var path = "/Store/"+childSnapshot.key;
                    firebase.database().ref().child(path).once('value', function(snapshotChild) {
                        snapshotChild.forEach(function(child) {
                            var path1 = path+"/"+child.key+"/Category";
                            firebase.database().ref().child(path1).once('value',async function(cat) {
                                if(!categories.includes(cat.node_.value_)){
                                    await categories.push(cat.node_.value_);
                                    console.log(cat.node_.value_);
                                }
                            });
                        });
                    });
                });
            });
        });
        // console.log("array:");
        // console.log(categories);
        return categories;
    }


    //setup public
    pub.setup = function () {


    };

    return pub;

}());



$(document).ready(productControl.categoryControl());