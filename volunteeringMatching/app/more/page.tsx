import React from 'react';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const MorePage = () => {
    return (
        <ResponsiveContainer>
            <h1>More Features</h1>
            <p>This section includes additional features and pages that are not categorized elsewhere.</p>
            <ul>
                <li>Feature 1: Description of feature 1</li>
                <li>Feature 2: Description of feature 2</li>
                <li>Feature 3: Description of feature 3</li>
                {/* Add more features as needed */}
            </ul>
        </ResponsiveContainer>
    );
};

export default MorePage;