
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

       //get product info
  
        var name =$(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h6").text();
        var PID =$(this).parent().siblings().text();
        //todo
        var unit_price =$(this).siblings('.price').text();
        var price =$(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h5").text();
        
        var unit =1;
        var url =$(this).parent().parent().parent().parent().data().setbg;

        
        var new_item =new cart_item(name,PID,unit_price,price,unit);

        alert(name+PID+" price is :"+price);
       
        console.log(new_item);

        var value = Localstorage.get("cart");

        if(value===null || value ==="null" || value===""){
            //add new item
            cart.push(new_item);
        }else{
            //get old cart data
            //console.log(value);

            cart= JSON.parse(value);
            //add new item to cart
            cart.push(new_item);
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

    function cart_item( name ,pid,unit_price,price,unit) {
            
        this.name = name;
        this.pid = pid;
        this.unit_price = unit_price;
        this.price = price;
        this.unit = unit;
    }

    //setup public
    pub.setup = function () {

        console.log("cart loaded");
        // $('.buy').click(addtocart);
        $(".fa-shopping-cart").click(addtocart);
        console.log( $(".fa-shopping-cart"));

    };
    return pub;
}());



//$(document).ready(cartmodule.setup);


// if (window.addEventListener) {
//     window.addEventListener("load", cartmodule.setup);
// } else if (window.attachEvent) {
//     window.attachEvent("onload", cartmodule.setup);
// } else {
//     alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
// }
