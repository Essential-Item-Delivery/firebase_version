var account = (function () {
   'use strict';
   //global variables
   var pub = {}, submit;



   // pub.test = function(){
   //    db.collection("users").add({
   //       first: "Alan",
   //       middle: "Mathison",
   //       last: "Turing",
   //       born: 1912
   //   })
   //   .then(function(docRef) {
   //       console.log("Document written with ID: ", docRef.id);
   //   })
   //   .catch(function(error) {
   //       console.error("Error adding document: ", error);
   //   });

   // }
   // pub.read = function(){
   //    db.collection("users").get().then((querySnapshot) => {
   //       querySnapshot.forEach((doc) => {
   //           console.log(`${doc.id} => ${doc.data()}`);
   //       });
   //   });
   // }


   pub.submit = function () {
      const auth = firebase.auth();
      var db = firebase.firestore();
      var uid;


      var data = $('#create_account_form').serializeArray();

      //test: data format
      // 0: {name: "first_name", value: "qwe"}
      // 1: {name: "last_name", value: "qwe"}
      // 2: {name: "email", value: "html@test1.qwe"}
      // 3: {name: "address", value: "qwe"}
      // 4: {name: "password", value: "qweqwe"}


      auth.createUserWithEmailAndPassword(data[2].value, data[4].value)
         .then(function (response) {
           // alert("account create success");
           console.log("account create success");
            var uid = firebase.auth().currentUser.uid;

            db.collection("users").doc(uid).collection("data").add({
               first_name: data[0],
               last_name: data[1],
               email: data[2],
               address: data[3]
            })
               .then(function (response) {
                //  alert("new data created!");
                  console.log("new data created!");

               })
               .catch(function (error) {
                  console.log("error messge: " + error.message);
               });


            console.log("new account created!");
            console.log("uidis:" + firebase.auth().currentUser.uid);
            // return false;
         })
         .catch(function (error) {
            console.log("error messge: " + error.message);
            return false;
         });

      //uid = firebase.auth().currentUser.uid;
      //console.log(uid+data);




      console.log(data);
      return false;



   }

   //setup public
   pub.setup = function () {



      //test: get form data
      //var data =$('#create_account_form').serializeArray();


      //test: firebase database auth::https://firebase.google.com/docs/firestore/quickstart?authuser=0#%E9%94%81%E5%AE%9A%E6%A8%A1%E5%BC%8F

      // Allow read/write access to all users under any conditions
      // Warning: **NEVER** use this rule set in production; it allows
      // anyone to overwrite your entire database.
      // service cloud.firestore {
      //    match /databases/{database}/documents {
      //      match /{document=**} {
      //        allow read, write: if true;
      //      }
      //    }
      //  }



      // Allow read/write access on all documents to any user signed in to the application
      // service cloud.firestore {
      //    match /databases/{database}/documents {
      //      match /{document=**} {
      //        allow read, write: if request.auth.uid != null;
      //      }
      //    }
      //  }

      // // Deny read/write access to all users under any conditions
      // service cloud.firestore {
      //    match /databases/{database}/documents {
      //      match /{document=**} {
      //        allow read, write: if false;
      //      }
      //    }
      //  }

   };

   return pub;


}());



$(document).ready(account.setup);
















