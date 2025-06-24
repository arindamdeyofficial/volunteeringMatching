'use client';
import { useState } from 'react';
import { Question, QuestionType } from './types';

interface Props {
  onSubmit: (question: Question) => void;
  initialData?: Question;
}

const defaultForm: Question = {
  id: 0,
  question: '',
  type: 'multiple-choice',
  isActive: true,
  isPublished: false,
};

export default function QuestionForm({ onSubmit, initialData }: Props) {
  const [form, setForm] = useState<Question>(initialData || defaultForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.question.trim()) return alert('Question is required');
    onSubmit({ ...form, id: initialData?.id || Date.now() });
    setForm(defaultForm);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-4 rounded shadow space-y-4">
      <input
        type="text"
        name="question"
        placeholder="Enter question"
        value={form.question}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="multiple-choice">Multiple Choice</option>
        <option value="yes-no">Yes / No</option>
        <option value="rating">Rating</option>
      </select>

      <div className="flex gap-4">
        <label>
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} /> Active
        </label>
        <label>
          <input type="checkbox" name="isPublished" checked={form.isPublished} onChange={handleChange} /> Published
        </label>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {initialData ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
