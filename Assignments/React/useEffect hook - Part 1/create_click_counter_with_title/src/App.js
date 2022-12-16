import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ClickCounter from "./components/ClickCounter/ClickCounter";
function App() {
  let [ClickCount, setClickCount] = useState(0);
  useEffect(() => {
    document.querySelector("title").innerText =
      "Clicked " + ClickCount + " times";
  }, [ClickCount]);

  let increaseClickCount = () => {
    setClickCount(++ClickCount);
  };

  return (
    <div className="App">
      <p>Hello World</p>
      <ClickCounter func={increaseClickCount} />
    </div>
  );
}

export default App;
