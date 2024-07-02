import React from 'react';
import './BlogEntry.css';


export const BlogEntry = ({ title }) => {
    return (
        <div className="blog-entry">
            <h1>{title}</h1>
            <div className="blog-entry__content">
                <div className="image-container">
                   
                    <div className='avatar'>
                        A
                    </div>
                    <p className="image-caption">Adrian</p>
                </div>
                <div className="text-container">
                    <p className="text-content">
                        Sed non rerum voluptas. Voluptate expedita culpa laboriosam sit sed ipsam amet.
                        Ut dolor id eius dolores totam sunt voluptas. Ut in praesentium suscipit maiores.
                        Numquam consequuntur nostrum autem dolorum distinctio. Voluptates occaecati nisi
                        dicta facere iusto ut quia veritatis.
                    </p>
                    <p className="date">01-07-2024</p>
                </div>
            </div>
        </div>
    );
};

