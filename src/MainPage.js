import React, { useState } from "react";
import { BlogEntry } from "./BlogEntry";
import { NewEntryForm } from "./NewEntryForm";
import { useEntries } from "./useEntries";
import { PaginationControls } from "./PaginationControls";
import PopularWordsPreview from "./PopularWordsPreview";


function MainPage() {
  const [pageNumber, setPageNumber] = useState(0);
  const [sortBy, setSortBy] = useState("default"); // Domyślnie sortowanie po liczbie polubień
  const { currentPageEntries, handleAddEntry, totalPages } = useEntries(pageNumber, sortBy);

  // Funkcja zmieniająca kryterium sortowania
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };


  return (
    <div className="main-page">
      <div className="main-content">
        <NewEntryForm onAddEntry={handleAddEntry} />

        {/* Dropdown do wyboru sortowania */}
        <div className="sort-dropdown">
          <label htmlFor="sort-by">Sortuj po: </label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="default">Domyślnie</option>
            <option value="like">Polubienia</option>
            <option value="date">Data</option>
          </select>
        </div>

        {/* Lista posortowanych wpisów */}
        {currentPageEntries.map((entry) => (
          <BlogEntry key={entry.id} title={entry.title} entry={entry} />
        ))}

        <PaginationControls
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={totalPages}
        />
      </div>

      {/* Komponent PopularWordsPreview po prawej stronie */}
      <div className="sidebar">
        <PopularWordsPreview />
      </div>
    </div>
  );
}

export default MainPage;