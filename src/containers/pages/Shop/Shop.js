import Card from "components/Card/Card";
import { InputFormContext } from "components/contexts/shopAPI/ShopContext";
import React, { createContext, useEffect, useState } from "react";
import FilterNavbar from "UI/FilterNavbar/FilterNavbar";
import "./Shop.scss";
import { processData } from "./utilities";



const Shop = () => {
  const [result, error, isLoading] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [peopleData, setPeopleData] = useState([]);

  

  let dataToRender = searchInputValue === "" ? people : peopleData;

  return (
    <div>
      <InputFormContext.Consumer>
        <FilterNavbar />
      </InputFormContext.Consumer>
      <div className="container shop__container">
        {error && <p>Error: {error} </p>}
        {isLoading && <p>Loading...</p>}
        {dataToRender.map((item) => (
          <Card
            productImage={item.image_link}
            productName={item.name}
            productConame={item.name}
            productDetail={item.name}
            productPrice={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
