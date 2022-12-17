import { useState, useRef, useEffect } from "react";
let Timer = () => {
  let [secs, SetSecs] = useState(0);
  let interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      SetSecs((secs) => secs + 1);
    }, 1000);
  }, []);
  let startTimer = () => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => {
      SetSecs((secs) => {
        return secs + 1;
      });
    }, 1000);
  };
  let stopTimer = () => {
    clearInterval(interval.current);
  };
  return (
    <>
      <p>{secs}</p>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => stopTimer()}>Stop</button>
    </>
  );
};

export default Timer;
