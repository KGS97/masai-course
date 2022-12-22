import React from "react";
import ThemeContext from "../../../Context/ThemeContext";
import CardsContext from "../../../Context/CardsContext";
import CardsContainer from "./CardsContainer/CardsContainer";
function DashboardContainer(props) {
  let { theme } = React.useContext(ThemeContext);
  let cards = React.useContext(CardsContext);
  console.log(cards);
  return (
    <div
      style={{
        ...DashboardContainerStyle(theme),
        maxWidth: "33%",
        margin: "auto",
      }}
    >
      {cards.map((elem) => (
        <CardsContainer props={elem} />
      ))}
    </div>
  );
}

export default DashboardContainer;

let DashboardContainerStyle = (theme) => {
  let Lightstyle = {
    background: "#FFFFFF",
    boxShadow: "0px 1px 4px #E5E9F2",
    borderRadius: "5px",
    padding: "50px",
    margin: "50px 50px",
    color: "black",
    backgroundColor: "white",
  };
  let Darkstyle = {
    background: "#FFFFFF",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    padding: "50px",
    margin: "50px 50px ",
    color: "white",
    backgroundColor: "#292E33",
  };
  return theme === "Light" ? Lightstyle : Darkstyle;
};
