import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class EvenOdd extends Component {
  constructor () {
    super();
  }

  evenOrOdd = num => {
    num = document.getElementById("userNumber").value;
    let value;

    num % 2 === 0 ? value= "Even" : value = "Odd";

    return document.getElementById("modulusReturn").innerHTML = `${num} is ${value}`
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Input Number</h1>
          <form>
          <input type="text" id="userNumber" />
            <input type="button" value="Submit" onClick={this.evenOrOdd} />
          </form>
            <h1 id="modulusReturn"></h1>
        </div>
      </div>
      
    )
  }

}

