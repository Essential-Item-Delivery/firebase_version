
/**
 * Here is the functionality for the cart. Function for adding to the cart,
 * Function for showing products in the cart to the user.
 */
var cartmodule = (function () {
    'use strict';
    //global variables
    var pub = {};
    var buttons = [];


    /**
     * Get the inforamtion about the product and add it to the cart.
     */
    function addtocart() {
        var cart = [];

        var name = $(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h6").text();
        var PID = $(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h3").text();
        var unit_price = $(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h4").text();
        var price = $(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h5").text();
        var quantity = $(this).parent().parent().parent().parent().siblings(".featured__item__text").find("h2").text();
        var unit = 1;
        var url = $(this).parent().parent().parent().parent().data().setbg;


        var new_item = new cart_item(name, PID, unit_price, price, unit, quantity);

        alert(name + PID + " price is :" + price);

        console.log(new_item);

        var value = Localstorage.get("cart");

        if (value === null || value === "null" || value === "") {
            //add new item
            cart.push(new_item);
        } else {
            //get old cart data

            cart = JSON.parse(value);
            //add new item to cart
            cart.push(new_item);
            //clear cookie
            Localstorage.clear("cart");
        }
        Localstorage.set("cart", JSON.stringify(cart));

    }

    /**
     * Show all the items in the cart.
     */
    pub.showALL = function () {

        return Localstorage.get("cart");

    }

    function cart_item(name, pid, unit_price, price, unit) {

        this.name = name;
        this.pid = pid;
        this.unit_price = unit_price;
        this.price = price;
        this.unit = unit;
    }

    /** 
     * public setup function.
    */
    pub.setup = function () {

        $(".fa-shopping-cart").click(addtocart);

    };
    return pub;
}());
