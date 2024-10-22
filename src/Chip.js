import React from "react";
import "./Chip.css"; 

function Chip({ label, color, onClick, count }) {
  return (
    <button
      className="chip"
      style={{ backgroundColor: color }} // Ustawiamy kolor dynamicznie
      onClick={() => onClick(label)}
    >
      {label} {count}
    </button>
  );
}

export default Chip;

