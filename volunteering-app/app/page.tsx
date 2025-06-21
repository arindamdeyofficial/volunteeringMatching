'use client';

import React from 'react';
import NotificationBell from '../components/NotificationBell';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h1>Welcome to Our Volunteering Platform</h1>
        <p>Join us in making a difference!</p>
        <div className="actions">
          <button>Website Builder</button>
          <button>Toggle Theme</button>
          <NotificationBell />
          <button>Login</button>
          <button>Register</button>
        </div>
      </section>

      <section className="sponsors">
        <h2>Featured Sponsors</h2>
        {/* Carousel component for featured sponsors */}
        <Link href="/sponsorship">Become a Sponsor</Link>
      </section>

      <section className="subscriptions">
        <h2>Subscription Plans</h2>
        {/* List of subscription plans */}
      </section>

      <section className="exhibitions">
        <h2>Featured Exhibitions</h2>
        {/* List of featured exhibitions */}
      </section>

      <section className="forum">
        <h2>Join Our Forum</h2>
        <button>Visit Forum</button>
      </section>

      <section className="chatbot">
        <h2>Need Help?</h2>
        <button>Chat with Us</button>
      </section>
    </>
  );
};

export default HomePage;
