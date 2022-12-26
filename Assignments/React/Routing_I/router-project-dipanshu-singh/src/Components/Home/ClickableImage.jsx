import React from "react";
import { Link } from "react-router-dom";
function ClickableImage(props) {
  let { path, imgsrc, alt } = props;
  return (
    <div>
      <Link to={`${path}`}>
        <img
          src={`${process.env.PUBLIC_URL + imgsrc}`}
          alt={`${alt}`}
          style={{ width: "100%" }}
        />
      </Link>
    </div>
  );
}

export default ClickableImage;
