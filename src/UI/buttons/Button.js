import React from "react";
import "./Button.scss";

export const PrimaryButton = (props) => {
  return (
    <button className="button__primary">
      <span className="button__text__primary"> {props.text}</span>
    </button>
  );
};

export const SecondaryButton = (props) => {
  return (
    <button
      className="button__secondary"
      style={{
        width: props.width || "auto",
        margin: props.margin,
        padding: props.padding
      }}
    >
      <span className="button__text__secondary">{props.text}</span>
    </button>
  );
};

export const ShopButton = (props) => {
  return (
    <div className="button__container">
      <div className="button__shop">
        <button className="btn">
          {" "}
          <i class="fas fa-minus"></i>{" "}
        </button>
        <span className="count">{props.text}</span>
        <button className="btn">
          {" "}
          <i class="fas fa-plus"></i>{" "}
        </button>
      </div>
      <PrimaryButton text={"Add To Cart"} />
    </div>
  );
};
