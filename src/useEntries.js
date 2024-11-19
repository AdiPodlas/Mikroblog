import { useEffect, useState } from "react";
import { getEntries } from "./EntryRepository";
import moment from "moment";
import { Await } from "react-router-dom";

export const useEntries = (pageNumber, sortBy) => {
  const [entries, setEntries] = useState([]);

  
   const  fetchEntries = async() => {
    const response = await fetch("http://localhost:8080/entries")
    const responseBody = await response.json()
    setEntries (responseBody)
   }
   
   useEffect(() => {
    fetchEntries()
   }, [])



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
    if (sortBy === "like-desc") {
      return b.likes - a.likes;
    } else if (sortBy === "like-asc") {
      return a.likes - b.likes;
    } else if (sortBy === "date-desc") {
      return moment(b.date, "DD-MM-YYYY") - moment(a.date, "DD-MM-YYYY");
    } else if (sortBy === "date-asc") {
      return moment(a.date, "DD-MM-YYYY") - moment(b.date, "DD-MM-YYYY");
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
