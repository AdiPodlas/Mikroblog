import React from 'react';
import './App.css';

const frame = ({ title }) => {
    return (
        <header className="frame">
            <h1>{title}</h1>
        </header>
    );
};

export default frame;