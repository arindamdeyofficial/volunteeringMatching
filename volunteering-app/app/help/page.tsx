import SupportRequestForm from '../../components/support/SupportRequestForm';
import ContactInfo from '../../components/support/ContactInfo';

export default function HelpSupportPage() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
      <ContactInfo />
      <SupportRequestForm />
    </div>
  );
}
