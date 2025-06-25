'use client';

import { useState } from 'react';
import { Sponsor } from './types';
import SponsorForm from './SponsorForm';

export default function SponsorManagementPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [editing, setEditing] = useState<Sponsor | null>(null);

  const handleSave = (newSponsor: Sponsor) => {
    if (editing) {
      setSponsors(prev => prev.map(s => (s.id === newSponsor.id ? newSponsor : s)));
      setEditing(null);
    } else {
      setSponsors(prev => [...prev, newSponsor]);
    }
  };

  const toggleActive = (id: number) => {
    setSponsors(prev =>
      prev.map(s =>
        s.id === id ? { ...s, isActive: !s.isActive } : s
      )
    );
  };

  const toggleType = (id: number) => {
    setSponsors(prev =>
      prev.map(s =>
        s.id === id ? { ...s, isIndividual: !s.isIndividual } : s
      )
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Sponsor Management</h1>

      <SponsorForm onSubmit={handleSave} initialData={editing || undefined} />

      <div className="space-y-4">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="p-4 border rounded bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
            <div>
              <p className="font-semibold">{sponsor.name}</p>
              <p className="text-sm text-gray-500">{sponsor.email}</p>
              <p className="text-sm text-gray-500">
                {sponsor.isIndividual ? 'Individual' : 'Organization'} | {sponsor.isActive ? 'Active' : 'Inactive'}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEditing(sponsor)}
                className="text-blue-600 underline"
              >
                Edit
              </button>
              <button
                onClick={() => toggleType(sponsor.id)}
                className="text-sm px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Toggle Type
              </button>
              <button
                onClick={() => toggleActive(sponsor.id)}
                className={`text-sm px-2 py-1 rounded ${
                  sponsor.isActive ? 'bg-red-600' : 'bg-green-600'
                } text-white`}
              >
                {sponsor.isActive ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        ))}
        {sponsors.length === 0 && (
          <p className="text-gray-500">No sponsors added yet.</p>
        )}
      </div>
    </div>
  );
}
