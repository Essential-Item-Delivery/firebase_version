/**
 * This function deals with searching product, category and getting all the products.
 */
var productControl = (function () {
    var db = firebase.database();
    var pub = {};

    pub.searchByName = async function () {
        var use = $("#nameSearch").siblings("input").val();
        searchSet(use);
    }

    function searchSet(child) {
        Localstorage.clear("search");
        Localstorage.clear("category");

        Localstorage.set("search", child);
        var cat = $("#lister").val();
        Localstorage.set("category", cat);
    }

    function makeHTML(idTag, label, pid, name, price, url, quan) {
        $("#" + idTag).append(
            '<div class="col-lg-3 col-md-4 col-sm-6 mix ' + label + '">' +
            '   <div class="featured__item">' +
            '       <div class="featured__item__pic set-bg" data-setbg="' + url + '">' +
            '           <ul class="featured__item__pic__hover">' +
            '               <li><a ><i class="fa fa-heart"></i></a></li>' +
            '               <li><a ><i class="fa fa-retweet"></i></a></li>' +
            '               <li><a ><i class="fa fa-shopping-cart"></i></a>  </li>' +
            '           </ul>' +
            '       </div>' +
            '       <div class="featured__item__text">' +
            '           <h6><a >' + name + '</a></h6>' +
            '           <h5>' + price + '</h5>' +
            '           <h4 hidden>' + unit_price + '</h4>' +
            '           <h3 hidden>' + pid + '</h3>' +
            ' <h2 hidden>' + quan + '</h2>' +
            '       </div>' +
            '   </div>' +
            '</div>');
    }

    pub.getCategory = async function () {
        var categories = [];
        var products = await pub.getAllproducts();
        $("#categoryList").append("<select id='lister'></select>");
        var stores = Object.entries(products.val());
        //console.log(stores[1]);
        $("#lister").append('<option>' + "All Products" + '</option>');
        for (var j = 0; j < stores.length; j++) {
            for (var i = 0; i < stores[j][1].length; i++) {
                //console.log(stores[j].Category);
                if (!categories.includes(stores[j][1][i].Category)) {
                    categories.push(stores[j][1][i].Category);
                    var word = stores[j][1][i].Category;
                    // console.log(categories);
                    $("#lister").append('<option>' + word + '</option>');
                }
            }
        }
        return categories;
    }


    pub.getAllproducts = async function () {
        var allproducts = await firebase.database().ref("/Store").once('value');
        return allproducts;
    }


    pub.indexProductSet = async function () {
        var products = [];
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var path = "/Store/" + childSnapshot.key;
                var num = 0;
                firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                    await snapshotChild.forEach(function (child1) {
                        var path1 = path + "/" + child1.key;
                        firebase.database().ref().child(path1).on('value', async function (snappy) {
                            var x = []
                            num++;
                            await snappy.forEach(function (child2) {
                                x.push(child2.node_.value_);
                            });
                            products.push(x);
                            if (num > 4 && num < 9) {
                                console.log(num);
                                $("#setPopular").append('<div class="row featured__filter"  id="setPopular">' +
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
                                    '                        </div>' +
                                    '                    </div>' +
                                    '                </div>');
                            }
                        });
                    });
                });
            });
        });
        return;
    }

    pub.shopProducts = async function () {
        var products = [];
        var num = 0;
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var path = "/Store/" + childSnapshot.key;

                firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                    await snapshotChild.forEach(function (child1) {
                        var path1 = path + "/" + child1.key;
                        firebase.database().ref().child(path1).on('value', async function (snappy) {
                            var x = []

                            await snappy.forEach(function (child2) {
                                x.push(child2.node_.value_);
                            });
                            num++;
                            products.push(x);
                            console.log(num,);
                            makeHTML("#shopItems",);
                            $("#numberOfProducts").html("");
                            $("#numberOfProducts").append(num);
                        });
                    });
                });
            });
        });
    }

    pub.makeHtml = function (target, label, pid, name, price, url, unit_price, quan) {

        $(target).append(
            '<div class="col-lg-3 col-md-4 col-sm-6 mix ' + label + '">' +
            '   <div class="featured__item">' +
            '       <div class="featured__item__pic set-bg" data-setbg="' + url + '">' +
            '           <ul class="featured__item__pic__hover">' +
            '               <li><a ><i class="fa fa-shopping-cart"></i></a> </li>' +
            '           </ul>' +
            '       </div>' +
            '       <div class="featured__item__text">' +
            '           <h6><a >' + name + '</a></h6>' +
            '           <h5>' + price + '</h5>' +
            '           <h4 hidden>' + unit_price + '</h4>' +
            '           <h3 hidden>' + pid + '</h3>' +
            ' <h2 hidden>' + quan + '</h2>' +
            '       </div>' +
            '   </div>' +
            '</div>');


    }

    pub.getProduct = async function () {
        var products = [];
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var path = "/Store/" + childSnapshot.key;
                var num = 0;
                firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                    await snapshotChild.forEach(function (child1) {
                        var path1 = path + "/" + child1.key;
                        num++;
                        firebase.database().ref().child(path1).on('value', async function (snappy) {
                            var x = []
                            await snappy.forEach(function (child2) {
                                x.push(child2.node_.value_);
                            });
                            products.push(x);
                            console.log(x);
                        });
                    });
                });
            });
        });

        console.log(products);
        return products;
    }
    //set  drop down list to database variables
    pub.dropDownControl = function () {

        $("#dropper").html("");

        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                $("#dropper").append('<li ><a href="./shop-grid.html?' + childSnapshot.key + '" >' + childSnapshot.key + '</a></li>');
            });
        });
    };


    //setup public
    pub.setup = function () {
        pub.dropDownControl();
    };

    return pub;

}());



$(document).ready(productControl.getCategory());
$(document).ready(productControl.setup());