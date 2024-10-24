import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchEntries } from "./useSearchEntries";
import { BlogEntry } from "./BlogEntry";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const searchEntries = useSearchEntries (query);

  return (
    <div>
      <h1>Wyniki wyszukiwania:</h1>
      <div>{searchEntries.map((entry) => (
        <BlogEntry key={entry.id} title={entry.title} entry={entry} />
      ))}</div>
    </div>
  );
}

export default SearchPage;
