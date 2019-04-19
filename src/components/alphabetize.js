import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class Alphabetizer extends Component {
  constructor () {
    super();

    this.state = {
      alphaStr: "",
      newStr: ""
    }
  }

  strAlphebetizer = () => {
    this.setState({
      newStr: Array.from(this.state.alphaStr.toLowerCase().replace(' ', '')).sort().join('')
    })
  }

  handleChange = event => {
    this.setState({
      alphaStr: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      alphaStr: ""
    })
    this.strAlphebetizer()
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Enter a String to Alphabetize</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              placeholder="Word goes here" 
              value={this.state.alphaStr}
              onChange={this.handleChange}
            />
            <button type="submit">Alphabetize!</button>
          </form>
            {this.state.newStr}
        </div>
      </div>
      
    )
  }

}

