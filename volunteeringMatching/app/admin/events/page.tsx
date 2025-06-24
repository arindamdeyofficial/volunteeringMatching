'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
};

export default function EventManagementPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Simulate fetching from backend
    const dummyData: Event[] = [
      {
        id: '1',
        name: 'Green Earth Summit',
        date: '2025-07-10',
        location: 'Bangalore',
        status: 'Upcoming',
      },
      {
        id: '2',
        name: 'Clean City Drive',
        date: '2025-06-25',
        location: 'Mumbai',
        status: 'Ongoing',
      },
      {
        id: '3',
        name: 'Eco-Friendly Workshop',
        date: '2025-06-01',
        location: 'Delhi',
        status: 'Completed',
      },
    ];

    setEvents(dummyData);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Event Management</h1>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Location</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-3 border">{event.name}</td>
              <td className="p-3 border">{event.date}</td>
              <td className="p-3 border">{event.location}</td>
              <td className="p-3 border">
                <span
                  className={`inline-block px-2 py-1 rounded text-sm font-medium ${
                    event.status === 'Upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : event.status === 'Ongoing'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {event.status}
                </span>
              </td>
              <td className="p-3 border">
                <Link
                  href={`/events/${event.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
