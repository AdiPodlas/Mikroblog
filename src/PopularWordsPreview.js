import React from "react";
import { usePopularWords } from "./usePopularWords";
import Chip from "./Chip";
import { useNavigate } from "react-router-dom";
import "./PopularWordsPreview.css"

function PopularWordsPreview() {
  const navigate = useNavigate();
  const popularWords = usePopularWords(5); // Pobieramy tylko 5 najpopularniejszych słów
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"]; // Kolory dla chipów

  const handleChipClick = (word) => {
    navigate(`/search?q=${word}`);
  };

  const handleShowMoreClick = () => {
    navigate("/popular-words"); // Przejście do strony popularnych słów
  };

  return (
    <div className="popular-words-preview">
      <h3>Popularne słowa</h3>
      <div className="chip-container">
        {popularWords.map(({ word, count }, index) => (
          <Chip
            key={word}
            label={word}
            count={count}
            color={colors[index % colors.length]}
            onClick={() => handleChipClick(word)}
          />
        ))}


      </div>
      <button className="show-more-button" onClick={handleShowMoreClick}>Pokaż więcej</button>
    </div>
  );
}

export default PopularWordsPreview;
