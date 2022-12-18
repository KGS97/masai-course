import { useRef, useState } from "react";
let Form = () => {
  let inputRef = useRef(null);
  let onClickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter Name" />
      <button onClick={onClickHandler}>Focus on Input</button>
    </>
  );
};

export default Form;
