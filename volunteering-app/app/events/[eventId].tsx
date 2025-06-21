import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EventDetail = () => {
    const router = useRouter();
    const { eventId } = router.query;
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (eventId) {
            // Fetch event details from an API or database
            const fetchEventData = async () => {
                try {
                    const response = await fetch(`/api/events/${eventId}`);
                    const data = await response.json();
                    setEventData(data);
                } catch (error) {
                    console.error('Error fetching event data:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchEventData();
        }
    }, [eventId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!eventData) {
        return <div>Event not found.</div>;
    }

    return (
        <div>
            <h1>{eventData.title}</h1>
            <p>{eventData.description}</p>
            <p>Owner: {eventData.owner}</p>
            <p>Status: {eventData.enrollmentStatus}</p>
            {/* Additional functionalities can be added here */}
        </div>
    );
};

export default EventDetail;