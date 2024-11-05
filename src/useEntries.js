import { useState } from "react";
import { getEntries } from "./EntryRepository";
import moment from "moment";

export const useEntries = (pageNumber, sortBy) => {
  const [entries, setEntries] = useState(getEntries());

  const entriesPerPage = 5;
  const totalPages = Math.ceil(entries.length / entriesPerPage);

  const handleAddEntry = (text, author) => {
    const newEntry = {
      id: entries.length + 1,
      author: author,
      text: text,
      date: moment().format("DD-MM-YYYY"),
      likes: 0,
    };
    setEntries([newEntry, ...entries]);
  };
  const compareEntries = (a, b) => {
    if (sortBy === "like") {
      return b.likes - a.likes; // Sortowanie malejąco po liczbie polubień
    } else if (sortBy === "date") {
      return moment(b.date, "DD-MM-YYYY") - moment(a.date, "DD-MM-YYYY"); // Sortowanie malejąco po dacie
    }
    return 0;
  };

  return {
    currentPageEntries: [...entries]
      .sort(compareEntries)
      .slice(
        pageNumber * entriesPerPage,
        pageNumber * entriesPerPage + entriesPerPage
      ),
    handleAddEntry,
    totalPages,
  };
};

/* pageNumber0: entries.slice(0*0, 0+5)
pageNumber1: entries.slice(1*5, (1*5)+5)
pageNumber2: entries.slice(2*5, 2*5+5)
pageNumberx: etries.slice(x*5, x*5+5)
*/
