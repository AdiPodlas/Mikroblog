import React from "react";
import "./PaginationControls.css";

export const PaginationControls = ({ pageNumber, setPageNumber, totalPages }) => {
  const handlePrevPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`page-number-button ${i === pageNumber ? "active" : ""}`}
        >
          {i + 1}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-controls">
      <button onClick={handlePrevPage} disabled={pageNumber === 0}>
        Prev
      </button>
      <span className="page-info">
        Page {pageNumber + 1} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={pageNumber === totalPages - 1}>
        Next
      </button>
      <div className="page-numbers">
        {renderPageNumbers()}
      </div>
    </div>
  );
};
