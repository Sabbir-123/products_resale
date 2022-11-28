import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_stripePayment_Key);
const Payment = () => {
    const paydetails = useLoaderData()
    console.log(paydetails);
    return (
        <div className='App'>
            <h1>Payment For {paydetails.MobileName}</h1>
            <p>Please Pay <strong>${paydetails.price}</strong></p>
            <div>
            <Elements stripe={stripePromise}>
      <Checkout paydetails={paydetails} />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;