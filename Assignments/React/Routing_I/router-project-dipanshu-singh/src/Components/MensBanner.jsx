import React from "react";

function MensBanner(props) {
  return (
    <div className="Banner-Container">
      <div className="Banner-Title">
        <p>Men</p>
      </div>
      <div className="Banner-Image">
        <img
          src={`${process.env.PUBLIC_URL}/images/Home_Hiut Denim Co/HIUT_WEBSITE-2_1944x.jpg`}
        />
      </div>
    </div>
  );
}

export default MensBanner;
