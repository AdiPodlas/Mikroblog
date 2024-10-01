import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import SearchPage from "./SearchPage";
import EntryPage from "./EntryPage"; // Importuj nowy komponent
import React from "react";
import SearchInput from "./SearchInput";

function App() {
  return (
    <div>
      <div className="app-header">Podróże kulinarne</div>

      <BrowserRouter>
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">O nas</Link>
            </li>
            <li>
              <SearchInput/>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="entry/:id" element={<EntryPage />} /> {/* Nowa trasa z dynamicznym ID */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

