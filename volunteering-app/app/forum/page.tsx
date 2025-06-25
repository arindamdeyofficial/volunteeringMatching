'use client';

import { useState } from 'react';

type Thread = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
};

export default function ForumPage() {
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 1,
      title: 'How to volunteer for upcoming events?',
      author: 'John Doe',
      createdAt: '2025-06-24',
    },
    {
      id: 2,
      title: 'Best ways to earn Earth Points?',
      author: 'Jane Smith',
      createdAt: '2025-06-22',
    },
  ]);

  const [title, setTitle] = useState('');

  const handleCreateThread = () => {
    if (!title.trim()) return;

    const newThread: Thread = {
      id: threads.length + 1,
      title,
      author: 'Current User',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setThreads([newThread, ...threads]);
    setTitle('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Forum</h1>

      {/* New Thread Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Start a New Discussion</h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2"
            placeholder="Enter your topic title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={handleCreateThread}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>

      {/* Thread List */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Recent Discussions</h2>
        <ul className="space-y-4">
          {threads.map((thread) => (
            <li
              key={thread.id}
              className="border p-4 rounded hover:shadow transition-shadow"
            >
              <h3 className="text-lg font-semibold">{thread.title}</h3>
              <p className="text-sm text-gray-600">
                Posted by <span className="font-medium">{thread.author}</span> on{' '}
                {thread.createdAt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
