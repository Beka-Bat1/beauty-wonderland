import React from "react";
import "./InputElement.scss";

const InputEleemnt = (props) => {
  return (
    <>
      <div className="inputElement__wrapper row d-flex flex-nowrap align-items-center m-auto">
        {props.children}
        <input
          className="auth__input"
          type={props.text}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default InputEleemnt;
