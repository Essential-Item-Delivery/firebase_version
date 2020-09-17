var checkout = (function () {

    //global variables
    var pub = {},submitOrder;
    //function to validate user input data at the front end.
    /**
     * Check to email
     * @param textValue
     * @returns {boolean}
     */
    function checkEmail(textValue) {
        var pattern = /\S+@\S+.\S+/;
        return pattern.test(textValue);

    }
    function validator(email){
      if(checkEmail(email)){

      }
    }

    // function to submit an order details to the firebase.
    pub.submitOrder = function () {

        console.log("submited");

        //var db = firebase.firestore();
  
  
        // var data = $('#checkout_form').serializeArray();
        //       //add to database
        //       db.collection("orders").doc({
        //          first_name: data[0],
        //          last_name: data[1],
        //          email: data[2],
        //          address: data[3],
        //          uid:"guest",
        //          cart:"testing"

        //       })
        //          .then(function () {
        //           //  alert("new data created!");
        //             console.log("guest order data created!"+response.id);
        //             // db.collection("order_user").doc("guest").collection("data").doc(response.id).set({

        //             // });
        //             return false;
        //          })
        //          .catch(function (error) {
        //             alert("error messge: " + error.message);
        //             console.log("error messge: " + error.message);
        //             return false;
        //          });
  
  
              //console.log("order created for the guest user!");
    
        console.log(data);

        return false;
       }



    //setup public
    pub.setup = function () {
      console.log("checkout loaded");

    };

    return pub;

}());



$(document).ready(checkout.setup);
//$(document).ready(checkout.submitOrder);





