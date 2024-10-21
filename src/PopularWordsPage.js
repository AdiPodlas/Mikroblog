import React from "react";
import Chip from "./Chip"; 
import "./PopularWordsPage.css"; 
import { usePopularWords } from "./usePopularWords";

function PopularWordsPage() {
  const popularWords = usePopularWords();
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"]; // Tablica kolorów

  const handleChipClick = (word) => {
    console.log(`Kliknięto: ${word}`); 
  };

  return (
    <div className="popular-words-page">
      <h2>Popularne słowa</h2>
      <div className="chip-container">
        {popularWords.map(({ word }, index) => (
          <Chip
            key={index}
            label={word}
            color={colors[index % colors.length]} // Przypisywanie kolorów cyklicznie
            onClick={() => handleChipClick(word)} // Użycie funkcji z odpowiednim argumentem
          />
        ))}
      </div>
    </div>
  );
}

export default PopularWordsPage;