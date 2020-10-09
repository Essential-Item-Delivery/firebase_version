/**
 * For the account page to show up when the user is logged in.
 */
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        $("#headerList").append('<li ><a href="./my-account.html?" >' + "My Account" + '</a></li>');


    } else {
    }
});
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#accountAppend").append('<li ><a href="./my-account.html?" >' + "My Account" + '</a></li>');


    } else {
    }
});

var shopControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};
    var currentStore = "Shopperly";
    var allProducts = [];
    pub.setStore = function (child) {
        currentStore = child.key;
    }

    //Is called when the shop-grid is loaded through the id field shopItems, then
    //calls the shopProducts in productControl.js to fill the page with products
    pub.setShop = function () {

        var j = 0;
        for (j; j < allProducts.val().length; j++) {
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
    //Put the shop name in the URL
    pub.departmentSet = function () {
        $("#CATS").html("");
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                console.log(childSnapshot);
                var name = childSnapshot.key;
                $("#CATS").append('<li ><a href="./shop-grid.html?' + childSnapshot.key + '" >' + childSnapshot.key + '</a></li>');
                // ...
            });
        });
    };

    pub.departmentProducts = async function (snap) {
        console.log();
        $("#CATS").html("");
        var num = 0;
        var allProducts = await pub.getAllproducts();
        for (var i = 0; i < Object.entries(allProducts.val()).length; i++) {
            console.log(i);
            for (var j = 0; j < Object.entries(allProducts.val())[i][1].length; j++) {
                var id = Object.entries(allProducts.val())[i][1][j].ProductID;
                var name = Object.entries(allProducts.val())[i][1][j].ProductName;
                var price = Object.entries(allProducts.val())[i][1][j].UnitPrice;
                //console.log(price);
                num++;
                if (Object.entries(allProducts.val())[i].equals(snap)) {
                    makeHTML("shopItems", "", id, name, price);
                    $("#numberOfProducts").html("");
                    $("#numberOfProducts").append(num);
                }
            }
        }
    };

    pub.getAllproducts = async function () {
        var allproducts = await firebase.database().ref("/Store").once('value');

        return allproducts;
    }

    pub.sliderPrice = async function () {

    }

    function makeHTML(idTag, label, pid, name, price, url, unit_price, quan) {
        $("#" + idTag).append(
            '<div class="col-lg-3 col-md-4 col-sm-6 mix ' + label + '">' +
            '   <div class="featured__item">' +
            '       <div class="featured__item__pic set-bg" data-setbg="' + url + '">' +
            '           <ul class="featured__item__pic__hover">' +
            '               <li><a ><i class="fa fa-heart"></i></a></li>' +
            '               <li><a ><i class="fa fa-retweet"></i></a></li>' +
            '               <li><a ><i class="fa fa-shopping-cart"></i></a></li>' +
            '           </ul>' +
            '       </div>' +
            '       <div class="featured__item__text">' +
            '           <h6><a >' + name + '</a></h6>' +
            '           <h5>' + price + '</h5>' +
            ' <h4 hidden>' + unit_price + '</h4>' +
            ' <h3 hidden>' + pid + '</h3>' +
            ' <h2 hidden>' + quan + '</h2>' +
            '       </div>' +
            '   </div>' +
            '</div>');
    }

    function insertProducts(allProducts, url, word, searchWord) {
        var num = 0;
        for (var i = 0; i < Object.entries(allProducts.val()).length; i++) {
            var use = Object.entries(allProducts.val())[i][0];

            if (word) {
                if (use.includes(url)) {
                    for (var j = 0; j < Object.entries(allProducts.val())[i][1].length; j++) {
                        var id = Object.entries(allProducts.val())[i][1][j].ProductID;
                        var img_id = parseInt(id) + 1
                        var name = Object.entries(allProducts.val())[i][1][j].ProductName;
                        var price = Object.entries(allProducts.val())[i][1][j].UnitPrice;
                        var unit_price = Object.entries(allProducts.val())[i][1][j].Price;

                        var img_url = '/images/Products/' + use + '/product' + img_id + '.png';
                        if (name.toLowerCase().includes(searchWord.toLowerCase())) {
                            num++;
                            // function makeHTML(idTag, label ,pid , name ,  price ,url ){
                            productControl.makeHtml("#shopItems", "", id, name, price, img_url, unit_price, 1);
                            $("#numberOfProducts").html("");
                            $("#numberOfProducts").append(num);
                        }
                    }
                }
            } else {
                if (use.includes(url)) {
                    for (var j = 0; j < Object.entries(allProducts.val())[i][1].length; j++) {
                        var id = Object.entries(allProducts.val())[i][1][j].ProductID;
                        var img_id = parseInt(id) + 1
                        var name = Object.entries(allProducts.val())[i][1][j].ProductName;
                        var price = Object.entries(allProducts.val())[i][1][j].UnitPrice;
                        var unit_price = Object.entries(allProducts.val())[i][1][j].Price;

                        var img_url = '/images/Products/' + use + '/product' + img_id + '.png';
                        num++;
                        productControl.makeHtml("#shopItems", "", id, name, price, img_url, unit_price, 1);
                        $("#numberOfProducts").html("");
                        $("#numberOfProducts").append(num);
                    }
                }
            }
        }
    }
    async function setProducts(allProducts, url) {
        var searchWord = Localstorage.get("search");
        Localstorage.clear("search");
        var word;
        if (searchWord === null || searchWord === "null" || searchWord === "") {
            word = false;
        } else {
            word = true;
        }
        var searchCat = JSON.parse(Localstorage.get("category"));
        Localstorage.clear("category");

        var cate;
        if (searchCat === "All Products") {
            cate = false;
        } else {
            cate = true;
        }
        insertProducts(allProducts, url, word, searchWord);
    }

    //setup public
    pub.setup = async function () {

        var url = window.location.href;
        if (url.includes("?")) {
            var i = url.indexOf("?");
            url = url.substring(i + 1);
            currentStore = url;
        } else {
            currentStore = "Shopperly";
            url = "";
        }

        var allProducts = await productControl.getAllproducts();
        setProducts(allProducts, url);
        $("#depTitle").ready(function () {
            $("#depTitle").html("");
            $("#depTitle").append(currentStore);
        });

        //set img in html
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });


        await cartmodule.setup();


    };

    return pub;

}());



$(document).ready(shopControl.departmentSet());
$(document).ready(shopControl.setup());