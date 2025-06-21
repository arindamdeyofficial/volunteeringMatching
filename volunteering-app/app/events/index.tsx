import React from 'react';
import { useEffect, useState } from 'react';

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from an API or a local source
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events'); // Replace with your API endpoint
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="events-container">
            <h1>Upcoming Events</h1>
            {events.length === 0 ? (
                <p>No events available at the moment.</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                            <p>Location: {event.location}</p>
                            <a href={`/events/${event.id}`}>View Details</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventsPage;