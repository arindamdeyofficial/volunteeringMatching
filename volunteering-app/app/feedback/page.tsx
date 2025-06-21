import React, { useState } from 'react';

const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [event, setEvent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle feedback submission logic here
        console.log({ rating, comment, event });
    };

    return (
        <div className="feedback-container">
            <h1>Feedback</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="event">Event:</label>
                    <select
                        id="event"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select an event</option>
                        {/* Populate with event options */}
                    </select>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackPage;