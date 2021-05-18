import React, { useState } from "react";
import "./ProductSlideshow.scss";
import Card from "../Card/Card";
import cos1 from "../../media/images/cos1.jpg";
import cos2 from "../../media/images/cos2.jpg";
import cos3 from "../../media/images/cos3.jpg";

const ProductSlideshow = () => {
  const [popularProducts, setPopularProducts] = useState({
    productImage: "https://picsum.photos/200",
  });

  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <h1 className="text-center">Most Popular Products</h1>
        <div
          className="carousel js-flickity"
          data-flickity-options='{ "wrapAround": true, "autoPlay": false, "freeScroll": true }'
        >
          <div className="carousel-cell">
            <Card productImage={cos1} />
          </div>
          <div className="carousel-cell">
            <Card productImage={cos2} />
          </div>
          <div className="carousel-cell">
            <Card productImage={cos3} />
          </div>
          <div className="carousel-cell">
            <Card productImage={cos1} />
          </div>
          <div className="carousel-cell">
            <Card productImage={cos2} />
          </div>
          <div className="carousel-cell">
            <Card productImage={cos3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlideshow;
