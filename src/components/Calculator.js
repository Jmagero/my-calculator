/* eslint-disable */
import React from 'react';
// import Button from './Button';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="wrapper">
        <div className="button-row">
          <button className="calculator-display">0</button>
        </div>
        <div className="button-row">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="button-right">÷</button>
        </div>
        <div className="button-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="button-right">*</button>
        </div>
        <div className="button-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="button-right">-</button>
        </div>
        <div className="button-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="button-right">+</button>
        </div>
        <div className="button-row">
          <button className="zero">0</button>
          <button>-</button>
          <button className="button-right">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
