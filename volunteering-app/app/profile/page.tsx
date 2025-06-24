'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    rank: 'Gold',
    earthPoints: 320,
    journeyCompletion: 85,
    email: 'john.doe@example.com',
    phone: '+91-9876543210',
    location: 'Bangalore, India',
    recentActivities: [
      'Enrolled in Tree Plantation',
      'Completed Journey Milestone 2',
      'Earned 50 points',
    ],
    badges: ['Eco Hero', 'Community Builder'],
    enrolledOpportunities: ['Tree Plantation Drive', 'Beach Cleanup'],
    leaderboardRank: 7,
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>

      {/* Section 1: User Details */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded shadow-md grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Basic Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Journey Completion:</strong> {user.journeyCompletion}%</p>
          <p><strong>Earth Points:</strong> {user.earthPoints}</p>
          <p><strong>Rank:</strong> {user.rank}</p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/avatar-placeholder.png"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border"
          />
        </div>
      </section>

      {/* Section 2: Badges & Recent Activities */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-4">
        <h2 className="text-lg font-semibold">Achievements</h2>
        <div className="space-y-2">
          <h3 className="font-semibold">Badges</h3>
          <ul className="list-disc ml-5">
            {user.badges.map((badge, idx) => (
              <li key={idx}>{badge}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Recent Activities</h3>
          <ul className="list-disc ml-5">
            {user.recentActivities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Enrolled Opportunities</h3>
          <ul className="list-disc ml-5">
            {user.enrolledOpportunities.map((event, idx) => (
              <li key={idx}>{event}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Leaderboard Rank */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold">Leaderboard</h2>
        <p className="mt-2">Your current rank is <strong>#{user.leaderboardRank}</strong>.</p>
      </section>
    </div>
  );
}
