var name_of_module = (function () {

    //global variables
    var pub = {};
    //function for validation
    function validator(){

    }

    //private function
    pub.submitOrder = function () {
        //const auth = firebase.auth();
        var db = firebase.firestore();
        //var uid;
  
  
        var data = $('#checkout_form').serializeArray();
  
        //test: data format
        // 0: {name: "first_name", value: "qwe"}
        // 1: {name: "last_name", value: "qwe"}
        // 2: {name: "email", value: "html@test1.qwe"}
        // 3: {name: "address", value: "qwe"}
        // 4: {name: "password", value: "qweqwe"}
  
        // auth.createUserWithEmailAndPassword(data[2].value, data[4].value)
        //    .then(function (response) {
        //      // alert("account create success");
        //         console.log("account create success");
        //       var uid = firebase.auth().currentUser.uid;
  
              //add to database
              db.collection("orders").doc("guest").set({
                 first_name: data[0],
                 last_name: data[1],
                 email: data[2],
                 address: data[3],
                 uid:"guest",
                 cart:"testing"
              })
                 .then(function (response) {
                  //  alert("new data created!");
                    console.log("guest order data created!");
                    return true;
                 })
                 .catch(function (error) {
                    alert("error messge: " + error.message);
                    console.log("error messge: " + error.message);
                 });
  
  
              console.log("new account created!");
              console.log("uidis:" + firebase.auth().currentUser.uid);
              // return false;
           
           
              

  
      
        console.log(data);
        return false;
  
  
  
     }

    //public funtion
    pub.functiona = function () {
        firebase.auth().signOut()
            .then(function () {
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
    }

    //setup public
    pub.setup = function () {
        //console.log("test");
        $('#login_form').submit(create);

    };

    return pub;

}());



$(document).ready(name_of_module.setup);





