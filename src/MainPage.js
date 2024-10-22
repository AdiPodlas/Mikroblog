import React, { useState } from "react";
import { BlogEntry } from "./BlogEntry";
import { NewEntryForm } from "./NewEntryForm";
import { useEntries } from "./useEntries";
import { PaginationControls } from "./PaginationControls";

function MainPage() {
  const [pageNumber, setPageNumber] = useState(0);
  const { currentPageEntries, handleAddEntry, totalPages } = useEntries(pageNumber);
  // const popularWords = usePopularWords(5);
  
  /* <div className="chip-container">
  {popularWords.map(({ word, count }, index) => (
    <Chip
      key={word}
      label={word}
      count={count}
      color={colors[index % colors.length]} // Przypisywanie kolorów cyklicznie
      onClick={() => handleChipClick(word)} // Użycie funkcji z odpowiednim argumentem
    />  

     const handleChipClick = (word) => {
    navigate(`/search?q=${word}`);
    };
    */
 


  return (
    <div>
    
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