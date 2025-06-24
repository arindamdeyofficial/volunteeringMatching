'use client';

import { ApprovalRequest } from './types';

interface Props {
  request: ApprovalRequest;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export default function ApprovalCard({ request, onApprove, onReject }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow p-4 rounded border mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">{request.type.replace(/([A-Z])/g, ' $1')}</h3>
        <span
          className={`text-xs px-2 py-1 rounded ${
            request.status === 'Pending'
              ? 'bg-yellow-100 text-yellow-800'
              : request.status === 'Approved'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {request.status}
        </span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {request.description}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Requested by: <strong>{request.requesterName}</strong> ({request.requesterEmail})
      </p>
      <p className="text-xs text-gray-400">On: {new Date(request.createdAt).toLocaleString()}</p>

      {request.status === 'Pending' && (
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => onApprove(request.id)}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
          >
            Approve
          </button>
          <button
            onClick={() => onReject(request.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
