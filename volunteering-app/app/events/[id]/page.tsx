'use client';

import { useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type EventDetail = {
  id: string;
  name: string;
  description: string;
  location: string;
  googleMapLink: string;
  owner: { name: string; email: string };
  teamName: string;
  isLive: boolean;
  sessionVideoUrl?: string;
  youtubeLinks?: string[];
};

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;

  const [event, setEvent] = useState<EventDetail | null>(null);
  const [isOwner, setIsOwner] = useState(false); // Simulated
  const [enrolled, setEnrolled] = useState(false); // Simulated
  const [checkedIn, setCheckedIn] = useState(false); // Simulated

  useEffect(() => {
    // Simulate fetch from API
    setTimeout(() => {
      setEvent({
        id: eventId,
        name: 'Green Earth Summit',
        description: 'A sustainability-driven event to unite global environmental leaders.',
        location: 'Bangalore, India',
        googleMapLink: 'https://maps.google.com/?q=Bangalore',
        owner: { name: 'John Doe', email: 'john@example.com' },
        teamName: 'EcoWarriors',
        isLive: true,
        sessionVideoUrl: 'https://www.youtube.com/embed/live_stream?channel=UC12345678',
        youtubeLinks: ['https://www.youtube.com/watch?v=video1', 'https://www.youtube.com/watch?v=video2']
      });

      setIsOwner(true); // Simulate owner view
      setEnrolled(true); // Simulate enrolled
      setCheckedIn(true); // Simulate checked in
    }, 500);
  }, [eventId]);

  if (!event) {
    return <div className="p-6">Loading event details...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded shadow">
      <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{event.description}</p>

      <div className="mb-6">
        <h2 className="font-semibold">Location:</h2>
        <Link
          href={event.googleMapLink}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Open in Google Maps
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p><strong>Team:</strong> {event.teamName}</p>
          <p><strong>Owner:</strong> {event.owner.name} ({event.owner.email})</p>
        </div>

        <div>
          {!isOwner ? (
            <p>
              <strong>Enroll Status:</strong>{' '}
              {enrolled ? 'Enrolled ✅' : 'Not Enrolled ❌'}
            </p>
          ) : (
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
              Notify All Enrolled
            </button>
          )}
        </div>
      </div>

      {event.isLive && event.sessionVideoUrl && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Live Session</h2>
          <iframe
            width="100%"
            height="400"
            src={event.sessionVideoUrl}
            frameBorder="0"
            allowFullScreen
            className="rounded"
          />
        </div>
      )}

      {!event.isLive && event.youtubeLinks && event.youtubeLinks.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Past Session Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.youtubeLinks.map((link, idx) => (
              <iframe
                key={idx}
                width="100%"
                height="250"
                src={link.replace('watch?v=', 'embed/')}
                frameBorder="0"
                allowFullScreen
                className="rounded"
              />
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <Link
          href={`/surveys?eventId=${event.id}`}
          className="inline-block mr-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Event Survey
        </Link>
        <Link
          href={`/feedback?eventId=${event.id}`}
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Event Feedback
        </Link>
      </div>

      <div className="mb-6">
        {isOwner ? (
          <p>
            <strong>Checked In Users:</strong> 12
          </p>
        ) : (
          <p>
            <strong>Attendance:</strong>{' '}
            {checkedIn ? 'Checked In ✅' : 'Not Checked In ❌'}
          </p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Live Event Chat</h2>
        <div className="h-60 bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-y-auto text-sm">
          <p><strong>Jane:</strong> Excited to join!</p>
          <p><strong>Mark:</strong> Don’t miss the green panel at 3 PM.</p>
        </div>
        <input
          type="text"
          className="mt-2 p-2 border rounded w-full dark:bg-gray-700"
          placeholder="Type your message..."
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Shopable Videos</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>
            <a href="https://www.youtube.com/watch?v=product1" target="_blank">
              Eco Bag Promotion
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=product2" target="_blank">
              Bamboo Products Showcase
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
