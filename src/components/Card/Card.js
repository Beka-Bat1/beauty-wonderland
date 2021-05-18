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
        <h3 className="card-title">Card title</h3>
        <p className="card__coheader"></p>
        <p className="card-text">Some quick example</p>
        <h5 className="card-price">
          <span>₾</span> 67
        </h5>
        <SecondaryButton text={"Show More"} />
      </div>
    </div>
  );
};

export default Card;
