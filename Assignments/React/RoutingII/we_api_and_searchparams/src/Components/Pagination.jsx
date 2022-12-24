import React from "react";

function Pagination(Total_Pages, updateParamsHandler, page) {
  const arr = new Array(Total_Pages).fill(0);

  return (
    <div className="Pagination">
      {arr.map((e, i) => {
        return (
          <button
            disabled={i + 1 === page * 1}
            key={i + 1}
            onClick={() => {
              updateParamsHandler({ page: i + 1 });
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
