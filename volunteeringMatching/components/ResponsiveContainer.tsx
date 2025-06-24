"use client";

import React from 'react';

const ResponsiveContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="responsive-container">
            {children}
            <style jsx>{`
                .responsive-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                    box-sizing: border-box;
                }

                @media (max-width: 768px) {
                    .responsive-container {
                        padding: 0 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ResponsiveContainer;