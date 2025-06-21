"use client";

import React, { useEffect, useState } from 'react';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from an API or service
        const fetchNotifications = async () => {
            // Placeholder for fetching notifications
            const response = await fetch('/api/notifications'); // Adjust the API endpoint as needed
            const data = await response.json();
            setNotifications(data);
        };

        fetchNotifications();
    }, []);

    const deleteNotification = async (id) => {
        // Placeholder for deleting a notification
        await fetch(`/api/notifications/${id}`, { method: 'DELETE' });
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    const deleteAllNotifications = async () => {
        // Placeholder for deleting all notifications
        await fetch('/api/notifications', { method: 'DELETE' });
        setNotifications([]);
    };

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <button onClick={deleteAllNotifications}>Delete All Notifications</button>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>{notification.message}</p>
                        <button onClick={() => deleteNotification(notification.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationsPage;