'use client';

import { useState } from 'react';
import { ApprovalRequest } from './types';
import ApprovalCard from './ApprovalCard';

const initialRequests: ApprovalRequest[] = [
  {
    id: '1',
    type: 'UserRegistration',
    requesterName: 'Arjun Patel',
    requesterEmail: 'arjun.patel@example.com',
    createdAt: new Date().toISOString(),
    description: 'New user requesting account activation.',
    status: 'Pending',
  },
  {
    id: '2',
    type: 'EventRegistration',
    requesterName: 'Sneha Sharma',
    requesterEmail: 'sneha.sharma@example.com',
    createdAt: new Date().toISOString(),
    description: 'Wants to register for "Green Earth Walkathon 2025".',
    status: 'Pending',
  },
];

export default function ApprovalRequestsPage() {
  const [requests, setRequests] = useState(initialRequests);

  const updateStatus = (id: string, status: 'Approved' | 'Rejected') => {
    setRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status } : req))
    );

    // TODO: Backend API call + SignalR/email notification
    console.log(`Request ${id} marked as ${status}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Approval Requests</h1>

      {requests.length === 0 ? (
        <p className="text-gray-500">No pending requests.</p>
      ) : (
        requests.map(req => (
          <ApprovalCard
            key={req.id}
            request={req}
            onApprove={id => updateStatus(id, 'Approved')}
            onReject={id => updateStatus(id, 'Rejected')}
          />
        ))
      )}
    </div>
  );
}
