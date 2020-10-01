        // Create an instance of the Stripe object with your publishable API key
        var stripe = Stripe("pk_test_51HXI5fJ7YxCSpAcZlx6bNpqzOP8vVbNmdpG5coZdR14Z9gq8pMsGQiDry3fX7wojLyfbISTrbog3yiId4tWhWDCJ00TtEEfE7u");
        var checkoutButton = document.getElementById('checkout-button');

        function funcCheckout() {
            fetch("/create-session", {
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
        }