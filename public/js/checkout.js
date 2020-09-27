//When the user is signed in 
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("user is logged in" +user);
        checkout.fill_form(firebase.auth().currentUser.uid);
        console.log("Calling this function")
        
    } else {
        console.log("not logged in");
    }
});
var checkout = (function () {

    //global variables
    var pub = {};
    //function to validate user input data at the front end.
    /**
     * Check to email
     * @param textValue
     * @returns {boolean}
     */
    function checkDigits(textValue) {
        var pattern = /^[0-9]+$/;
        return pattern.test(textValue);
    }
    function checkEmail(textValue) {
        var pattern = /\S+@\S+.\S+/;
        return pattern.test(textValue);

    }
    function checkLength(textValue, minLength, maxLength) {
        var length = textValue.length;
        if (maxLength === undefined) {
            maxLength = minLength;
        }
        return (length >= minLength && length <= maxLength);
    }

    /**
     * Check to see if a string starts with a given substring
     *
     * @param textValue The string to check.
     * @param startValue The expected starting substring
     * @return True if textValue starts with startValue, False otherwise
     */
    function startsWith(textValue, startValue) {
        return textValue.substring(0, startValue.length) === startValue;
    }
/**
     * Check to see if a string is empty.
     *
     * Leading and trailing whitespace are ignored.
     * @param textValue The string to check.
     * @return True if textValue is not just whitespace, false otherwise.
     */
    function checkNotEmpty(textValue) {
        return textValue.trim().length > 0;
    }
    function validator(email) {
        if (!checkEmail(email)) {
            console.log("Email is not in the correct format")
            return false;

        }
        return true;
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
        $("#firstName").checkNotEmpty();
        checkNotEmpty(data[9])
        console.log(data,"lets see what you got")
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
    //Function to automaticallly fill the checkout form if the user is logged in
    pub.fill_form = async function(uid){
        const data = await datacontrol.getUserInfo(uid);
        console.log(uid+"i am the uid");
        //console.log(data.data().first_name + "i feel like summer");
        //$("#firstName").hide()
        //$("#firstName").html(data.first_name)
        

    }

    //setup public
    pub.setup = function () {
        console.log("checkout loaded");

    };

    return pub;

}());



$(document).ready(checkout.setup);
//$(document).ready(checkout.submitOrder);





