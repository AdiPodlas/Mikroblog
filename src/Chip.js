import React from "react";
import "./Chip.css"; // Dodajmy stylizację, która zostanie nadpisana dynamicznie

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

