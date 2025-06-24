'use client';

import { useState } from 'react';

export default function SupportRequestForm() {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
    event: '',
  });

  const [showEventDropdown, setShowEventDropdown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call backend API
    alert('Request submitted successfully!');
    setForm({ email: '', subject: '', message: '', event: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-4">
      <h2 className="text-xl font-semibold">Submit a Request</h2>

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="subject"
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Describe your issue..."
        value={form.message}
        onChange={handleChange}
        className="w-full p-2 border rounded h-24"
        required
      />

      {showEventDropdown && (
        <select
          name="event"
          value={form.event}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Event</option>
          <option value="event1">Tree Plantation Drive</option>
          <option value="event2">Clean City Campaign</option>
        </select>
      )}

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            onChange={(e) => setShowEventDropdown(e.target.checked)}
          />
          <span>Attach Event Info</span>
        </label>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
  );
}
