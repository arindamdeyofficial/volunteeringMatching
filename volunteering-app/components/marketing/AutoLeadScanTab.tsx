'use client';

import React from 'react';

const autoScans = [
  {
    name: 'NGO Scan - June 2025',
    dateTime: '2025-06-20 09:00',
    emailList: 'ngoleads_0625.csv',
  },
];

export default function AutoLeadScanTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Auto Lead Scans</h2>
      <table className="min-w-full text-sm bg-white dark:bg-gray-800 border">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Date & Time</th>
            <th className="p-2 border">Email Address List</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {autoScans.map((scan, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 border">{scan.name}</td>
              <td className="p-2 border">{scan.dateTime}</td>
              <td className="p-2 border">{scan.emailList}</td>
              <td className="p-2 border">
                <button className="text-green-600 mr-2">View</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
