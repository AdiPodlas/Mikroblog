import React from 'react';
import './Likes.css';

export const Likes = ({ count }) => {
    return (
        <div className="likes-container">
            <span className="thumbs-up-icon">👍</span>
            <span className="likes-count">{count}</span>
        </div>
    );
};