/**
 * Created by yzou on 8/7/20.
 */



var indexControl = (function () {

    //global variables
    var pub = {};


    //This will set products on the index page
    async function setItems() {
        console.log("start to set items in index page");


        var products = [];

        // var allproducts = await firebase.database().ref("/Store").once('value');
        var t = await productControl.getAllproducts();
        
        //############################
        //get array of all shop name        
        var shops =  Object.keys(t.val());

        for(var i =0 ; i<shops.length; i++){
            console.log(shops[i]);
        }
        //get array of product use index
        Object.entries(t.val())[0][1];


        var Stoeage =firebase.storage.ref("images/CountDown/Product/product1.png");

        // final StorageReference storageRef = storage.getReference();

        // final StorageReference ImagesRef = storageRef.child("images/"+mAu.getCurrentUser().getUid()+".jpg");

        //#############################

       // console.log(t.val());
        
        for(var i =0; i<6; i++){

        }

         return;
    }

    function makeHTML(labor ,pid , name ,  price ){
        $("#setPopular").append(
        '<div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">' +
        '   <div class="featured__item">'+
        '       <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">' +
        '           <ul class="featured__item__pic__hover">' +
        '               <li><a ><i class="fa fa-heart"></i></a></li>' +
        '               <li><a ><i class="fa fa-retweet"></i></a></li>' +
        '               <li><a ><i class="fa fa-shopping-cart"></i></a>  <p hidden>'+pid+'</p> </li>' +
        '           </ul>' +
        '       </div>' +
        '       <div class="featured__item__text">' +
        '           <h6><a >+name+</a></h6>' +
        '           <h5>+price+</h5>' +
        '       </div>' +
        '   </div>' +
        '</div>' );
    }

    //hide the on load icon
    function hidespinner() {

        $('.spinner').hide();
    }


    //set  drop down list to database variables
    pub.dropDownControl = function () {
        // $("#dropper").ready(function () {

        $("#dropper").html("");

        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                //console.log(childKey);
                $("#dropper").append('<li ><a href="./shop-grid.html" >' + childSnapshot.key + '</a></li>');
                // ...
            });
        });
        // });
    };

    pub.categoryDropDown = async function () {
        var list = productControl.getCategory().then();
        return list;
    };

    pub.setup = async function () {
        $(".fa-shopping-cart").click(function () {

            alert($(this).parent().parent().parent().parent().siblings().find('h6').text());

            Localstorage.set("cart", $(this).parent().parent().parent().parent().siblings().find('h6').text(), 100);

        });
        //load data into index #muti thread
        pub.dropDownControl();
        pub.categoryDropDown();

        // #singel thread 
        //load iteams 
        await setItems();
        //load cart
        await cartmodule.setup();
        //stop loading spinner
        await setTimeout(hidespinner, 500);
    }

    return pub;

}());

$(document).ready(indexControl.setup);
// $(document).ready(indexControl.dropDownControl);
// $(document).ready(indexControl.categoryDropDown);
// $(document).ready(indexControl.setItems);
