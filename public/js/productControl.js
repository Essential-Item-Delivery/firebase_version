var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};


       function searchByName(){
        console.log("IM working");
            console.log("IM working");
            var use = $("#nameSearch").siblings("input").val();
            var productsStore = productControl.getAllproducts();
            var stores = Object.entries(productsStore.val());
            var products = [];
            console.log(stores[1]);
            for(var j = 0; j<stores.length; j++) {
                for (var i = 0; i < stores[j][1].length; i++) {
                    products.push(stores[j][1][i]);
                }
            }
            for(var i = 0;i<products.length;i++ ){
                if(products[i].ProductName.contains(use)){
                    makeHTML("", products[i].ProductID, products[i].ProductName, products[i].UnitPrice);
                }
            }

    }

    function makeHTML(label ,pid , name ,  price ){
        $("#shopItems").append(
            '<div class="col-lg-3 col-md-4 col-sm-6 mix '+label+'">' +
            '   <div class="featured__item">'+
            '       <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">' +
            '           <ul class="featured__item__pic__hover">' +
            '               <li><a ><i class="fa fa-heart"></i></a></li>' +
            '               <li><a ><i class="fa fa-retweet"></i></a></li>' +
            '               <li><a ><i class="fa fa-shopping-cart"></i></a>  <p hidden>'+pid+'</p> </li>' +
            '           </ul>' +
            '       </div>' +
            '       <div class="featured__item__text">' +
            '           <h6><a >'+name+'</a></h6>' +
            '           <h5>'+price+'</h5>' +
            '       </div>' +
            '   </div>' +
            '</div>' );
    }

    pub.getCategory = async function() {
        var categories = [];
        var products = await pub.getAllproducts();
        $("#categoryList").append("<select id='lister'></select>");
        var stores = Object.entries(products.val());
        console.log(stores[1]);
        for(var j = 0; j<stores.length; j++) {
            for (var i = 0; i < stores[j][1].length; i++) {
                console.log(stores[j].Category);
                if (!categories.includes(stores[j][1][i].Category)) {
                    categories.push(stores[j][1][i].Category);
                    var word = stores[j][1][i].Category;
                    // console.log(categories);
                    $("#lister").append('<option>' + word + '</option>');
                }
            }
        }

        // console.log("array:");
        //console.log(categories);
         return  categories;
    }


    pub.getAllproducts =async function(){
        var allproducts = await firebase.database().ref("/Store").once('value');
        return allproducts;
    }


    pub.indexProductSet = async function(){
        var products = [];
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach( function (childSnapshot) {
                var path = "/Store/" + childSnapshot.key;
                var num = 0;
                firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                    await snapshotChild.forEach( function (child1) {
                        var path1 = path + "/" + child1.key;
                        //console.log(child1);

                        //console.log(num);
                        firebase.database().ref().child(path1).on('value', async function (snappy) {
                            var x = []
                            num++;
                            await snappy.forEach( function (child2) {
                                x.push(child2.node_.value_);
                                //console.log(child2);
                            });
                            //$("#setPopular").append('');
                            products.push(x);
                            if(num>4 && num<9){
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
                                    '                            <h6><a href="#">'+x[3]+'</a></h6>' +
                                    '                            <h5>'+x[4]+'</h5>' +
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

    //Sets the products on the shop page
    //Array is as follows
    //Category 0
    //Description 1
    //Product ID 2
    //Product Name 3
    //Unit Price:
        pub.shopProducts = async function(){
        var products = [];
        var num = 0;
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach( function (childSnapshot) {
                var path = "/Store/" + childSnapshot.key;

                firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                    await snapshotChild.forEach( function (child1) {
                        var path1 = path + "/" + child1.key;
                        firebase.database().ref().child(path1).on('value', async function (snappy) {
                            var x = []

                            await snappy.forEach( function (child2) {
                                x.push(child2.node_.value_);
                                //console.log(child2);
                            });
                            num++;
                            //$("#setPopular").append('');
                            products.push(x);
                                console.log(num);
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
                                    '                            <h6><a href="#">'+x[3]+'</a></h6>' +
                                    '                            <h5>'+x[4]+'</h5>' +
                                    '                                <h4>'+childSnapshot.key+'</h4>' +
                                    '                        </div>' +
                                    '                    </div>' +
                                    '                </div>');
                                $("#numberOfProducts").html("");
                                $("#numberOfProducts").append(num);
                        });
                    });
                });
            });
        });
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
        $("#nameSearch").click(searchByName);

    };

    return pub;

}());



$(document).ready(productControl.getCategory());
$(document).ready(productControl.setup());