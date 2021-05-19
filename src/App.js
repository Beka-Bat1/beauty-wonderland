import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Layer from "./layout/index";
import Carousel from "./components/Carousel/Carousel";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs";
import ProductSlideshow from "./components/ProductSlideshow/ProductSlideshow";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Authentication from "./components/Authentication/Authentication"

class App extends Component {
  render() {
    return (
      <Layer>
        <Carousel />
        <SecondaryHr />
        <ProductSlideshow />
        <PrimaryHr />
        <ProductDetails />
        <Authentication />
      </Layer>
    );
  }
}

export default App;
