import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(false); // Stan aktywności przycisku

  // Sprawdzanie czy wprowadzono tekst, aby aktywować przycisk
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        placeholder="Wyszukaj..."
      />
      <button 
        type="submit" 
        className={`search-button ${isButtonActive ? 'active' : ''}`} 
        disabled={!isButtonActive}
      >
        Szukaj
      </button>
    </form>
  );
}

export default SearchInput;
