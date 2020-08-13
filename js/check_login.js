/**
 * Created by yzou on 8/7/20.
 */
/* global L:false */
/* jshint node: true */

var checklogin = (function () {
    'use strict';
    //global variables
    var pub = {},tokon;



    //setup public
    pub.setup = function () {


        var


        tokon = Cookie.get("loginToken");
        console.log(tokon);

       if(tokon==="" || tokon===null){

            console.log("not login")

       }
       else if(tokon==="Demo account"){


            console.log("log in")

          var div= document.getElementsByClassName("header__top__right__auth");

           console.log( div);

            div[0].innerHTML='<a href="#"><i class="fa fa-user">' +tokon+'</i> </a>';
           div[1].innerHTML='<a href="#"><i class="fa fa-user">' +tokon+'</i> </a>';
          // div.innerHTML="<p>asdasdasdadsasdasdasdasd</p>";


           console.log( document.getElementById("divlogin"))

        }



    };

    return pub;


}());



if (window.addEventListener) {
    window.addEventListener("load", checklogin.setup);
} else if (window.attachEvent) {
    window.attachEvent("onload", checklogin.setup);
} else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
}
















