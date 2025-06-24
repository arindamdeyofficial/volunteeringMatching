'use client';

import { useState } from 'react';

interface Survey {
  id: number;
  question: string;
  type: string;
}

export default function SurveyList() {
  const [surveys, setSurveys] = useState<Survey[]>([
    { id: 1, question: 'Rate the event', type: 'stars' },
    { id: 2, question: 'Did you enjoy the session?', type: 'yesno' }
  ]);

  const handleDelete = (id: number) => {
    setSurveys(surveys.filter(s => s.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Survey List</h2>
      <ul className="space-y-2">
        {surveys.map(s => (
          <li key={s.id} className="flex justify-between items-center border-b py-2">
            <span>{s.question} ({s.type})</span>
            <button onClick={() => handleDelete(s.id)} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
