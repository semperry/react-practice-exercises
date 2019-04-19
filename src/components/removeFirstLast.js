import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class RemoveFirstLast extends Component {
  constructor () {
    super();

    this.state = {
      input: "",
      new_string: ""
    }
  }

  removeChars = () => {
    this.setState({
      new_string: this.state.input.split('').slice(1,-1).join('')
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
    this.removeChars()
  }

  render() {
    console.log(this.state.new_string)
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Input String</h1>
          <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.input}
            onChange={this.handleChange} />
          <button type="submit">Remove em!</button>
          </form>
            <h1>{this.state.new_string}</h1>
        </div>
      </div>
      
    )
  }

}

