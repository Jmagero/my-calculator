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
        <div className="button-row calculator-display">0</div>
        <div className="button-row">
          <button type='button' value='AC' onClick={this.handleClick}>AC</button>
          <button type='button' value='+/-' onClick={this.handleClick}>+/-</button>
          <button type='button' value='%' onClick={this.handleClick}>%</button>
          <button className="button-right" type='button' value='÷' onClick={this.handleClick}>÷</button>
        </div>
        <div className="button-row">
          <button type='button' value='7' onClick={this.handleClick}>7</button>
          <button type='button' value='8' onClick={this.handleClick}>8</button>
          <button type='button' value='9' onClick={this.handleClick}>9</button>
          <button className="button-right" type='button' value='x' onClick={this.handleClick}>*</button>
        </div>
        <div className="button-row">
          <button type='button' value='4' onClick={this.handleClick}>4</button>
          <button type='button' value='5' onClick={this.handleClick}>5</button>
          <button type='button' value='6' onClick={this.handleClick}>6</button>
          <button type='button' value='-' onClick={this.handleClick} className="button-right">-</button>
        </div>
        <div className="button-row">
          <button type='button' value='1' onClick={this.handleClick}>1</button>
          <button type='button' value='2' onClick={this.handleClick}>2</button>
          <button type='button' value='3' onClick={this.handleClick}>3</button>
          <button className="button-right" type='button' value='+' onClick={this.handleClick}>+</button>
        </div>
        <div className="button-row">
          <button className="zero" type='button' value='0' onClick={this.handleClick}>0</button>
          <button type='button' value='-' onClick={this.handleClick}>-</button>
          <button className="button-right" type='button' value='=' onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
