import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Layer from "./layout/index";
import Carousel from "./components/homePage/carousel/Carousel";
import Button from "./UI/button/Button";
import Card from "./components/Card/Card";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs.js";
import ProductSlideshow from "./components/homePage/productSlideShow/ProductSlideshow.js";

class App extends Component {
  render() {
    return (
      <Layer>
        <SecondaryHr />
        <ProductSlideshow />
        <PrimaryHr />
      </Layer>
    );
  }
}

export default App;
