import React from "react";
import { useNavigate } from "react-router-dom";
import PopularWordsList from "./PopularWordsList";
import "./PopularWordsPreview.css";

function PopularWordsPreview() {
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate("/popular-words");
  };

  return (
    <div className="popular-words-preview">
      <h3>Popularne słowa</h3>
      <PopularWordsList count={5} /> {/* Wyświetlamy tylko 5 słów */}
      <button className="show-more-button" onClick={handleShowMoreClick}>
        Pokaż więcej
      </button>
    </div>
  );
}

export default PopularWordsPreview;
