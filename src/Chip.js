import React from "react";
import "./Chip.css"; 

function Chip({ label, color, onClick }) {
  return (
    <button
      className="chip"
      style={{ backgroundColor: color }} // Ustawiamy kolor dynamicznie
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Chip;

