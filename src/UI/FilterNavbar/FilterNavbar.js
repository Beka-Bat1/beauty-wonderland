import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "UI/buttons/Button";
import InputElemnt from "UI/InputElement/InputElement";
import "./FilterNavbar.scss";

const FilterNavbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const valueChangeHandler = (e) => {
    e.preventDefault()
    console.log(e.target);

    /* just lowercase monster thing don't be afraid :) */
    // let tmp = people.filter((p) =>
    //   p.name.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // sendSearchValue(tmp);
  };

  return (
    <div className="filter__navbar">
      <div className="filter__navbar__buttons">
        {/* <form onSubmit={(e) => valueChangeHandler(e)}> */}
          <InputElemnt onChange={(e) => valueChangeHandler(e)} />
        {/* </form> */}

        <SecondaryButton
          text="Sort By"
          margin=" 0 10px"
          height="40px"
          width="170px"
        >
          <i className="fas fa-sort"></i>
        </SecondaryButton>

        <SecondaryButton
          text="Filter By"
          margin="2em"
          height="40px"
          width="170px"
        >
          <i className="fas fa-sliders-h"></i>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default FilterNavbar;
