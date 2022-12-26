import React from "react";
import ClickableImage from "../Components/Home/ClickableImage";
import Banner from "../Components/Home/Banner";

function Home(props) {
  return (
    <div>
      <ClickableImage
        path="/yearbook-6"
        imgsrc="/images/Home_Hiut Denim Co/YB6_MockUp_Comb_Wide_1944x.jpg"
        alt="YB6"
      />
      <Banner
        name="Men"
        path="/mens"
        imgsrc="/images/Home_Hiut Denim Co/HIUT_WEBSITE-2_1944x.jpg"
        number="1"
      />
      <Banner
        name="Women"
        path="/womens"
        imgsrc="/images/Home_Hiut Denim Co/HIUT_WEBSITE_1944x.jpg"
        number="2"
      />
    </div>
  );
}

export default Home;
