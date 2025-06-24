'use client';

import React from 'react';
import {
  Line,
  Bar,
  Doughnut,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Mock analytics data
const userGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'New Users',
      data: [20, 45, 65, 80, 60, 95],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const engagementData = {
  labels: ['Email Campaigns', 'Events', 'Surveys', 'Subscriptions'],
  datasets: [
    {
      label: 'Engagement',
      data: [40, 25, 20, 15],
      backgroundColor: ['#10B981', '#6366F1', '#F59E0B', '#EF4444'],
    },
  ],
};

const volunteerDistribution = {
  labels: ['Education', 'Environment', 'Health', 'Social'],
  datasets: [
    {
      label: 'Volunteers by Category',
      data: [35, 30, 20, 15],
      backgroundColor: ['#3B82F6', '#22C55E', '#EAB308', '#F97316'],
    },
  ],
};

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Admin Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Growth Line Chart */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">New Users Over Time</h2>
          <Line data={userGrowthData} />
        </div>

        {/* Engagement Bar Chart */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Engagement by Feature</h2>
          <Bar data={engagementData} />
        </div>

        {/* Volunteer Distribution */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Volunteer Distribution</h2>
          <Doughnut data={volunteerDistribution} />
        </div>
      </div>

      {/* Simulation Options */}
      <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded shadow space-y-4">
        <h2 className="text-2xl font-semibold">Simulation Tools</h2>
        <p className="text-sm text-gray-500">
          Use simulation to forecast growth or engagement scenarios.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Run Simulation
        </button>
      </div>
    </div>
  );
}
