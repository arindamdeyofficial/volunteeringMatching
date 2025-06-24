import { SubscriptionPlan } from './types';

interface Props {
  plan: SubscriptionPlan;
  onSubscribe: (plan: SubscriptionPlan) => void;
  active?: boolean;
}

export default function PlanCard({ plan, onSubscribe, active }: Props) {
  return (
    <div className={`border rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-900 ${active ? 'border-blue-500' : 'border-gray-300 dark:border-gray-700'}`}>
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-lg font-semibold text-blue-600 mb-2">{plan.price}</p>
      <ul className="list-disc ml-5 text-sm mb-4">
        {plan.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      {!active && (
        <button
          onClick={() => onSubscribe(plan)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      )}
      {active && <p className="text-green-600 font-semibold">Your current plan</p>}
    </div>
  );
}
