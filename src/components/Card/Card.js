import React from "react";
import "./Card.css";
import Button from "../../UI/button/Button";
import cos2 from "../../media/images/cos2.jpg";

const Card = (props) => {
  return (
    <div className="card">
    {/* this line should contain images of product */}
      <img src={cos2} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card__coheader"></p>
        <p className="card-text">Some quick example</p>
        <h6 className="card-price">
          <span>₾</span> 67
        </h6>
        <Button text={"Show More"} />

      </div>
    </div>
  );
};

export default Card;
