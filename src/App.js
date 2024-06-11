import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BlogEntry} from './BlogEntry'


function App() {
  return (
    <div>
    <div className="app-header">
      Podróże kulinarne
          {/* <br/> string od nowej linijki */}
      
    </div>
    <div className="content">
      Treść tutaj
      <BlogEntry>

      </BlogEntry>
    </div>
  </div>
);
};

export default App;
