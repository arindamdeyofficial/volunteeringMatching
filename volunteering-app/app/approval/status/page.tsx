'use client';

import { useState, useEffect } from 'react';
import { UserApprovalStatus } from './types';
import StatusCard from './StatusCard';

const mockData: UserApprovalStatus[] = [
  {
    id: '1',
    type: 'UserRegistration',
    description: 'Requested account approval.',
    createdAt: new Date().toISOString(),
    status: 'Approved',
  },
  {
    id: '2',
    type: 'EventRegistration',
    description: 'Registered for "Tree Plantation Drive".',
    createdAt: new Date().toISOString(),
    status: 'Pending',
  },
  {
    id: '3',
    type: 'SurveySubmission',
    description: 'Submitted feedback for Clean Beach Walk.',
    createdAt: new Date().toISOString(),
    status: 'Rejected',
  },
];

export default function ApprovalStatusPage() {
  const [statuses, setStatuses] = useState<UserApprovalStatus[]>([]);

  useEffect(() => {
    // TODO: Replace with real API call for user-specific approval statuses
    setStatuses(mockData);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Approval Status</h1>

      {statuses.length === 0 ? (
        <p className="text-gray-500">No approval history found for the last 30 days.</p>
      ) : (
        statuses.map((s) => <StatusCard key={s.id} status={s} />)
      )}
    </div>
  );
}
