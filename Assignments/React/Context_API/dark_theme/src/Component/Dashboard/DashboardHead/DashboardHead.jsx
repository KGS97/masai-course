import React, { useContext } from "react";
import ThemeContext from "../../../Context/ThemeContext";

function Dashboard_Head(props) {
  const { theme, ChangeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>My Dashboard</h2>
      {theme === "Light" ? (
        <button
          style={LightButton()}
          onClick={() => {
            ChangeTheme("Dark");
          }}
        >
          Dark Mode
        </button>
      ) : (
        <button
          style={DarkButton()}
          onClick={() => {
            ChangeTheme("Light");
          }}
        >
          Light Mode
        </button>
      )}
    </div>
  );
}

export default Dashboard_Head;
function LightButton() {
  let style = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid lightgray",
  };
  return style;
}

function DarkButton() {
  let style = {
    color: "white",
    backgroundColor: "darkgray",
    border: "1px solid white",
  };
  return style;
}
