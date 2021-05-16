import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import Layer from "./layout/index";
import Carousel from "./components/homePage/carousel/Carousel";
import Button from "./UI/button/Button";
import Card from "./components/Card/Card";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs.js";
import ProductSlideshow from "./components/homePage/productSlideShow/ProductSlideshow.js";

class App extends Component {
  componentDidUpdate() {}

  animate = () => {
    let oldHeight = $(".slideshow").css("left");
    /* remove all letters and parse to Number */
    oldHeight = parseInt(oldHeight.replace(/[^0-9]/g, ""));
    console.log(parseInt(oldHeight));
    oldHeight -= 300;
    $(".slideshow").css("left", oldHeight + "px");
  };

  render() {
    return (
      <Layer>
        <SecondaryHr />
        <PrimaryHr />

        <div className="test">
          <div className="slideshow"></div>
        </div>
        <button className="btn" onClick={this.animate}>
          Press me
        </button>
      </Layer>
    );
  }
}

export default App;
