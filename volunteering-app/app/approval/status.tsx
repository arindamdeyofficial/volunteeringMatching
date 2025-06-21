import React from 'react';

const ApprovalStatus = () => {
    // Sample data for approval requests
    const approvalRequests = [
        { id: 1, date: '2023-09-01', status: 'Approved' },
        { id: 2, date: '2023-09-15', status: 'Pending' },
        { id: 3, date: '2023-09-20', status: 'Rejected' },
    ];

    return (
        <div className="approval-status">
            <h1>Approval Status</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {approvalRequests.map(request => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.date}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovalStatus;