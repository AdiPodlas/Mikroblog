import React from "react";
import Chip from "./Chip"; 
import { usePopularWords } from "./usePopularWords";
import { useNavigate } from "react-router-dom";

function PopularWordsList({ count }) {
  const navigate = useNavigate();
  const popularWords = usePopularWords(count); // Pobieramy liczbę słów na podstawie parametru `count`
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"]; // Kolory dla chipów

  const handleChipClick = (word) => {
    navigate(`/search?q=${word}`);
  };

  return (
    <div className="chip-container">
      {popularWords.map(({ word, count }, index) => (
        <Chip
          key={word}
          label={word}
          count={count}
          color={colors[index % colors.length]} // Przypisanie koloru cyklicznie
          onClick={() => handleChipClick(word)}
        />
      ))}
    </div>
  );
}

export default PopularWordsList;
