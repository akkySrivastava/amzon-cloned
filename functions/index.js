const functions = require('firebase-functions'); 
const express = require('express');
const cors = require('cors')
const stripe = require('stripe')('sk_test_51H1G4ILxHDAMC9kjIRbqAc0fwH8CoyhgFXDVW7db0vF9tly79TaAuq5imTXDNmUEv1hD48AXHlaPfhPZrxdJRPbb00Uj5idxxk')

const app = express()

app.use(cors({ origin: true}))
app.use(express.json())


app.get('/', ( req, res) =>
    res.status(200).send('Hello World')
)

app.post('/payments/create', async (req, res) => {
    const total = req.query.total

    console.log("The total amount is : ",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


exports.api = functions.https.onRequest(app)