import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogEntry } from "./BlogEntry";
import { NewEntryForm } from "./NewEntryForm";
import { useEntries } from "./useEntries";
import { PaginationControls } from "./PaginationControls";

function MainPage() {
  const [pageNumber, setPageNumber] = useState(0);
  const { currentPageEntries, handleAddEntry, totalPages } = useEntries(pageNumber);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Wyszukaj..." 
        />
        <button type="submit">Szukaj</button>
      </form>

      <NewEntryForm onAddEntry={handleAddEntry} />
      {currentPageEntries.map((entry) => (
        <BlogEntry key={entry.id} title={entry.title} entry={entry} />
      ))}
      <PaginationControls 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
        totalPages={totalPages} 
      />
    </div>
  );
}

export default MainPage;