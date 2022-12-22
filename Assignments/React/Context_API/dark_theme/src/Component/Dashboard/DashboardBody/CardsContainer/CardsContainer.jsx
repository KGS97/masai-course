import React from "react";
import ThemeContext from "../../../../Context/ThemeContext";
function CardsContainer(props) {
  let { theme } = React.useContext(ThemeContext);
  let { name, avatar, points, Location } = props.props;
  return (
    <div style={{ ...cardStyle(theme), margin: "10px" }}>
      <div style={infoStyle()}>
        <img src={avatar} alt="avatar" style={avatarStyle(theme)} />
        <div>
          <p style={nameStyle(theme)}>{name}</p>
          <p style={locationStyle(theme)}>{Location}</p>
        </div>
      </div>
      <p style={{ fontSize: "12px" }}>{points} points</p>
      <div style={progressStyle(theme)}>
        <div style={pointsStyle(points)}></div>
      </div>
    </div>
  );
}

export default CardsContainer;
function pointsStyle(points) {
  let total = 6000;
  let percentage = (points / 6000) * 100;
  let style = {
    height: "4px",
    backgroundColor:
      points === 6000
        ? "green"
        : points > 4000
        ? "#29CB97"
        : points > 2000
        ? "#4072EE"
        : "#B558F6",
    width: `${percentage}%`,
    borderRadius: "2px",
    marginRight: "auto",
  };
  return style;
}
function progressStyle(theme) {
  let style = {
    height: "4px",
    backgroundColor: theme === "Light" ? "#E5E9F2" : "#363C43",
    borderRadius: "2px",
    width: "80%",
    margin: "auto",
  };
  return style;
}

function nameStyle(theme) {
  let style = {
    color: theme === "Light" ? "#31394D" : "#FFFFFF",
    fontSize: "14px",
    lineHeight: "16px",
  };
  return style;
}
function locationStyle(theme) {
  let style = {
    color: "#748AA1",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "400",
  };
  return style;
}
function avatarStyle(theme) {
  let style = {
    height: "50px",
    width: "50px",
    borderRadius: "50px",
    padding: "20px",
  };
  return style;
}
function infoStyle() {
  let style = {
    display: "flex",
    alignItems: "center",
  };
  return style;
}
function cardStyle(theme) {
  return {
    padding: "20px",
    borderRadius: "10px",
    border: theme === "light" ? "1px solid white" : "1px solid lightgray",
  };
}
