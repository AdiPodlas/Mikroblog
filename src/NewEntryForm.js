import React, { useState } from 'react';
import './NewEntryForm.css';

export const NewEntryForm = ({ onAddEntry }) => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleAddEntry = () => {
        if (text.trim() !== '' & author.trim() !== '') {
            onAddEntry(text, author);
            setText(''); // Czyszczenie inputa po dodaniu wpisu
            setAuthor('');
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (text.trim() === '') {
            setIsFocused(false);
        }
    };

    const isFormValid = text.trim() !== '' && author.trim() !== '';

           return (
            <div className="new-entry-form">
                
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Co u Ciebie słychać?"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`new-entry-input ${isFocused || text.trim() !== '' ? 'focused' : ''}`}
                />
                <label className="new-entry-author-label">Autor: 
                <input
                    type="text"
                    value={author}
                    onChange={handleAuthorChange}
                    className="new-entry-author-input"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                </label>
                <button 
                onClick={handleAddEntry} 
                className="add-entry-button"
                disabled={!isFormValid}
                >
                    Dodaj wpis
                </button>
            </div>
        );
};