import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BlogEntry} from './BlogEntry'
import { getEntries } from './EntryRepository';


function App() {
  return (
    <div>
      <div className="app-header">
        Podróże kulinarne
      </div>
      <div className="content">
        
        {
          getEntries().map(entry => <BlogEntry entry = {entry}/>)
        }
      </div>
    </div>
  );
}

export default App;
