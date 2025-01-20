
import { useState, useEffect } from "react";
import { getEntries } from "./EntryRepository";


export const useSearchEntries = (searchQuery) => {
    const [entries, setEntries] = useState([]);
    
    const  fetchEntries = async() => {
        const response = await fetch("http://localhost:8080/search?q=" + searchQuery)
        const responseBody = await response.json()
        setEntries (responseBody)
       }

       useEffect(() => {
        fetchEntries()
       }, [searchQuery])



    return     entries

    //.filter (entry => entry.text.toUpperCase().includes(searchQuery.toUpperCase())) /* toUpperCase w dwóch miejscach tak aby wyszukiwanie pomijało wielkość liter, w tym przypadku wszystko formatujemy do dużych liter i elo, można też dać do małych */
}
