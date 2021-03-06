/**
 * This is to stores shopping cart items before we submit it to the databse.
 */
var Localstorage = (function () {

    var pub = {};

    pub.set = function (name, value, hour) {

        window.localStorage.setItem(encodeURIComponent(name), encodeURIComponent(value));
        var cart =Localstorage.get("cart");
        if(cart==='null'){
            var count =0;
        }else{
            var count =JSON.parse(cart).length;
        }
        
        $(".fa.fa-shopping-bag").siblings().html(count);

    };

    pub.get = function (name) {
        var nameEq, cookies, cookie, i;
        nameEq = encodeURIComponent(name);

        return decodeURIComponent(window.localStorage.getItem(nameEq));
    };


    pub.showALL= function(){
        var cookies,cookie,i,nameEq;
        var result="empty";
        cookies = document.cookie.split(";");

        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i].trim();

            result+= "\n"+window.localStorage.getItem(nameEq);

        }
        return result;

    }

    pub.clear = function (name) {
        window.localStorage.clear(encodeURIComponent(name));
    };
    return pub;
}());