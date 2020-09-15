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
        console.log(t.val().CountDown[0].Description);







        console.log("thread 4");
        var x = []
        num++;
        await snappy.forEach(function (child2) {
            x.push(child2.node_.value_);
            //console.log(child2);
        });
        //$("#setPopular").append('');

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


        //await productControl.indexProductSet();
        // return;
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
        pub.dropDownControl();
        pub.categoryDropDown();
        await setItems();
        await setTimeout(hidespinner, 2500);
        await setTimeout(cartmodule.setup(), 10000);
    }

    return pub;

}());

$(document).ready(indexControl.setup);
// $(document).ready(indexControl.dropDownControl);
// $(document).ready(indexControl.categoryDropDown);
// $(document).ready(indexControl.setItems);
