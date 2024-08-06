import { useState } from "react";
import { getEntries } from "./EntryRepository";
export const useEntries = (pagenumber) => {
  const [entries, setEntries] = useState(getEntries());

  const handleAddEntry = (text, author) => {
    const newEntry = {
      id: entries.length + 1,
      author: author,
      text: text,
      date: new Date().toLocaleDateString(),
      likes: 0,
    };
    setEntries([newEntry, ...entries]);
  };
  return {
    currentPageEntries: entries.slice(pagenumber * 5, pagenumber * 5 + 5),
    handleAddEntry,
  };
};


/* pageNumber0: entries.slice(0*0, 0+5)
pageNumber1: entries.slice(1*5, (1*5)+5)
pageNumber2: entries.slice(2*5, 2*5+5)
pageNumberx: etries.slice(x*5, x*5+5)
*/