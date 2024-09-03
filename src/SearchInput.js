import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Wyszukaj..."
      />
      <button type="submit">Szukaj</button>
    </form>
  );
}

export default SearchInput;
