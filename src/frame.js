import React from 'react';
import './App.css';

const content = ({ title }) => {
    return (
        <header className="content">
            <h1>{title}</h1>
        </header>
    );
};

export default content;