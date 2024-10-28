import React, { useState } from "react";
import { BlogEntry } from "./BlogEntry";
import { NewEntryForm } from "./NewEntryForm";
import { useEntries } from "./useEntries";
import { PaginationControls } from "./PaginationControls";
import PopularWordsPreview from "./PopularWordsPreview";

function MainPage() {
  const [pageNumber, setPageNumber] = useState(0);
  const { currentPageEntries, handleAddEntry, totalPages } = useEntries(pageNumber);

  return (
    <div className="main-page">
      <div className="main-content">
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

      {/* Dodajemy komponent PopularWordsPreview po prawej stronie */}
      <div className="sidebar">
        <PopularWordsPreview />
      </div>
    </div>
  );
}

export default MainPage;