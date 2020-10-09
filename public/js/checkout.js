/**
 * To add user inforamtion to the checkout form automatically, when logged in.
 * Also we have functions here, which checks for validation of the user input,
 * and a function to submit an order details to the firebase.
 */
var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        checkout.fill_form(firebase.auth().currentUser.uid);

    } else {
    }
});

var checkout = (function () {

    var pub = {};
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
            return false;

        }
        return true;
    }

    pub.submitOrder = function () {

        var user = firebase.auth().currentUser;
        if (user === null) {
            var uid = "guest";

        } else {
            var uid = firebase.auth().currentUser.uid;
        }
        console.log(uid);


        var db = firebase.firestore();
        var data = $('#checkout_form').serializeArray();

        db.collection("orders").add({
            first_name: data[0],
            last_name: data[1],
            email: data[2],
            address: data[3],
            uid: uid,
            cart: JSON.parse(decodeURIComponent(window.localStorage.getItem(encodeURIComponent("cart"))))



        }).then(function (response) {

            db.collection("order_user").doc(uid).collection("order_IDs").doc(response.id).set({
                test: "???"
            });
            Localstorage.clear("cart");

            window.location.replace("payment.html");
            return true;
        })
            .catch(function (error) {
                alert("error messge: " + error.message);
                return false;
            });

        return false;
    }

    /**
     * Function to automaticallly fill the checkout form if the user is logged in
     */
    pub.fill_form = async function (uid) {

        var docRef = db.collection("users").doc(uid);

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {

                $('input')[1].value = doc.data().first_name;
                $('input')[2].value = doc.data().last_name;
                $('input')[4].value = doc.data().address;
                $('input')[10].value = doc.data().email;
                var email_input = $('input')[10];
                email_input.readOnly = true;
            }
        });

    }



    //setup public
    pub.setup = function () {
        var value = Localstorage.get("cart");

        if (value === null || value === "null" || value === "") {
        } else {

            console.log(value);
            cart = JSON.parse(value);

            var total = 0;
            $("#checkoutITEMS").html("");
            for (var i = 0; i < cart.length; i++) {
                console.log(cart[i]);
                var p = cart[i];
                total = total + parseFloat(p.unit_price);
                $("#checkoutITEMS").append('<li>' + p.name + ' <span>' + parseInt(p.unit_price) + '</span></li>');
            }
            $("#SUBBER").append("$" + total);
            $("#totaller").append("$" + total);
        }

    };

    return pub;

}());



$(document).ready(checkout.setup);





