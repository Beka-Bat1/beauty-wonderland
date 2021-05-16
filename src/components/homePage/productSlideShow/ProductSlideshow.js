import React, { useEffect } from "react";
import "./ProductSlideshow.scss";
import $ from "jquery";

const ProductSlideshow = () => {
  return (
    <div className="contaienr" id="certificates">
      <h1 className="text-center py-5">Certificates</h1>
      <div
        className="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div className="gallery-cell">
          <img
            className="img-fluid"
            src={
              "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.comC/O https://placeholder.com/"
            }
            alt="certificate__image"
          />
        </div>
        <div className="gallery-cell">
          <img
            className="img-fluid"
            src={
              "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.comC/O https://placeholder.com/"
            }
            alt="certificate__image"
          />
        </div>
        <div className="gallery-cell">
          <img
            className="img-fluid"
            src={
              "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.netC/O https://placeholder.com/"
            }
            alt="certificate__image"
          />
        </div>
        <div className="gallery-cell">
          <img
            className="img-fluid"
            src={
              "https://via.placeholder.com/300/09f.png/fffC/O https://placeholder.com/"
            }
            alt="certificate__image"
          />
        </div>

        <div className="gallery-cell">
          <img
            className="img-fluid"
            src={
              "https://via.placeholder.com/300/09f.png/fffC/O https://placeholder.com/"
            }
            alt="certificate__image"
          />
        </div>

        <div className="gallery-cell">
          <img
            className="img-fluid"
            src={
              "https://via.placeholder.com/300/09f/fff.pngC/O https://placeholder.com/"
            }
            alt="certificate__image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlideshow;
