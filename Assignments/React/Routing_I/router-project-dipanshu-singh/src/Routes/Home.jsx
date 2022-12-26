import React from "react";
import ClickableImage from "../Components/Home/ClickableImage";
import Banner from "../Components/Home/Banner";
import TitleOnImage from "../Components/Home/TitleOnImage";

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
      <ClickableImage
        path="/the-gift-card"
        imgsrc="/images/Home_Hiut Denim Co/Giftbook_3_Col-1_1944x.jpg"
        alt="Gift Card"
      />
      <TitleOnImage
        path="/the-gift-card"
        imgsrc="/images/Home_Hiut Denim Co/1BANNER_FACTORY_1944x.jpg"
        alt="Gift Card"
      />
    </div>
  );
}

export default Home;
