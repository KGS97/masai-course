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
        <p style={{ margin: "auto" }}>{secs}</p>
      </div>
      <button onClick={() => updateSecs(0)}>Reset</button>
    </>
  );
}
