import React from 'react';
import './BlogEntry.css';
import { Avatar } from './Avatar';

export const BlogEntry = ({ title }) => {
    return (
        <div className="blog-entry">
            <h1>{title}</h1>
            <div className="blog-entry__content">
                <div className="blog-entry__avatar-container">
                    <Avatar name="Martyna" />
                </div>
                <div className="text-container">
                    <p className="text-content">
                        Sed non rerum voluptas. Voluptate expedita culpa laboriosam sit sed ipsam amet.
                        Ut dolor id eius dolores totam sunt voluptas. Ut in praesentium suscipit maiores.
                        Numquam consequuntur nostrum autem dolorum distinctio. Voluptates occaecati nisi
                        dicta facere iusto ut quia veritatis.
                    </p>
                    <div className="date">01-07-2024 </div> 
                </div>
            </div>
        </div>
    );
};