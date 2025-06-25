'use client';

import React from 'react';
import NotificationBell from '../components/NotificationBell';
import Link from 'next/link';
import FeaturedSponsors from '@/components/Sponsors/FeaturedSponsors';
import SubscriptionPage from './subscription/page';
import FeaturedExhibitions from '@/components/Exhibition/FeaturedExhibitions';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h1>Welcome to Our Volunteering Platform</h1>
        <p>Join us in making a difference!</p>
        <div className="actions">
          <button>Website Builder</button>
        </div>
      </section>
      <section className="feedback">
        <Link href="/feedback" className="feedback">Share Feedback</Link>
      </section>
      <section className="sponsors">
          <FeaturedSponsors />
      </section>

      <section className="subscriptions">
        <SubscriptionPage/>
      </section>

      <section className="exhibitions">
        <FeaturedExhibitions />
      </section>

      <section className="forum">
        <Link href="/forum" className="forum-link">
          <h2>Visit Forum</h2>
          <p>Connect with other volunteers and share your experiences.</p>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
