import "./Pagination.css";
import { useEffect, useState } from "react";

const Pagination = ({ page, setPage, totalCount, limit }) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalCount / limit));

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / limit));
  }, [totalCount, limit]);

  const handleNextPageClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPageClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <main className="pagination-container">
      <div>
        <button onClick={handlePreviousPageClick} disabled={page === 1}>
          Previous Page
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPageClick} disabled={page >= totalPages}>
          Next Page
        </button>
      </div>
    </main>
  );
};

export default Pagination;
