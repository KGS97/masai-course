import { useRef, useState, useEffect } from "react";
let Timer = () => {
  let [secs, updateSecs] = useState(0);
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  let intervalRef = useRef(null);
  let inputRef = useRef(null);
  let StartTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      updateSecs((secs) => secs - 1);
    }, 1000);
  };
  let StopTimer = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          updateSecs(inputRef.current.value);
          StartTimer();
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          StopTimer();
        }}
      >
        stop
      </button>
      <button
        onClick={() => {
          updateSecs(0);
        }}
      >
        Reset
      </button>
      <p>{secs}</p>
    </>
  );
};

export default Timer;
