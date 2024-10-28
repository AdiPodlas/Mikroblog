import "./App.css";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import SearchPage from "./SearchPage";
import EntryPage from "./EntryPage"; 
import React from "react";
import SearchInput from "./SearchInput";
import ChatPage from "./ChatPage";
import { ChatButton } from "./ChatButton";
import PopularWordsPage from "./PopularWordsPage";

function App() {

  return (
    <div>
      <div className="app-header">
        <div className="header-content">Podróże kulinarne</div>
      </div>

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
            <Link className="nav-link" to="/popular-words">Popularne słowa</Link>
            </li>
            <li>
              <SearchInput />
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="entry/:id" element={<EntryPage />} /> 
            <Route path="chat" element={<ChatPage />} />
            <Route path="popular-words" element={<PopularWordsPage />} />
          </Routes>
        </div>
          
     <ChatButton></ChatButton>

      </BrowserRouter>

      

    </div>
  );
}

export default App;
