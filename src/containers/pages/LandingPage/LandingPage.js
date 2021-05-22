import React from "react";
import Carousel from "../../../components/Carousel/Carousel";
import ProductSlideshow from "../../../components/ProductSlideshow/ProductSlideshow";
import { PrimaryHr, SecondaryHr } from "../../../UI/hr/blackHrs";

const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <SecondaryHr />
      <ProductSlideshow />
      <PrimaryHr />
    </div>
  );
};

export default LandingPage;
