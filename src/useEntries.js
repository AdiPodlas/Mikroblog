import { useState } from "react";
import { getEntries } from "./EntryRepository";
import moment from "moment";

export const useEntries = (pageNumber) => {
  const [entries, setEntries] = useState(getEntries());

  const entriesPerPage = 5;
  const totalPages = Math.ceil(entries.length / entriesPerPage);

  const handleAddEntry = (text, author) => {
    const newEntry = {
      id: entries.length + 1,
      author: author,
      text: text,
      date: moment ().format('DD-MM-YYYY'),
      likes: 0,
    };
    setEntries([newEntry, ...entries]);
  };

  return {
    currentPageEntries: entries.slice(pageNumber * entriesPerPage, pageNumber * entriesPerPage + entriesPerPage),
    handleAddEntry,
    totalPages
  };
};



/* pageNumber0: entries.slice(0*0, 0+5)
pageNumber1: entries.slice(1*5, (1*5)+5)
pageNumber2: entries.slice(2*5, 2*5+5)
pageNumberx: etries.slice(x*5, x*5+5)
*/