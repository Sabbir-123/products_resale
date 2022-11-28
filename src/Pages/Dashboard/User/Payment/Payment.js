import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const paydetails = useLoaderData()
    console.log(paydetails);
    return (
        <div>
            
        </div>
    );
};

export default Payment;