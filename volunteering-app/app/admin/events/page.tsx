'use client';

import { useState } from 'react';

type Event = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  group?: string;
  parentEventId?: number;
};

const initialEvents: Event[] = [
  {
    id: 1,
    name: 'Environment Awareness Expo',
    description: 'Spreading awareness about climate change.',
    imageUrl: '/events/env.jpg',
    group: 'GreenInitiatives',
  },
  {
    id: 2,
    name: 'Health & Wellness Fair',
    description: 'Focus on public health and preventive care.',
    imageUrl: '/events/health.jpg',
    parentEventId: 1,
  },
];

export default function EventManagementPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [formState, setFormState] = useState<Partial<Event>>({});
  const [editId, setEditId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formState.name || !formState.description) return;

    if (editId !== null) {
      setEvents(prev =>
        prev.map(e => (e.id === editId ? { ...e, ...formState, id: editId } as Event : e))
      );
      setEditId(null);
    } else {
      const newEvent: Event = {
        id: Date.now(),
        name: formState.name!,
        description: formState.description!,
        imageUrl: formState.imageUrl || '',
        group: formState.group || '',
        parentEventId: formState.parentEventId ? Number(formState.parentEventId) : undefined,
      };
      setEvents(prev => [...prev, newEvent]);
    }
    setFormState({});
  };

  const handleEdit = (id: number) => {
    const event = events.find(e => e.id === id);
    if (event) {
      setEditId(id);
      setFormState(event);
    }
  };

  const handleDelete = (id: number) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Event Management</h1>

      {/* Event Form */}
      <div className="border p-4 rounded bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold">{editId !== null ? 'Edit Event' : 'Add New Event'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input name="name" placeholder="Event Name" className="p-2 border rounded" value={formState.name || ''} onChange={handleInputChange} />
          <input name="imageUrl" placeholder="Image URL" className="p-2 border rounded" value={formState.imageUrl || ''} onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" className="p-2 border rounded col-span-2" rows={3} value={formState.description || ''} onChange={handleInputChange} />
          <input name="group" placeholder="Group Name" className="p-2 border rounded" value={formState.group || ''} onChange={handleInputChange} />
          <select name="parentEventId" className="p-2 border rounded" value={formState.parentEventId || ''} onChange={handleInputChange}>
            <option value="">-- Parent Event --</option>
            {events.map(e => (
              <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          {editId !== null ? 'Update Event' : 'Create Event'}
        </button>
      </div>

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="p-4 bg-white dark:bg-gray-800 border rounded shadow">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
            {event.group && <p className="text-sm mt-1">Group: {event.group}</p>}
            {event.imageUrl && <img src={event.imageUrl} alt={event.name} 
                className="mt-2 w-full h-32 object-cover rounded" />}
            <div className="flex gap-2 mt-3">
              <button onClick={() => handleEdit(event.id)} className="text-blue-600">Edit</button>
              <button onClick={() => handleDelete(event.id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
