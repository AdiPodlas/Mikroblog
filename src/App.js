import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogEntry } from './BlogEntry';
import { getEntries } from './EntryRepository';
import { NewEntryForm } from './NewEntryForm';

function App() {
    const [entries, setEntries] = useState(getEntries());

    const handleAddEntry = (text) => {
        const newEntry = {
            id: entries.length + 1,
            author: 'Anonim',
            text: text,
            date: new Date().toLocaleDateString(),
            likes: 0
        };
        setEntries([newEntry, ...entries]);
    };

    return (
        <div>
            <div className="app-header">
                Podróże kulinarne
            </div>
            <div className="content">
                <NewEntryForm onAddEntry={handleAddEntry} />
                {          
                    entries.map(entry => (
                        <BlogEntry 
                            key={entry.id}
                            title={entry.title}
                            entry={entry}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;