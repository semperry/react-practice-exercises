import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class EvenOdd extends Component {
  constructor () {
    super();

    this.state = {
      input: "",
      number: ""
    }
  }

  evenOrOdd = () => {
    let num = this.state.input;
    let value;

    num % 2 === 0 ? value= "Even" : value = "Odd";

    this.setState({
      number: `${num} is ${value}`
    }) 
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      input: ""
    })
    this.evenOrOdd()
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Enter Number to Check</h1>
          <form onSubmit={this.handleSubmit}>
          <input 
            type="text"  
            value={this.state.input}
            onChange={this.handleChange}
            />
            <button type="submit">GO!</button>
          </form>
          {this.state.number}
        </div>
      </div>
    )
  }
}