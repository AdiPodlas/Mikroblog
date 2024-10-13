import React from "react";
import Chip from "./Chip"; // Import komponentu Chip
import "./PopularWordsPage.css"; // Stylizacja dla tej strony

function PopularWordsPage() {
  const popularWords = ["Pizza", "Sushi", "Pasta", "Burger", "Tacos"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"]; // Tablica kolorów

  const handleChipClick = (word) => {
    console.log(`Kliknięto: ${word}`); // Możesz dodać logikę nawigacji lub wyszukiwania
  };

  return (
    <div className="popular-words-page">
      <h2>Popularne słowa</h2>
      <div className="chip-container">
        {popularWords.map((word, index) => (
          <Chip
            key={index}
            label={word}
            color={colors[index % colors.length]} // Przypisywanie kolorów cyklicznie
            onClick={handleChipClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularWordsPage;
