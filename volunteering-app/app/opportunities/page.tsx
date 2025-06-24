'use client';

import React from 'react';

const opportunities = [
  {
    id: 1,
    title: 'Beach Cleanup Drive',
    description: 'Join us for a cleanup event to preserve marine life.',
    date: '2025-07-15',
    location: 'Marina Beach, Chennai',
    enrolled: false,
  },
  {
    id: 2,
    title: 'Plantation Drive',
    description: 'Help us plant trees and green the city!',
    date: '2025-08-01',
    location: 'Cubbon Park, Bangalore',
    enrolled: true,
  },
  // Add more opportunities here
];

export default function OpportunitiesPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Volunteer Opportunities</h1>
      {opportunities.map((opportunity) => (
        <div
          key={opportunity.id}
          className="border border-gray-300 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800"
        >
          <h2 className="text-xl font-semibold">{opportunity.title}</h2>
          <p className="text-gray-700 dark:text-gray-300">{opportunity.description}</p>
          <p className="text-sm text-gray-500">
            📍 {opportunity.location} | 📅 {opportunity.date}
          </p>
          <button
            className={`mt-4 px-4 py-2 text-sm rounded ${
              opportunity.enrolled
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            disabled={opportunity.enrolled}
          >
            {opportunity.enrolled ? 'Enrolled' : 'Enroll Now'}
          </button>
        </div>
      ))}
    </div>
  );
}
