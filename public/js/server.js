const stripe = require('stripe')('sk_test_51HXI5fJ7YxCSpAcZrZd5PSUwktYwGe6xZksvKJ1hwy4xA0b5nVoID1wgzJa5vTmOb14veOzJltnVMCiaolHCmVND00i4wRBsqs');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:5000';

app.post('/create-checkout-session', async(req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Stubborn Attachments',
                    images: ['https://i.imgur.com/EHyR2nP.png'],
                },
                unit_amount: 2000,
            },
            quantity: 1,
        }, ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/admin-login.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.json({
        id: session.id
    });
});

app.listen(5000, () => console.log('Running on port 5000'));