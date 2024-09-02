import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1>Wyniki wyszukiwania:</h1>
      <p>{query}</p>
    </div>
  );
}

export default SearchPage;
