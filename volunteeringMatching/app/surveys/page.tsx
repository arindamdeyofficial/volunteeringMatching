import SurveyList from '../../components/survey/SurveyList';
import SurveyForm from '../../components/survey/SurveyForm';

export default function SurveyPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Surveys</h1>
      <SurveyForm />
      <SurveyList />
    </div>
  );
}
