'use client';

import { useState } from 'react';
import PlanCard from './PlanCard';
import { SubscriptionPlan } from './types';

const productPlans: SubscriptionPlan[] = [
  {
    id: 'basic-product',
    name: 'Basic Product',
    price: '₹199 / month',
    features: ['Access to 5 events', 'Limited chat', 'Basic profile visibility'],
    type: 'product',
  },
  {
    id: 'pro-product',
    name: 'Pro Product',
    price: '₹499 / month',
    features: ['Unlimited events', 'Priority chat', 'Featured profile'],
    type: 'product',
  },
  {
    id: 'vip-product',
    name: 'VIP Product',
    price: '₹999 / month',
    features: ['Dedicated manager', 'Unlimited features', 'Sponsor badge'],
    type: 'product',
  },
];

const supportPlans: SubscriptionPlan[] = [
  {
    id: 'basic-support',
    name: 'Basic Support',
    price: '₹99 / month',
    features: ['Email support', 'FAQs access'],
    type: 'support',
  },
  {
    id: 'premium-support',
    name: 'Premium Support',
    price: '₹299 / month',
    features: ['Live chat support', 'Priority response'],
    type: 'support',
  },
  {
    id: 'vip-support',
    name: 'VIP Support',
    price: '₹499 / month',
    features: ['Phone support', 'Dedicated success manager'],
    type: 'support',
  },
];

export default function SubscriptionPage() {
  const [activePlanId, setActivePlanId] = useState<string | null>(null);

  const handleSubscribe = (plan: SubscriptionPlan) => {
    // TODO: integrate Razorpay or backend call here
    alert(`Subscribed to ${plan.name}!`);
    setActivePlanId(plan.id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Subscription Plans</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Product Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {productPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSubscribe={handleSubscribe}
              active={activePlanId === plan.id}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Help & Support Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {supportPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSubscribe={handleSubscribe}
              active={activePlanId === plan.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
