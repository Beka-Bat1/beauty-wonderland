import { InputFormContext } from "containers/pages/Shop/Shop";
import React, { useContext } from "react";
import "./InputElement.scss";

const InputElement = (props) => {
  const { searchInputValue, onInputChange } = useContext(InputFormContext);

  const valueChangeHandler = (e) => {
    console.log(e.target.value, "Input Element console");
    onInputChange(e.target.value);
  };

  return (
    <>
      <div className="inputElement__wrapper row d-flex flex-nowrap align-items-center mx-auto">
        {props.children}
        <input
          className="auth__input"
          type={props.type}
          placeholder={props.placeholder}
          value={searchInputValue}
          onChange={(e) => valueChangeHandler(e)}

          style={{
            width: props.width,
            height: props.height,
            margin: props.margin
          }}
        />
      </div>
    </>
  );
};

export default InputElement;
