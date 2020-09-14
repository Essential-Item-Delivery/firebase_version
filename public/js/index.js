/**
 * Created by yzou on 8/7/20.
 */



var indexControl = (function () {

    //global variables
    var pub = {};

    //This will set products on the index page
    pub.setItems = function (){
        console.log("DOMIOMIC");
        $("#setPopular").ready(function () {
            productControl.indexProductSet();
        });
    }


    //set  drop down list to database variables
    pub.dropDownControl = function () {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childKey = childSnapshot.key;
                    console.log(childKey);
                    $("#dropper").append('<li ><a href="./shop-grid.html" >' + childSnapshot.key + '</a></li>');
                    // ...
                });
            });
        });
    };

    pub.categoryDropDown = async function () {
        var list = productControl.getCategory().then();
        return list;
    };

    pub.setup = function () {
        $(".fa-shopping-cart").click(function () {

            alert($(this).parent().parent().parent().parent().siblings().find('h6').text());
            
            Localstorage.set("cart",$(this).parent().parent().parent().parent().siblings().find('h6').text(),100);

        });
    }

    return pub;

}());

$(document).ready(indexControl.setup);
$(document).ready(indexControl.dropDownControl);
$(document).ready(indexControl.categoryDropDown);
$(document).ready(indexControl.setItems());
