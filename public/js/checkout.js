var checkout = (function () {

    //global variables
    var pub = {}, submitOrder;
    //function to validate user input data at the front end.
    
    function validator(){
        var pattern = /^[0-9]+$/;

    }

    // function to submit an order details to the firebase.
    pub.submitOrder = function () {
        var db = firebase.firestore();
  
  
        var data = $('#checkout_form').serializeArray();
  
              //add to database
              db.collection("orders").doc().set({
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
                    db.collection("order_user").doc("guest").collection("data").doc(response.id).set({

                    });
                    return true;
                 })
                 .catch(function (error) {
                    alert("error messge: " + error.message);
                    console.log("error messge: " + error.message);
                 });
  
  
              console.log("order created for the guest user!");
             // console.log("uidis:" + firebase.auth().currentUser.uid);
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



$(document).ready(checkout.setup);
//$(document).ready(checkout.submitOrder);





