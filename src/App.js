import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import frame from './frame';


function App() {
  return (
    <div>

<header className="App-header">
        
        <a
          
        >
         Podróże kulinarne bla bla bla
        </a>
      </header>

        <frame title="Mój Tytuł" />
        <main>
            <p>Treść strony</p>
        </main>
    </div>
);
};

export default App;
