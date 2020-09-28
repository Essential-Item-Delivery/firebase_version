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
        var j = 0;
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
//Put the shop name in the URL
    pub.departmentSet = function () {
            $("#CATS").html("");
            firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    console.log(childSnapshot);
                    var name = childSnapshot.key;
                    $("#CATS").append('<li ><button onClick ="shopControl.departmentProducts('+name+')">' + childSnapshot.key + '</button></li>');
                    // ...
                });
            });
    };

    pub.departmentProducts = async function (snap) {
        console.log();
        $("#CATS").html("");
        var num = 0;
        var allProducts = await pub.getAllproducts();
        for(var i = 0; i<Object.entries(allProducts.val()).length;i++){
            console.log(i);
            for(var j = 0; j<Object.entries(allProducts.val())[i][1].length;j++){
                var id = Object.entries(allProducts.val())[i][1][j].ProductID;
                var name = Object.entries(allProducts.val())[i][1][j].ProductName;
                var price = Object.entries(allProducts.val())[i][1][j].UnitPrice;
                //console.log(price);
                num ++;
                if(Object.entries(allProducts.val())[i].equals(snap)){
                makeHTML("shopItems","", id, name, price);
                $("#numberOfProducts").html("");
                $("#numberOfProducts").append(num);
                }
            }
        }
    };

    pub.getAllproducts =async function(){
        var allproducts = await firebase.database().ref("/Store").once('value');

        return allproducts;
    }

    function makeHTML(idTag,label ,pid , name ,  price ,url ){
        $("#"+idTag).append(
            '<div class="col-lg-3 col-md-4 col-sm-6 mix '+label+'">' +
            '   <div class="featured__item">'+
            '       <div class="featured__item__pic set-bg" data-setbg="'+url+'">' +
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

    //setup public
    pub.setup = async function () {

        var url = window.location.href;
        if (url.includes("?")) {
            var i = url.indexOf("?");
            url = url.substring(i+1);
            currentStore = url;
        }else{
            currentStore = "Shopperly";
            url = "";
        }
       // console.log(url);
        //$("#depTitle").html("");
       // $("#depTitle").append(url);

        var allProducts = await productControl.getAllproducts();
         console.log(Object.entries( allProducts.val())[0] );
         var num = 0;
         for(var i = 0; i<Object.entries(allProducts.val()).length;i++){
             console.log(Object.entries(allProducts.val())[i][0]);
             var use = Object.entries(allProducts.val())[i][0];
             if(use.includes(url)) {
                 for (var j = 0; j < Object.entries(allProducts.val())[i][1].length; j++) {
                     var id = Object.entries(allProducts.val())[i][1][j].ProductID;
                     var name = Object.entries(allProducts.val())[i][1][j].ProductName;
                     var price = Object.entries(allProducts.val())[i][1][j].UnitPrice;
                     var unit_price =Object.entries(allProducts.val())[i][1][j].Price;

                    // var img_url = await firebase.storage().ref("/images/"+'CountDown'+"/Product/product"+id+".png").getDownloadURL();
                    // var img_url = "images/Products/"+"Countdown"+"/product"+id+".png";
                    var img_url ='/images/Products/'+use+'/product'+id+'.png';
                    console.log(img_url);
                     num++;
                     // function makeHTML(idTag, label ,pid , name ,  price ,url ){
                     productControl.makeHtml("#shopItems", "", id, name, price,img_url);
                     $("#numberOfProducts").html("");
                     $("#numberOfProducts").append(num);
                 }
             }
         }
        console.log(Object.entries(allProducts.val())[0][1].length);
        $("#depTitle").ready(function () {
            $("#depTitle").html("");
            $("#depTitle").append(currentStore);
        });

        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });


       


    };

    return pub;

}());



$(document).ready(shopControl.departmentSet());
$(document).ready(shopControl.setup());
//$(document).ready(shopControl.setShop());