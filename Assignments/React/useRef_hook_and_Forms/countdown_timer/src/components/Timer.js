import { useRef, useState } from "react";
let Form = () => {
  let [secs, updateSecs] = useState(0);
  let intervalRef = useRef();
  let startTimer = () => {
    intervalRef.current = setInterval(() => {
      updateSecs((secs) => secs + 1);
    });
  };
  let stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  let resetTimer = () => {
    updateSecs(0);
    clearInterval(intervalRef.current);
  };
  return (
    <>
      <p>{secs}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default Form;
