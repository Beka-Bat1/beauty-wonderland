import React from "react";
import "./ProductDetails.scss";
import { ShopButton } from "../../UI/buttons/Button.js";
import { PrimaryHr, SecondaryHr } from "../../UI/hr/blackHrs";
import cos1 from "../../media/images/cos1.jpg";

const ProductDetails = () => {
  return (
    <div className="productdetail__container">
      <div className="container__column__start grid__1">
        <div>
          <h2 className="text__title__black">M. GREENGRASS</h2>
          <h5 className="text__cotitle__black">Beach Air Dry Oil Spray</h5>
          <p className="text__secondary">
            This fast absorbing dry oil spray is formulated with a blend of high
            quality oils that quickly penetrate delivering superior moisture
            leaving skin soft and luminous without feeling greasy.{" "}
          </p>
        </div>
        <div className="my-3">
          <h3 className="text__title__black my-3">
            ₾ <span>57, 6</span>
          </h3>
          <ShopButton text="1" />
        </div>
      </div>
      <div className="container__column__center grid__2">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="image-fluid" src={cos1} alt="product-image" />
          <div className="row">
            <h2 className="image__number">1</h2>
            <h2 className="image__number__gray">2</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid grid__3">
        <hr className="vertical__hr"></hr>

        <div className="container__column__start">
          <div className="container__column__start">
            <h4 className="text__title__black">M. GREENGRASS</h4>
            <p className="text__secondary">
              This fast absorbing dry oil spray is formulated with a blend of
              high quality oils that quickly penetrate delivering superior
              moisture.
            </p>
          </div>
          <div className="container-fluid text__title__borders_parent d-flex flex-column">
            {/* iterate this line nth times */}
            <div className="text__title__borders d-flex flex-row justify-content-between">
              <h6>Model</h6> <h6>Oil Spray</h6>
            </div>
            <div className="text__title__borders d-flex flex-row justify-content-between">
              <h6>Model</h6> <h6>Oil Spray</h6>
            </div>
            <div className="text__title__borders d-flex flex-row justify-content-between">
              <h6>Model</h6> <h6>Oil Spray</h6>
            </div>
            <div className="text__title__borders d-flex flex-row justify-content-between">
              <h6>Model</h6> <h6>Oil Spray</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
