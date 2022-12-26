import styles from "./BannerStyles.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  console.log(styles);
  let { name, imgsrc, number, path } = props;
  if (number % 2 === 0) {
    return (
      <div className={styles.BannerContainer}>
        <div className={styles.BannerTitle}>
          <Link to={`${path}`}>
            <p className="Banner-Title">{name}</p>
          </Link>
        </div>
        <div style={BannerImageContainerStyle()}>
          <Link to={`${path}`}>
            <img
              style={BannerImageStyle()}
              src={`${process.env.PUBLIC_URL + imgsrc}`}
              alt={name}
            />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.BannerContainer}>
        <div style={BannerImageContainerStyle()}>
          <Link to={`${path}`}>
            <img
              style={BannerImageStyle()}
              src={`${process.env.PUBLIC_URL + imgsrc}`}
              alt={name}
            />
          </Link>
        </div>
        <div className={styles.BannerTitle}>
          <Link to={`${path}`}>
            <p className="Banner-Title">{name}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Banner;

function BannerImageContainerStyle() {
  let style = {
    width: "50%",
    height: "100%",
  };
  return style;
}

function BannerImageStyle() {
  let style = {
    width: "100%",
  };
  return style;
}

function BannerContainerStyle() {
  let style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  };
  return style;
}
function BannerTitleContainer() {
  let style = {
    width: "50%",
    fontFamily: '"Nanum Myeongjo", serif',
  };
  return style;
}
