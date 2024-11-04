import React from "react";
import PopularWordsList from "./PopularWordsList";
import "./PopularWordsPage.css";

function PopularWordsPage() {
  return (
    <div className="popular-words-page">
      <h2>Popularne słowa</h2>
      <PopularWordsList count={20} /> {/* Wyświetlamy 20 słów */}
    </div>
  );
}

export default PopularWordsPage;