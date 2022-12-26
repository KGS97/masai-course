import React from "react";

function Search(props) {
  let { updater } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onKeyDown={(event) => {
          if (event.keyCode == 13) {
            updater(event.target.value);
          }
        }}
      />
    </>
  );
}

export default Search;
