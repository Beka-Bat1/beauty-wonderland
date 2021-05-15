import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Layer from './layer/index'
import Carousel from './components/homePage/carousel/Carousel'
import Button from './UI/button/Button';
import Card from "./components/Card/Card"


class App extends Component {
  render(){

  return (
    <Layer>
      <div className="background1">

      </div>
      <div className="backgroudn2">
        
      </div>
    </Layer>
  );
}
}


export default App;
