import React from 'react';

const Pagination = ({ page = 1, handlePrevPage, handleNextPage }) => {
  return (
    <div className="paginationContainer">
      <button className="prevPageButton" onClick={handlePrevPage} disabled={page === 1}>
        prevPage
      </button>
      <p>current page: {page}</p>
      <button className="nextPageButton" onClick={handleNextPage}>
        nextPage
      </button>
    </div>
  );
};

export default Pagination;
