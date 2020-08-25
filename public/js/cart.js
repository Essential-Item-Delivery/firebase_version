
/* global Cookie:false */
/* global $:ture */
/* global Localstorage:true */
var cartmodule = (function () {
    'use strict';
    //global variables
    var pub = {};
    var buttons= [];

    /* jshint -W040 */
    function addtocart() {




        var cart=[];


       //get title and price
       // var title =   this.parentNode.parentNode.getElementsByTagName("h3")[0];
        //var price =  this.parentNode.parentNode.getElementsByClassName("price")[0];
        var title =$(this).parent().siblings("h3").text();
        var price =$(this).siblings('.price').text();


        var addmovie = new movie(title,price);

        console.log(addmovie);


        var value = Localstorage.get("cart");

        if(value===null || value ==="null" || value===""){
            //add new item
            cart.push(addmovie);
        }else{
            //get old cart data
            //console.log(value);

            cart= JSON.parse(value);
            //add new item to cart
            cart.push(addmovie);
            //clear cookie
            Localstorage.clear("cart");
        }

        //set new cookie
        Localstorage.set("cart",JSON.stringify(cart));




    }
    //debug show all iteam in cart and cookies
    pub.showALL = function () {

        return Localstorage.get("cart");
        //return JSON.stringify(cart);

    }
    /**
     * constrictor for movie
     * @param title
     * @param price
     */
    function movie(title, price) {
        this.title = title;
        this.price = price;

    }

    //setup public
    pub.setup = function () {

        /*$(document).click( function (e) {
            // e is the event
            console.log("Mouse clicked on a " + $(e.target).prop("tagName") +
                " element at " + e.pageX + "," + e.pageY);
        });*/

        //console.log( $('.buy'));

        $('.buy').click(addtocart);


       /* var  button, i;
        //get buy buttons
        buttons = document.getElementsByClassName("buy");
        //for each
        for (i = 0; i < buttons.length; i += 1) {


            //get title from each section
            //button = buttons[i];
            //debug
            //console.log(title);
            //button.onclick = addtocart;

        }
*/

    };
    return pub;
}());



//$(document).ready(cartmodule.setup);


if (window.addEventListener) {
    window.addEventListener("load", cartmodule.setup);
} else if (window.attachEvent) {
    window.attachEvent("onload", cartmodule.setup);
} else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
}
