import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";

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
