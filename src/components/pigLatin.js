import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class PigLatin extends Component {
  constructor () {
    super();

    this.state = {
      input: "",
      piggy: ""
    }
  }

  piggyCreater = () => {
    let str = this.state.input.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;

    if (vowels.includes(str[0])) {
      str = str + "way";
    } else {
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
      }
    }
  }
  this.setState({ 
    piggy: str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
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
    this.piggyCreater()
  }

  render() {
    console.log(this.state.piggy)
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Input String to Piggify</h1>
          <form onSubmit={this.handleSubmit}>
          <input 
            type="text"  
            value={this.state.input}
            onChange={this.handleChange}
            />
            <button type="submit">Piggify Me</button>
          </form>
          {this.state.piggy}
        </div>
      </div>
    )
  }
}