import React from "react";
import "./FormWrapper.scss";

const FormWrapper = (props) => {
  return (
    <div className="container">
      <div className="auth__wrapper">{props.children}</div>
    </div>
  );
};

export default FormWrapper;
