'use client';
import { useState } from 'react';
import { Sponsor } from './types';

interface Props {
  onSubmit: (sponsor: Sponsor) => void;
  initialData?: Sponsor;
}

export default function SponsorForm({ onSubmit, initialData }: Props) {
  const [form, setForm] = useState<Sponsor>(
    initialData || {
      id: 0,
      name: '',
      email: '',
      isIndividual: false,
      eventsSponsored: [],
      isActive: true,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert('Name and Email required');
    onSubmit({ ...form, id: initialData?.id || Date.now() });
    if (!initialData) {
      setForm({
        id: 0,
        name: '',
        email: '',
        isIndividual: false,
        eventsSponsored: [],
        isActive: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-4 rounded shadow space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Sponsor Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isIndividual" checked={form.isIndividual} onChange={handleChange} />
          Individual
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} />
          Active
        </label>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {initialData ? 'Update Sponsor' : 'Add Sponsor'}
      </button>
    </form>
  );
}
