import React from "react";
import { Link } from "react-router-dom";
function TitleOnImage(props) {
  let { path, imgsrc, alt } = props;

  let url = "url('" + imgsrc + "')";
  return (
    <div style={{ backgroundImage: `${url}`, width: "100%", height: "auto" }}>
      <Link to={`${path}`}>
        <p>Hello</p>
      </Link>
    </div>
  );
}

export default TitleOnImage;
