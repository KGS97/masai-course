import React, { useContext } from "react";
import ThemeContext from "../../../Context/ThemeContext";

function Dashboard_Head(props) {
  const { theme, ChangeTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px 10px ",
      }}
    >
      <h2 style={headinH2Style(theme)}>My Dashboard</h2>
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
    border: "0",
    boxShadow: "0px 1px 4px lightgray",
    fontWeight: "100",
  };
  return style;
}

function DarkButton() {
  let style = {
    fontWeight: "100",
    color: "white",
    backgroundColor: "#292E33",
    border: "0",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
  };
  return style;
}

function headinH2Style(theme) {
  let style = {
    color: theme === "Light" ? "Black" : "white",
    fontSize: "24px",
    fontWeight: "400",
  };
  return style;
}
