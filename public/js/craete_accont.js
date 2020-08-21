/* global L:false */
/* jshint node: true */

var account = (function () {
    'use strict';
    //global variables
    var pub = {},submit;
   
    //click
       function create() {
          const auth = firebase.auth();
            var email = $('this').child.$('firstname');


       }
   
    
   
    //setup public
    pub.setup = function () {
   
   var test =$('#create_account_form').submit(create);
   console.log(test);
    };
   
    return pub;
   
   
   }());
   
   
   
   if (window.addEventListener) {
    window.addEventListener("load", account.setup);
   } else if (window.attachEvent) {
    window.attachEvent("onload", account.setup);
   } else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   