'use client';

import { useState } from 'react';
import { User } from './types';
import UserForm from './UserForm';

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);

  const handleSave = (user: User) => {
    if (editing) {
      setUsers(prev => prev.map(u => (u.id === user.id ? user : u)));
      setEditing(null);
    } else {
      setUsers(prev => [...prev, user]);
    }
    // TODO: Integrate API + email/SignalR notification
  };

  const toggleActive = (id: number) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, isActive: !u.isActive } : u)));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">User Management</h1>

      <UserForm onSubmit={handleSave} initialData={editing || undefined} />

      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
            <div>
              <p className="font-semibold">{user.name} ({user.role})</p>
              <p className="text-sm text-gray-500">{user.email} | {user.phone}</p>
              <p className="text-sm text-gray-500">Group: {user.group} | Hierarchy: {user.hierarchy}</p>
              <p className="text-sm text-gray-500">{user.isActive ? 'Active' : 'Inactive'}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(user)} className="text-blue-600 underline">
                Edit
              </button>
              <button
                onClick={() => toggleActive(user.id)}
                className={`text-sm px-2 py-1 rounded ${user.isActive ? 'bg-red-600' : 'bg-green-600'} text-white`}
              >
                {user.isActive ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        ))}
        {users.length === 0 && (
          <p className="text-gray-500">No users added yet.</p>
        )}
      </div>
    </div>
  );
}
