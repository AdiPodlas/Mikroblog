import React from 'react';
import './BlogEntry.css';
import { Avatar } from './Avatar';
import { Likes } from './Likes';

export const BlogEntry = ({ title, entry }) => {
    return (
        <div className="blog-entry">
            <h1>{title}</h1>
            <div className="blog-entry__content">
                <div className="blog-entry__avatar-container">
                    <Avatar name={entry.author} />
                    <Likes count={entry.likes} />
                </div>
                <div className="text-container">
                    <p className="text-content">
                        {entry.text}
                    </p>
                    <div className="date"> {entry.date} </div>
                    
                </div>
            </div>
        </div>
    );
};