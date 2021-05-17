import React from "react";
import "./Card.css";
import Button from "../../UI/button/Button";
import cos2 from "../../media/images/cos2.jpg";

const Card = (props) => {
  return (
    <div className="card">
    {/* this line should contain images of product */}
      <img src={cos2} className="card-img-top" alt="..." />
      <hr />
      <div className="card-body">
        <h3 className="card-title">Card title</h3>
        <p className="card__coheader"></p>
        <p className="card-text">Some quick example</p>
        <h5 className="card-price">
          <span>₾</span> 67
        </h5>
        <Button text={"Show More"} />

      </div>
    </div>
  );
};

export default Card;
