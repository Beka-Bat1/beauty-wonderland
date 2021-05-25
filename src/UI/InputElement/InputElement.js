import React, { useState } from "react";
import "./InputElement.scss";

const InputElemnt = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const valueChangeHandler = (e) => {
    console.log(e.target.value, "Input Element console");
    setSearchValue(e.target.value);
    /* just lowercase monster thing don't be afraid :) */
    // let tmp = people.filter((p) =>
    //   p.name.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // sendSearchValue(tmp);
  };
  return (
    <>
      <div className="inputElement__wrapper row d-flex flex-nowrap align-items-center m-auto">
        {props.children}
        <input
          className="auth__input"
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => valueChangeHandler(e)}
        />
      </div>
    </>
  );
};

export default InputElemnt;
