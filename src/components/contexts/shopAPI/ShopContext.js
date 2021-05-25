import React, { createContext, useContext, useState, useEffect } from "react";
import "./utils.js";

const payloadURL = "https://makeup-api.herokuapp.com/api/v1/products.json";

const ProductsContext = createContext("hey");

export const ProductsContextProvider = ({ children }) => {
  const [productData, setProductData] = useState(["hey", "hi!", "helo,world"]);

  const selectItem = () => {
    alert("item Selected");
  };

  return (
    <ProductsContext.Provider 
// @ts-ignore
    value={{ productData, selectItem }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductData = () => useContext(ProductsContext);

export default useProductData;
