'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const amount = searchParams.get('amount'); // Amount in INR
  const plan = searchParams.get('plan') || 'Selected Plan';

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Set in .env
      amount: Number(amount) * 100, // In paise
      currency: 'INR',
      name: 'Volunteering App',
      description: plan,
      handler: function (response: any) {
        console.log('Payment Success', response);
        // You can verify and save to backend here
        router.push('/subscription?status=success');
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#1D4ED8',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Payment</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        You are subscribing to: <strong>{plan}</strong>
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Amount: ₹<strong>{amount}</strong>
      </p>
      <button
        onClick={handlePayment}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
      >
        Pay Now
      </button>
    </div>
  );
}
