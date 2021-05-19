import React from "react";
import "./blackHr.css";

export const PrimaryHr = (props) => {
  return (
    <hr
      className="primary__hr"
      style={{
        width: props.width,
        margin: props.margin,
        padding: props.padding,
      }}*
    ></hr>
  );
};

export function SecondaryHr() {
  return <hr className="secondary__hr"></hr>;
}
