import React from 'react';
import { useEffect } from 'react';
import Razorpay from 'razorpay';

const Payment = () => {
    const handlePayment = async () => {
        const options = {
            key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
            amount: 50000, // Amount in paise (50000 paise = ₹500)
            currency: 'INR',
            name: 'Volunteering App',
            description: 'Payment for Subscription',
            image: '/public/favicon.ico', // Your logo
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                // Redirect to success page or handle success
            },
            prefill: {
                name: '',
                email: '',
                contact: ''
            },
            notes: {
                address: 'Volunteering App Headquarters'
            },
            theme: {
                color: '#F37254'
            }
        };

        const razorpay = new Razorpay(options);
        razorpay.open();
    };

    useEffect(() => {
        // Load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="payment-container">
            <h1>Payment for Subscription</h1>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;