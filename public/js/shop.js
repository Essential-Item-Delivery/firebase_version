var shopControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};
    var currentStore = "Shopperly";

    pub.setStore = function(child){
        currentStore = child.key;
    }

    //Is called when the shop-grid is loaded through the id field shopItems, then
    //calls the shopProducts in productControl.js to fill the page with products
    pub.setShop = function(){
        console.log("This is being used");
        $("#shopItems").ready(function () {
            productControl.shopProducts();
        });
    };

    pub.departmentSet = function () {
        $("#CATS").ready(function () {
            $("#CATS").html("");
            firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    console.log(childSnapshot);
                    $("#CATS").append('<li ><a href="./shop-grid.html">' + childSnapshot.key + '</a></li>');
                    // ...
                });
            });
        });
    };
    //setup public
    pub.setup = function () {
        $("#depTitle").ready(function () {
            console.log(currentStore);
            $("#depTitle").html("");
            $("#depTitle").append(currentStore);
        });
    };

    return pub;

}());



$(document).ready(shopControl.departmentSet());
$(document).ready(shopControl.setup());
$(document).ready(shopControl.setShop);