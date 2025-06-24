export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  type: 'product' | 'support';
}
