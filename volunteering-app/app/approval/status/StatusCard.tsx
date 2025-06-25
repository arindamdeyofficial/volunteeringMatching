import { UserApprovalStatus } from './types';

export default function StatusCard({ status }: { status: UserApprovalStatus }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-md">
          {status.type.replace(/([A-Z])/g, ' $1')}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded ${
            status.status === 'Pending'
              ? 'bg-yellow-100 text-yellow-800'
              : status.status === 'Approved'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status.status}
        </span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{status.description}</p>
      <p className="text-xs text-gray-500 mt-1">
        Submitted on: {new Date(status.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
