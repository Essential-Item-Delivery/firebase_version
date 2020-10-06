// STRIPE payment

// Create an instance of the Stripe object with your publishable API key
//var stripe = Stripe("sk_test_51HXI5fJ7YxCSpAcZrZd5PSUwktYwGe6xZksvKJ1hwy4xA0b5nVoID1wgzJa5vTmOb14veOzJltnVMCiaolHCmVND00i4wRBsqs");

//var checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", function() {
    fetch("/create-checkout-session", {
            method: "POST",
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(session) {
            return stripe.redirectToCheckout({
                sessionId: session.id
            });
        })
        .then(function(result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function(error) {
            console.error("Error:", error);
        });
});