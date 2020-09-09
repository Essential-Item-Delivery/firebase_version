var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};

    pub.getCategory = async function() {
        var categories = [],i=0;
           await firebase.database().ref("/Store").once('value',  function(snapshot) {
               $("#categoryList").append("<select id='lister'></select>");
              snapshot.forEach(   function(childSnapshot) {

                    var path = "/Store/"+childSnapshot.key;

                     firebase.database().ref().child(path).once('value', function(snapshotChild) {

                          snapshotChild.forEach( function(child) {

                            var path1 = path+"/"+child.key+"/Category";
                                firebase.database().ref().child(path1).once('value',   function(cat) {

                                if(!categories.includes(cat.node_.value_)){
                                     categories.push(cat.node_.value_);
                                     var word = cat.node_.value_;
                                    // console.log(categories);
                                    $("#lister").append('<option>'+word+'</option>');
                                }
                            });
                        });
                    });
                });
            });

        // console.log("array:");
        console.log(categories);
         return  categories;
    }


    pub.getProduct =async function() {
        var products = [];
       
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
                                 console.log(x);
                            });
                        });
                    });
                });
            });
       
        // console.log("array:");
         console.log(products);
        return products;
    }


    //setup public
    pub.setup = function () {


    };

    return pub;

}());



//$(document).ready(productControl.getProduct());