/**
 * Created by yzou on 8/7/20.
 */



var indexControl = (function () {

    //global variables
    var pub = {};

    pub.setItems = function (){
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

        console.log("list:");
        console.log(list);
        console.log(list[1]);
        $("#categoryList").append("<select id='lister'></select>");






        var index = 0;



        for (index = 0; index < list.length; index++) {
            console.log("test:" + list[index]);
            await $("#lister").append("<option>list[index]</option>");
        }


        console.log(list.length);
        console.log(list);
        var t = [];
        t.push("1");
        t.push("2");
        console.log(t);

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
