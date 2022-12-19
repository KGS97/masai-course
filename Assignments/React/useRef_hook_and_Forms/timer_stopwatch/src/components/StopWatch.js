import { useEffect, useState, useRef } from "react";
export default function StopWatch() {
  let [secs, updateSecs] = useState(0);
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  let intervalRef = useRef(null);
  let StartWatch = () => {
    console.log("started watch");
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      console.log("running stopwatch");
      updateSecs((secs) => secs + 1);
    }, 1000);
  };
  let StopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  return (
    <>
      <div
        style={{
          height: "100px",
          width: "100px",
          textAlign: "center",
          margin: "auto",
        }}
        onClick={() => {
          intervalRef.current ? StopWatch() : StartWatch();
        }}
      >
        <p
          style={{
            margin: "auto",
            padding: "5px",
            height: "100%",
            width: "100%",
            border: "1px solid black",
            borderRadius: "100px",
          }}
        >
          {secs}
        </p>
      </div>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
          updateSecs(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
