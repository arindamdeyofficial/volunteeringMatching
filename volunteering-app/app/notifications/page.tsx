'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { fetchNotifications } from '@/lib/api/notifications';
import { initializeSignalR } from '@/lib/signalr/client';

type Notification = {
  id: number;
  message: string;
  link: string;
  triggerTime: string;
};

const dummyNotifications: Notification[] = [
  {
    id: 1,
    message: 'You have a new registration request.',
    link: '/approval/requests',
    triggerTime: '2025-06-24 08:10 AM',
  },
  {
    id: 2,
    message: 'Survey results are ready to view.',
    link: '/surveys',
    triggerTime: '2025-06-23 05:42 PM',
  },
  {
    id: 3,
    message: 'Sponsor showed interest in Event X.',
    link: '/admin/sponsors',
    triggerTime: '2025-06-22 04:00 PM',
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(dummyNotifications);

  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const onNotificationReceived = (newNotif: Notification) => {
    setNotifications((prev) => [newNotif, ...prev]);
  };

  useEffect(() => {
    // Fetch existing
    fetchNotifications().then(setNotifications).catch(console.error);

    // Setup SignalR
    initializeSignalR(onNotificationReceived);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h1>
        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No notifications available.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="bg-white dark:bg-gray-800 shadow rounded p-4 flex justify-between items-center"
            >
              <div>
                <Link href={notification.link} className="text-blue-600 hover:underline font-medium">
                  {notification.message}
                </Link>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {notification.triggerTime}
                </div>
              </div>
              <button
                onClick={() => handleDelete(notification.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Delete Notification"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
