'use client';

import React, { useState } from 'react';

interface MasterData {
  id: number;
  name: string;
  type: 'EventCategory' | 'ExhibitionType';
}

export default function MasterdataPage() {
  const [masterdata, setMasterdata] = useState<MasterData[]>([]);
  const [type, setType] = useState<'EventCategory' | 'ExhibitionType'>('EventCategory');
  const [newName, setNewName] = useState('');

  const handleAdd = () => {
    if (!newName.trim()) return;
    const newEntry: MasterData = {
      id: Date.now(),
      name: newName,
      type,
    };
    setMasterdata((prev) => [...prev, newEntry]);
    setNewName('');
  };

  const handleDelete = (id: number) => {
    setMasterdata((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id: number, newName: string) => {
    setMasterdata((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Masterdata Entry
      </h1>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'EventCategory' | 'ExhibitionType')}
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="EventCategory">Event Category</option>
          <option value="ExhibitionType">Exhibition Type</option>
        </select>

        <input
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border p-2 rounded flex-grow"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New
        </button>
      </div>

      <div className="space-y-6">
        {['EventCategory', 'ExhibitionType'].map((section) => (
          <div key={section}>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">
              {section === 'EventCategory' ? 'Event Categories' : 'Exhibition Types'}
            </h2>
            <table className="min-w-full border mt-2 text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {masterdata
                  .filter((item) => item.type === section)
                  .map((item) => (
                    <tr key={item.id} className="bg-white dark:bg-gray-800 border-b">
                      <td className="p-2 border">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleEdit(item.id, e.target.value)}
                          className="bg-transparent border-none w-full"
                        />
                      </td>
                      <td className="p-2 border">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
