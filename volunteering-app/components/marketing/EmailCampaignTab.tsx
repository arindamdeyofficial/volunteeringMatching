// components/marketing/EmailCampaignTab.tsx
'use client';

import React from 'react';

const emailCampaigns = [
  {
    name: 'Volunteer Welcome',
    dateTime: '2025-06-01 10:00',
    message: 'Welcome message with upcoming events',
    recipients: 'All new volunteers',
  },
];

export default function EmailCampaignTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Email Campaigns</h2>

      <table className="min-w-full text-sm bg-white dark:bg-gray-800 border">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Date & Time</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Recipients</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {emailCampaigns.map((campaign, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 border">{campaign.name}</td>
              <td className="p-2 border">{campaign.dateTime}</td>
              <td className="p-2 border">{campaign.message}</td>
              <td className="p-2 border">{campaign.recipients}</td>
              <td className="p-2 border">
                <button className="text-blue-600 mr-2">Edit</button>
                <button className="text-green-600 mr-2">Send</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
