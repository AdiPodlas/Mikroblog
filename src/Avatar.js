import React from 'react';
import './Avatar.css';

export const Avatar = ({ name }) => {
    const initial = name.charAt(0).toUpperCase();

    return (
        <div className="avatar-container">
            <div className="avatar">
                {initial}
            </div>
            <span className="avatar-caption">{name}</span>
        </div>
    );
};