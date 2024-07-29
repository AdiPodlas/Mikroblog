import React, { useState } from 'react';
import './NewEntryForm.css';

export const NewEntryForm = ({ onAddEntry }) => {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddEntry = () => {
        if (text.trim() !== '') {
            onAddEntry(text);
            setText(''); // Czyszczenie inputa po dodaniu wpisu
        }
    };

    return (
        <div className="new-entry-form">
            <textarea
                value={text}
                onChange={handleInputChange}
                placeholder="Co u Ciebie słychać?"
                className="new-entry-input"
            />
            <button onClick={handleAddEntry} className="add-entry-button">
                Dodaj wpis
            </button>
        </div>
    );
};