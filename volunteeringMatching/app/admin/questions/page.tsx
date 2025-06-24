'use client';

import { useState } from 'react';
import QuestionForm from './QuestionForm';
import { Question } from './types';

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editing, setEditing] = useState<Question | null>(null);

  const handleSave = (newQuestion: Question) => {
    if (editing) {
      setQuestions(prev =>
        prev.map(q => (q.id === newQuestion.id ? newQuestion : q))
      );
      setEditing(null);
    } else {
      setQuestions(prev => [...prev, newQuestion]);
    }
  };

  const handleEdit = (question: Question) => {
    setEditing(question);
  };

  const handleTogglePublish = (id: number) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === id ? { ...q, isPublished: !q.isPublished } : q
      )
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">Questions</h1>

      <QuestionForm onSubmit={handleSave} initialData={editing || undefined} />

      <div className="space-y-2">
        {questions.map(q => (
          <div key={q.id} className="p-4 border rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{q.question}</p>
                <p className="text-sm text-gray-500">Type: {q.type}</p>
                <p className="text-sm text-gray-500">Active: {q.isActive ? 'Yes' : 'No'}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(q)}
                  className="text-blue-600 underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleTogglePublish(q.id)}
                  className={`text-sm px-2 py-1 rounded ${
                    q.isPublished
                      ? 'bg-red-600 text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {q.isPublished ? 'Unpublish' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        ))}
        {questions.length === 0 && <p className="text-gray-500">No questions added yet.</p>}
      </div>
    </div>
  );
}
