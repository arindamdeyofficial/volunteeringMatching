import React from 'react';

const SubscriptionPlans = () => {
    const plans = [
        {
            name: 'Basic Plan',
            price: '$10/month',
            features: ['Access to basic features', 'Community support'],
        },
        {
            name: 'Standard Plan',
            price: '$20/month',
            features: ['Access to all features', 'Priority support', 'Monthly newsletters'],
        },
        {
            name: 'Premium Plan',
            price: '$30/month',
            features: ['All Standard features', 'Exclusive content', 'One-on-one support'],
        },
    ];

    return (
        <div className="subscription-plans">
            <h1>Subscription Plans</h1>
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card">
                        <h2>{plan.name}</h2>
                        <p>{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <button onClick={() => alert(`Subscribed to ${plan.name}`)}>Subscribe</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;