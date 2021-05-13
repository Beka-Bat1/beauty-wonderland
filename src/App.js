import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Layer from './layer/index'

class App extends Component {
  render(){

  return (
    <Layer>
      <div className="wrapper__main container">Hello Beauty Wonderland</div>
    </Layer>
  );
}
}


export default App;
