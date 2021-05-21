import "./GoogleAuthIcon.scss";
import GoogleAuthSVG from "./GoogleAuthIcon.svg";
import React from "react";

const GoogleAuthIcon = (props) => {
  return (
    <>
      <div class="google__button__wrapper col-md-12 d-flex justify-content-center">
        <a
          class="btn btn-sm btn-google btn-block btn-outline
            d-flex flex-nowrap align-items-center justify-content-between"
          href="#"
        >
          <img src={GoogleAuthSVG} />
          <p>{props.text}</p>
        </a>
      </div>
    </>
  );
};

export default GoogleAuthIcon;
