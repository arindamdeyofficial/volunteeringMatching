"use client";

import React from 'react';

const SponsorshipPage = () => {
    return (
        <div className="sponsorship-container">
            <h1>Become a Sponsor</h1>
            <p>Join us in making a difference! Here are some success stories from our sponsors:</p>
            <div className="success-stories">
                {/* Placeholder for success stories */}
                <div className="story">
                    <h2>Success Story 1</h2>
                    <p>Description of the success story...</p>
                </div>
                <div className="story">
                    <h2>Success Story 2</h2>
                    <p>Description of the success story...</p>
                </div>
                {/* Add more stories as needed */}
            </div>
            <h2>Sponsor an Event</h2>
            <form>
                <label htmlFor="event-select">Choose an event:</label>
                <select id="event-select">
                    <option value="">--Please choose an event--</option>
                    {/* Populate with actual events */}
                    <option value="event1">Event 1</option>
                    <option value="event2">Event 2</option>
                </select>
                <button type="button" onClick={() => alert('Interest shown!')}>Show Interest</button>
            </form>
        </div>
    );
};

export default SponsorshipPage;