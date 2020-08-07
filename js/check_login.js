/**
 * Created by yzou on 8/7/20.
 */
/* global L:false */
/* jshint node: true */

var checklogin = (function () {
    'use strict';
    //global variables
    var pub = {};



    //setup public
    pub.setup = function () {

       var tokon = Cookie.get("loginToken");
       if(tokon!="" || tokon!=null){


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
















