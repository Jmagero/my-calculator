/* eslint-disable */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0' });
  const handleClick = (event) => {
    const text = event.target.value;
    const objstate = state;
    const newState = calculate(objstate, text);
    setState(newState);
    const calculatorDisplay = document.querySelector('.calculator-display');
    if (newState.total === null && newState.next === null && newState.operation === null) {
      calculatorDisplay.innerHTML = '0';
    } else if (newState.next !== null) {
      calculatorDisplay.textContent = newState.next;
    } else if (newState.next === null && newState.total !== null) {
      calculatorDisplay.textContent = newState.total;
    }
  };
  return (
    <div className="wrapper"
    style={{
      display: 'flex',
      justifyContent: "space-between"
    }}>
       <h3>Let's do some Math!</h3>
       <div className="button-wrapper">
        <div className="button-row calculator-display">0</div>
        <div className="button-row">
          <button type="button" value="AC" onClick={handleClick}>AC</button>
          <button type="button" value="+/-" onClick={handleClick}>+/-</button>
          <button type="button" value="%" onClick={handleClick}>%</button>
          <button className="button-right" type="button" value="÷" onClick={handleClick}>÷</button>
        </div>
        <div className="button-row">
          <button type="button" value="7" onClick={handleClick}>7</button>
          <button type="button" value="8" onClick={handleClick}>8</button>
          <button type="button" value="9" onClick={handleClick}>9</button>
          <button className="button-right" type="button" value="x" onClick={handleClick}>*</button>
        </div>
        <div className="button-row">
          <button type="button" value="4" onClick={handleClick}>4</button>
          <button type="button" value="5" onClick={handleClick}>5</button>
          <button type="button" value="6" onClick={handleClick}>6</button>
          <button type="button" value="-" onClick={handleClick} className="button-right">-</button>
        </div>
        <div className="button-row">
          <button type="button" value="1" onClick={handleClick}>1</button>
          <button type="button" value="2" onClick={handleClick}>2</button>
          <button type="button" value="3" onClick={handleClick}>3</button>
          <button className="button-right" type="button" value="+" onClick={handleClick}>+</button>
        </div>
        <div className="button-row">
          <button className="zero" type="button" value="0" onClick={handleClick}>0</button>
          <button type="button" value="-" onClick={handleClick}>-</button>
          <button className="button-right" type="button" value="=" onClick={handleClick}>=</button>
        </div>
       </div>
    </div>
  );
};

export default Calculator;
