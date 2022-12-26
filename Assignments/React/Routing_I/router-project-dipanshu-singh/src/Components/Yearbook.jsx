import React from "react";
import { Link } from "react-router-dom";

function Yearbook(props) {
  return (
    <Link to="yearbook-6">
      <img
        src={`${process.env.PUBLIC_URL}/images/Home_Hiut Denim Co/YB6_MockUp_Comb_Wide_1944x.jpg`}
        alt="nothing"
        style={{ width: "100%" }}
      />
    </Link>
  );
}

export default Yearbook;
