"use client";

import React, { useState, useEffect } from 'react';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [hasNewNotifications, setHasNewNotifications] = useState(false);

    useEffect(() => {
        // Fetch notifications from an API or local storage
        const fetchNotifications = async () => {
            // Placeholder for fetching notifications
            const fetchedNotifications = await fetch('/api/notifications'); // Adjust the API endpoint as needed
            const data = await fetchedNotifications.json();
            setNotifications(data);
            setHasNewNotifications(data.length > 0);
        };

        fetchNotifications();
    }, []);

    const handleClearNotifications = () => {
        // Logic to clear notifications
        setNotifications([]);
        setHasNewNotifications(false);
    };

    return (
        <div className="notification-bell">
            <button onClick={handleClearNotifications}>
                🔔 {hasNewNotifications ? 'You have new notifications' : 'No new notifications'}
            </button>
            {hasNewNotifications && (
                <div className="notification-list">
                    {notifications.map((notification, index) => (
                        <div key={index} className="notification-item">
                            {notification.message}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;