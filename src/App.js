import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import Layer from "./layout/index";
import Carousel from "./components/Carousel/Carousel";
import Button from "./UI/button/Button";
import Card from "./components/Card/Card";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs.js";
import ProductSlideshow from "./components/ProductSlideshow/ProductSlideshow.js";

class App extends Component {
  render() {
    return (
      <Layer>
        <ProductSlideshow />
        
        <PrimaryHr />
      </Layer>
    );
  }
}

export default App;
