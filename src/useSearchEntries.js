
import { useState } from "react";
import { getEntries } from "./EntryRepository";

export const useSearchEntries = (searchQuery) => {
    const [entries] = useState(getEntries());
    return     entries.filter (entry => entry.text.toUpperCase().includes(searchQuery.toUpperCase())) /* toUpperCase w dwóch miejscach tak aby wyszukiwanie pomijało wielkość liter, w tym przypadku wszystko formatujemy do dużych liter i elo, można też dać do małych */
}