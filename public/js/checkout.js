var checkout = (function () {

    //global variables
    var pub = {}, submitOrder;
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
    function validator(email) {
        if (checkEmail(email)) {

        }
    }

    // function to submit an order details to the firebase.
    pub.submitOrder = function () {

        console.log("submited");
        var user= firebase.auth().currentUser;
        if(user===null){
            var uid ="guest";
           
        }else{
            var uid = firebase.auth().currentUser.uid;
        }
        console.log(uid);
        

        var db = firebase.firestore();
        var data = $('#checkout_form').serializeArray();
        //add to database
        //0: {name: "First_Name", value: ""}
        // 1: {name: "Last_Name", value: ""}
        // 2: {name: "Country", value: ""}
        // 3: {name: "Street_Address", value: ""}
        // 4: {name: "Address", value: ""}
        // 5: {name: "Town/City", value: ""}
        // 6: {name: "Country/State", value: ""}
        // 7: {name: "Postcode", value: ""}
        // 8: {name: "Phone", value: ""}
        // 9: {name: "Email", value: ""}
        // 10: {name: "Account_Password", value: ""}
        // 11: {name: "Order_Notes", value: ""}
        db.collection("orders").add({
            first_name: data[0],
            last_name: data[1],
            email: data[2],
            address: data[3],
            uid: uid,
            cart:  decodeURIComponent(window.localStorage.getItem(encodeURIComponent("cart")))

         

        }).then(function (response) {
                //  alert("new data created!");
                console.log("guest order data created!" + response.id);
                db.collection("order_user").doc(uid).collection("order_IDs").doc(response.id).set({
                    test:"???"
                 });
                return false;
            })
            .catch(function (error) {
                alert("error messge: " + error.message);
                console.log("error messge: " + error.message);
                return false;
            });


        console.log("order created for the guest user!");
        // console.log(data);

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





