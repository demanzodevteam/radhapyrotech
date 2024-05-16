"use client";
import { useEffect, useState } from "react";
import "./pagination.css";
const Pagination = ({ postMeta, className, currentPath }) => {
  const [currentPage, setCurrentPage] = useState(postMeta?.currentPage);
  const [totalPages, setTotalPages] = useState(postMeta?.totalPages);
  useEffect(() => {
    setTotalPages(postMeta?.totalPages);
    setCurrentPage(postMeta?.currentPage);
  }, [postMeta]);

  //   console.log(`total page : ${totalPages} \n current page : ${currentPage}`);

  const handleClick = (page) => {
    setCurrentPage(page);
    const url = page === 1 ? `${currentPath}` : `${currentPath}?page=${page}`;
    window.location.href = url;
  };

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 9);

  if (endPage - startPage < 9) {
    endPage = Math.min(totalPages, currentPage + 1);
    startPage = Math.max(1, endPage - 9);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={className}>
      <div>
        <button
          className={`font-semibold ${
            currentPage === 1 ? "disabled-button" : "default-button"
          }`}
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        >
          Previous
        </button>
        {pages.map((page) => (
          <button
            className={
              page === currentPage
                ? `active-page pagination-button font-semibold`
                : `inactive-page pagination-button font-semibold`
            }
            key={page}
            disabled={currentPage === page}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`font-semibold ${
            currentPage === totalPages ? "disabled-button" : "default-button"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
