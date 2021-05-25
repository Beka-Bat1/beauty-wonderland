import Card from "components/Card/Card";
import React, { useState } from "react";
import FilterNavbar from "UI/FilterNavbar/FilterNavbar";
import "./Shop.scss"


const Shop = () => {
  const [popularProducts, setPopularProducts] = useState({
    productImage: "https://picsum.photos/200",
  });


  return (
    <div>
      <FilterNavbar />

      <div className="container shop__container">
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />
        <Card productImage={popularProducts.productImage} />

      </div>
    </div>
  );
};

export default Shop;
