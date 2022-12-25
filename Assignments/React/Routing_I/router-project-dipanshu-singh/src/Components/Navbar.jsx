import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div id="announcement">
        <Link to="/">Made in Wales. Free Repairs For Life.</Link>
      </div>
      <div id="navbar"></div>
    </>
  );
}

export default Navbar;
