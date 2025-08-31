
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center p-8 mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="size-10 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-50"
      >
        &#9664;
      </button>

      {pages.map((page) => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={`size-10 flex items-center justify-center rounded-full font-bold transition-colors cursor-pointer ${
            currentPage === page
              ? 'bg-amber-400 text-slate-900'
              : 'text-white hover:bg-slate-800'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="size-10 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-50"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Pagination;