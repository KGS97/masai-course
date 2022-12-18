import { useRef, useState, useEffect } from "react";
let Form = () => {
  useEffect(() => {
    return clearInterval(intervalRef);
  }, []);
  let [secs, updateSecs] = useState(prompt);
  let intervalRef = useRef(null);
  let startTimer = () => {
    console.log("started");
    intervalRef.current = setInterval(() => {
      if (secs > 0) {
        console.log("updating secs");
        updateSecs((secs) => secs - 1);
      } else clearInterval(intervalRef.current);
    }, 1000);
  };
  let stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  let resetTimer = () => {
    clearInterval(intervalRef.current);
    updateSecs(prompt);
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
