import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogEntry } from './BlogEntry';
import { getEntries } from './EntryRepository';

function App() {
  return (
    <div>
      <div className="app-header">
        Podróże kulinarne
      </div>
      <div className="content">

<div className='new-entry-form'>

  <textarea/>

</div>

        {          
          getEntries().map(entry => (
            <BlogEntry 
              key={entry.id}  // Dodaj klucz, aby uniknąć ostrzeżeń React
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