import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BlogEntry} from './BlogEntry'


function App() {
  return (
    <div>
      <div className="app-header">
        Podróże kulinarne
      </div>
      <div className="content">
        
        <BlogEntry title={"lolek"}/>
      </div>
    </div>
  );
}

export default App;
