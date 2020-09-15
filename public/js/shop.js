var shopControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};
    var currentStore = "Shopperly";
    var allProducts= [];
    pub.setStore = function(child){
        currentStore = child.key;
    }

    //Is called when the shop-grid is loaded through the id field shopItems, then
    //calls the shopProducts in productControl.js to fill the page with products
    pub.setShop = function() {
        console.log("This is being used");
        // $("#shopItems").ready(function () {
        // productControl.shopProducts();
        // });
        for(j;j<allProducts.val().length;j++) {
            for (i; i < allProducts.val().length; i++) {
                $("#shopItems").append('<div class="row featured__filter">' +
                    '                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat tester">' +
                    '                    <div class="featured__item">' +
                    '                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">' +
                    '                            <ul class="featured__item__pic__hover">' +
                    '                                <li><a href="#"><i class="fa fa-heart"></i></a></li>' +
                    '                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>' +
                    '                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>' +
                    '                            </ul>' +
                    '                        </div>' +
                    '                        <div class="featured__item__text">' +
                    '                            <h6><a href="#">' + x[3] + '</a></h6>' +
                    '                            <h5>' + x[4] + '</h5>' +
                    '                                <h4>' + childSnapshot.key + '</h4>' +
                    '                        </div>' +
                    '                    </div>' +
                    '                </div>');
                $("#numberOfProducts").html("");
                $("#numberOfProducts").append(i);
            }
        }
    };

    pub.departmentSet = function () {
            $("#CATS").html("");
            firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    console.log(childSnapshot);
                    $("#CATS").append('<li ><a href="./shop-grid.html">' + childSnapshot.key + '</a></li>');
                    // ...
                });
            });
    };
    //setup public
    pub.setup = async function () {
         allProducts = await productControl.getAllproducts();
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
$(document).ready(shopControl.setShop());