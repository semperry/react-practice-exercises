import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./home"
import Alphabetizer from "./alphabetize"
import EvenOdd from "./evenOdd"
import PigLatin from "./pigLatin"
import LargestNum from './largestNum';
import RandomHex from './randomHex'
import RemoveFirstLast from './removeFirstLast'
import FizzBuzz from './fizzBuzz';

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/alphabetizer" component={Alphabetizer} />
              <Route path="/even-odd" component={EvenOdd} />
              <Route path="/pig-latin" component={PigLatin} />
              <Route path="/largest-number" component={LargestNum} />
              <Route path="/random-hex" component={RandomHex} />
              <Route path="/remove-first-last" component={RemoveFirstLast} />
              <Route path="/fizz-buzz" component={FizzBuzz} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}