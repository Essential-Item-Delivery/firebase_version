var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};

    pub.getCategory =async function() {
        var categories = [];

           await firebase.database().ref("/Store").once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var path = "/Store/"+childSnapshot.key;
                    firebase.database().ref().child(path).once('value', function(snapshotChild) {
                        snapshotChild.forEach(function(child) {
                            var path1 = path+"/"+child.key+"/Category";
                            firebase.database().ref().child(path1).once('value',async function(cat) {
                                if(!categories.includes(cat.node_.value_)){
                                    await categories.push(cat.node_.value_);
                                }
                            });
                        });
                    });
                });
            });
        // console.log("array:");

        return categories;
    }

    pub.getProduct =async function() {
        var products = [];
        $("#categor").ready(function () {
             firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach( function (childSnapshot) {
                    var path = "/Store/" + childSnapshot.key;
                    var num = 0;
                     firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                        await snapshotChild.forEach( function (child1) {
                            var path1 = path + "/" + child1.key;
                            //console.log(child1);
                            num++;
                            //console.log(num);
                             firebase.database().ref().child(path1).on('value', async function (snappy) {
                                 var x = []
                                await snappy.forEach( function (child2) {
                                    x.push(child2.node_.value_);
                                    //console.log(child2);
                                });
                                 products.push(x);
                                 //console.log(x);
                            });
                        });
                    });
                });
            });
        });
        // console.log("array:");

        return products;
    }


    //setup public
    pub.setup = function () {


    };

    return pub;

}());



//$(document).ready(productControl.getProduct());