import React, { useContext } from "react";
import "./FilterNavbar.scss";
/* UI */
import { SecondaryButton } from "UI/buttons/Button";
import InputElement from "UI/InputElement/InputElement";
import { InputFormContext } from "components/contexts/shopAPI/ShopContext";
/* context */

const FilterNavbar = () => {
  const { searchInputValue, onInputChange } = useContext(InputFormContext);
  return (
    <div className="filter__navbar">
      <div className="filter__navbar__buttons">
        <InputElement
          height="40px"
          width="auto"
          type="text"
          value={searchInputValue}
          onChange={(e) => onInputChange(e)}
        >
          <i className="fas fa-search"></i>
        </InputElement>

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
          margin="0 10px"
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
