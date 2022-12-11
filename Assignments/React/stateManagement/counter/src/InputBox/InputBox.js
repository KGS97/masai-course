import { useState } from "react";
let InputBox = () => {
  function updateP() {
    updateText(newV);
  }

  let newV = "";
  let [text, updateText] = useState("Nada");
  return (
    <div>
      <input
        placeholder="Enter text"
        onChange={(event) => {
          newV = event.target.value;
          if (newV === "") updateText("Nada");
        }}
      />
      <button onClick={updateP}>Submit</button>
      <p>{text}</p>
    </div>
  );
};

export default InputBox;
