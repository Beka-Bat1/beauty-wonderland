import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import Layer from "./layout/index";
import Carousel from "./components/Carousel/Carousel";
import Button from "./UI/buttons/Button";
import Card from "./components/Card/Card";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs.js";
import ProductSlideshow from "./components/ProductSlideshow/ProductSlideshow.js";
import ProductDetails from './components/ProductDetails/ProductDetails'


class App extends Component {
  render() {
    return (
      <Layer>        
        <PrimaryHr />
        <ProductDetails />
      </Layer>
    );
  }
}

export default App;
