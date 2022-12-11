import { useState } from "react";
function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
