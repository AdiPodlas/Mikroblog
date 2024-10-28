import React from "react";
import Chip from "./Chip"; 
import "./PopularWordsPage.css"; 
import { usePopularWords } from "./usePopularWords";
import {useNavigate} from "react-router-dom";

function PopularWordsPage() {
  const navigate = useNavigate();
  const popularWords = usePopularWords(20);
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"]; // Tablica kolorów
  

  const handleChipClick = (word) => {
    navigate(`/search?q=${word}`);
    };
    
  return (
    <div className="popular-words-page">
      <h2>Popularne słowa</h2>
      <div className="chip-container">
        {popularWords.map(({ word, count }, index) => (
          <Chip
            key={word}
            label={`${word} | `} 
            count={count}
            color={colors[index % colors.length]} // Przypisywanie kolorów cyklicznie
            onClick={() => handleChipClick(word)} // Użycie funkcji z odpowiednim argumentem
          />
        ))}
      </div>
    </div>
  );
}

export default PopularWordsPage;