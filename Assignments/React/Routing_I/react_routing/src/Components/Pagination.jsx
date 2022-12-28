import React from "react";

function Pagination({ totalPages, handler, page } = {}) {
  console.log(totalPages, handler);
  const arr = Array(totalPages - 1).fill("a");

  return (
    <>
      {arr.map((elem, index) => {
        console.log(page * 1 === index + 1);
        return (
          <button
            key={index + 1}
            disabled={page * 1 === index + 1}
            onClick={() => handler(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
    </>
  );
}

export default Pagination;
