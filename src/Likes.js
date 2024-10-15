import React from 'react';
import './Likes.css';
import { AiFillLike } from "react-icons/ai";

export const Likes = ({ count }) => {
    return (
        <div className="likes-container">
            <span className="thumbs-up-icon"><AiFillLike /></span>
            <span className="likes-count">{count}</span>
        </div>
    );
};