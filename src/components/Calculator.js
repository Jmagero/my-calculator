/* eslint-disable */
import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const text = event.target.value;
    const objstate = this.state;
    const newState = calculate(objstate, text);
    this.setState(newState);
    const calculatorDisplay = document.querySelector('.calculator-display');
    if (newState.total === null && newState.next === null && newState.operation === null) {
      calculatorDisplay.innerHTML = '0';
    } else if (newState.next !== null) {
      calculatorDisplay.textContent = newState.next;
    } else if (newState.next === null && newState.total !== null) {
      calculatorDisplay.textContent = newState.total;
    }
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
