'use client';

import { useState } from 'react';

export default function SurveyForm() {
  const [question, setQuestion] = useState('');
  const [answerType, setAnswerType] = useState('stars');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to DB (API call)
    alert(`Created: ${question} - ${answerType}`);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block font-semibold">Question</label>
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Answer Type</label>
        <select
          value={answerType}
          onChange={e => setAnswerType(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="stars">5 Star</option>
          <option value="multiple">Multiple Choice</option>
          <option value="yesno">Yes/No</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Survey
      </button>
    </form>
  );
}
