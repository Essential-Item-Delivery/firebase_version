/**
 * For user to create an account and send thier information to the database.
 */
var account = (function () {
   'use strict';
   var pub = {}, submit;

   pub.submit = function () {
      const auth = firebase.auth();
      var db = firebase.firestore();
      var uid;


      var data = $('#create_account_form').serializeArray();

      auth.createUserWithEmailAndPassword(data[2].value, data[4].value)
         .then(function (response) {
            var uid = firebase.auth().currentUser.uid;
            db.collection("users").doc(uid).set({
               first_name: data[0].value,
               last_name: data[1].value,
               email: data[2].value,
               address: data[3].value
            })
               .then(function (response) {
                  window.location.replace("index.html");
                  return true;
               })
               .catch(function (error) {
                  alert("error messge: " + error.message);
               });
         })
         .catch(function (error) {
            alert("error messge: " + error.message);
            console.log("error messge: " + error.message);
            return false;
         });


      console.log(data);
      return false;

   }

   //setup public
   pub.setup = function () {



   };

   return pub;


}());


$(document).ready(account.setup);
















