import "./App.css";
import React, { useState } from "react";
import { BlogEntry } from "./BlogEntry";
import { NewEntryForm } from "./NewEntryForm";
import { useEntries } from "./useEntries";
import { PaginationControls } from "./PaginationControls";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const { currentPageEntries, handleAddEntry, totalPages } = useEntries(pageNumber);

  return (
    <div>
      <div className="app-header">Podróże kulinarne</div>
      <div className="content">
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
    </div>
  );
}

export default App;

