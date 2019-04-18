import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class FizzBuzz extends Component {
  constructor () {
    super();

    this.state = {
      counter: 1,
      fizzText: ''
    }
  }

  fizzBuzz = num => {
    // let arr = Array.from(Array(20).keys())
    
      if(num % 3 === 0 && num % 5 === 0){
        this.setState({fizzText: 'FizzBuzz'})
      } else if( num % 3 ===  0) {
        this.setState({fizzText: 'Fizz'})
      } else if(num % 5 === 0) {
          this.setState({fizzText: 'Buzz'})
        } else { this.setState({fizzText: ''})
          }
      }

  incrementer = () => {
    if (this.state.counter < 100) {
      this.setState({counter: ++this.state.counter})
      this.fizzBuzz(this.state.counter)
    }
  }
  
  decrementer = () => {
    if (this.state.counter > 1) {
      this.setState({counter: --this.state.counter})
      this.fizzBuzz(this.state.counter)
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1 id="fizzReturn">{this.state.fizzText || this.state.counter}</h1>
          <button onClick={this.decrementer}>Last Number</button>
          <button onClick={this.incrementer}>Next Number</button>
        </div>
      </div>
      
    )
  }
}

