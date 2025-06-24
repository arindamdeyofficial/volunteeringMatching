'use client';
import { useState } from 'react';
import { User, UserRole } from './types';

interface Props {
  onSubmit: (user: User) => void;
  initialData?: User;
}

export default function UserForm({ onSubmit, initialData }: Props) {
  const [form, setForm] = useState<User>(
    initialData || {
      id: 0,
      name: '',
      email: '',
      phone: '',
      isActive: true,
      group: '',
      role: 'BasicUser',
      hierarchy: '',
    }
  );

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
    if (!form.name || !form.email) return alert('Name and Email required');
    onSubmit({ ...form, id: initialData?.id || Date.now() });
    if (!initialData) {
      setForm({
        id: 0,
        name: '',
        email: '',
        phone: '',
        isActive: true,
        group: '',
        role: 'BasicUser',
        hierarchy: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-4 rounded shadow space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border rounded w-full"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded w-full"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 border rounded w-full"
        />
        <input
          name="group"
          value={form.group}
          onChange={handleChange}
          placeholder="Group"
          className="p-2 border rounded w-full"
        />
        <input
          name="hierarchy"
          value={form.hierarchy}
          onChange={handleChange}
          placeholder="Hierarchy"
          className="p-2 border rounded w-full"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        >
          {['BasicUser', 'Admin', 'Sponsor', 'Vip', 'Exhibitor'].map(role => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={handleChange}
          />
          Active
        </label>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {initialData ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
}
