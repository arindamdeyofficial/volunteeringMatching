'use client';

import { useState, useEffect } from 'react';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [eventList, setEventList] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [showEventDropdown, setShowEventDropdown] = useState(false); // set true if from event details

  useEffect(() => {
    // Simulate fetching event list
    setEventList(['Clean Up Drive', 'Tree Plantation', 'Blood Donation']);
    // Simulate condition from event detail page
    if (typeof window !== 'undefined' && window.location.search.includes('fromEvent=true')) {
      setShowEventDropdown(true);
    }
  }, []);

  const handleSubmit = () => {
    const feedback = {
      rating,
      comment,
      event: showEventDropdown ? selectedEvent : null,
    };
    console.log('Submitting feedback:', feedback);

    // TODO: Replace with backend API call and SignalR notification logic
    alert('Feedback submitted!');

    setRating(0);
    setComment('');
    setSelectedEvent('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Feedback</h1>

      {/* Rating */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Rating</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-2xl ${
                star <= rating ? 'text-yellow-400' : 'text-gray-400'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Comment</label>
        <textarea
          className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
          rows={4}
          placeholder="Your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      {/* Event Dropdown */}
      {showEventDropdown && (
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Event</label>
          <select
            className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="">Select an event</option>
            {eventList.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded"
      >
        Submit Feedback
      </button>
    </div>
  );
}
