import { useState, useRef, useEffect } from "react";
let Timer = () => {
  let [secs, SetSecs] = useState(0);
  let interval = useRef(null);
  let pRef = useRef(null);
  useEffect(() => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => {
      SetSecs((secs) => secs + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [secs]);

  let stopTimer = () => {
    clearInterval(interval.current);
  };
  return (
    <>
      <p ref={pRef}> {secs}</p>
      <button onClick={() => SetSecs(secs + 1)}>Start</button>
      <button onClick={() => stopTimer()}>Stop</button>
      <button>Show/Hide</button>
    </>
  );
};

export default Timer;
