import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Layer from "./layout/index";
import Carousel from "./components/Carousel/Carousel";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs.js";
import ProductSlideshow from "./components/ProductSlideshow/ProductSlideshow.js";
import ProductDetails from "./components/ProductDetails/ProductDetails";

class App extends Component {
  render() {
    return (
      <Layer>
        <Carousel />
        <SecondaryHr />
        <ProductSlideshow />
        <PrimaryHr />
        <ProductDetails />
      </Layer>
    );
  }
}

export default App;
