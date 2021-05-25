import React from "react";
import "./Card.css";
import { SecondaryButton } from "../../UI/buttons/Button.js";

const Card = (props) => {
  return (
    <div className="card">
      {/* this line should contain images of product */}
      <img src={props.productImage} className="card-img-top" alt="..." />
      <hr />
      <div className="card-body">
        <h6 className="card-title">{props.productName}</h6>
        <p className="card__coheader">{props.productConame}</p>
        <p className="card-text">{props.productDetail}</p>
        <h5 className="card-price">
          <span>₾</span> {props.productPrice}
        </h5>
        <SecondaryButton text={"Show More"} />
      </div>
    </div>
  );
};

export default Card;
