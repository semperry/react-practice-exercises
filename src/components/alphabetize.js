import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class Alphabetizer extends Component {
  constructor () {
    super();
  }

  strAlphebetizer = str => {
    str = document.getElementById("userString").value;
    let strArr = Array.from(str.toLowerCase().replace(' ', '')).sort().join('')

    return document.getElementById("alphaReturn").innerHTML = strArr
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Enter a String to Alphabetize</h1>
          <form>
          <input type="text" id="userString" />
            <input type="button" value="Submit" onClick={this.strAlphebetizer} />
          </form>
            <h1 id="alphaReturn"></h1>
        </div>
      </div>
      
    )
  }

}

