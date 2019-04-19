import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class LargestNum extends Component {
  constructor () {
    super();

    this.state = {
      input: "",
      largest: ""
    }
  }

  largestNumber = () => {
    let arr = this.state.input
    let newArr = arr.split(',')

    let placeHolder = 0

    for(let i = 0; i < arr.length; i++){
      newArr[i] > placeHolder ? placeHolder = newArr[i] : null
    }
  
    this.setState({
      largest: `The largest number is ${placeHolder}`
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
    this.largestNumber()
  }
  

  render() {
    return(
      <div>
        <NavigationComponent />
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Enter Numbers Separated by Commas</h1>
            <input 
              type="text" 
              value={this.state.input}
              onChange={this.handleChange} 
            />
            <button type="submit">Check</button>
          </form>
            <h1>{this.state.largest}</h1>
        </div>
      </div>
    )
  }

}