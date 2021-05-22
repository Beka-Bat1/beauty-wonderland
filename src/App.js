import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./layout/index";
/* pages */
import LandingPage from "./containers/pages/LandingPage/LandingPage";
import AboutPage from "./containers/pages/AboutPage/AboutPage";
import FAQ from "./containers/pages/FAQ/FAQ";
import ErrorPage from "containers/pages/ErrorPage/ErrorPage";

import Carousel from "./components/Carousel/Carousel";
import { PrimaryHr, SecondaryHr } from "./UI/hr/blackHrs";
import ProductSlideshow from "./components/ProductSlideshow/ProductSlideshow";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Authentication from "./components/Authentication/Authentication";
import Registration from "./components/Registration/Registration";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FAQ} />
          <Route path="/404" component={ErrorPage} />
          <Redirect from="/" exact to="/home" />
          <Redirect from="*" to="/404" />
        </Switch>
        {/* <Carousel />
        <SecondaryHr />
        <ProductSlideshow />
        <PrimaryHr />
        <ProductDetails />
        <Authentication />
        <Registration />
        <ErrorPage /> */}
      </Layout>
    );
  }
}

export default App;
