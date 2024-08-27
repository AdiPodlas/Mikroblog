import "./App.css";
import React, { useState } from "react";
import MainPage from "./MainPage";
import { BlogEntry } from "./BlogEntry";
import { NewEntryForm } from "./NewEntryForm";
import { useEntries } from "./useEntries";
import { PaginationControls } from "./PaginationControls";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";


function App() {
  return (
    <div>
      <div className="app-header">Podróże kulinarne</div>

      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> O nas </Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
