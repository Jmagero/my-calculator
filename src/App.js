/* eslint-disable */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Calculator from './components/Calculator';
import NavBar from './NavBar';
import Home from './Home'
import Quote from './Quote'

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
          <Route path='/Home'>
            <Home />
          </Route>
          <Route path='*'>
            <Quote />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
