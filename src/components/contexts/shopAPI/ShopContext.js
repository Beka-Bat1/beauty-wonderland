import { processData } from "containers/pages/Shop/utilities.js";
import React, { createContext, useContext, useState, useEffect } from "react";
import { FetchHook } from "../utilities.js";
import "./utils.js";


/* API endpoint */
const payloadURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

/* context for search and filter navbar */
export const InputFormContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [result, error, isLoading] = FetchHook(payloadURL);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [peopleData, setPeopleData] = useState([]);

  const filterPeopleParams = {};

  const usePeopleData = (filtersToApply) => {
    const filteredData = processData(filtersToApply)(result);
    return filteredData;
  };

  const people = usePeopleData(filterPeopleParams);

  const valueChangeHandler = (inputValue) => {
    console.log(inputValue, "from SHOP");
    setSearchInputValue(inputValue);

    let tmp = people.filter((p) =>
      p.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setPeopleData(tmp);
  };

  return (
    <InputFormContext.Provider
      value={{
        searchInputValue,
        onInputChange: (inputValue) => valueChangeHandler(inputValue),
      }}
    >
    {children}
    </InputFormContext.Provider>
  );
};


export default ProductsContextProvider;
