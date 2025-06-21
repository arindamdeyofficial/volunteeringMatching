import React from 'react';

const UserManagement = () => {
    // Sample user data
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Volunteer', status: 'Approved' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Pending' },
        // Add more users as needed
    ];

    const handleApproval = (userId) => {
        // Logic to approve user
        console.log(`User with ID ${userId} approved.`);
    };

    const handleRejection = (userId) => {
        // Logic to reject user
        console.log(`User with ID ${userId} rejected.`);
    };

    return (
        <div className="user-management">
            <h1>User Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                {user.status === 'Pending' ? (
                                    <>
                                        <button onClick={() => handleApproval(user.id)}>Approve</button>
                                        <button onClick={() => handleRejection(user.id)}>Reject</button>
                                    </>
                                ) : (
                                    <span>Approved</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;