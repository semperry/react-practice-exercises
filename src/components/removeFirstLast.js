import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class RemoveFirstLast extends Component {
  constructor () {
    super();
  }

  removeChars = str => {
    str = document.getElementById("userStringRemove").value;
    let arr = str.split('')
    let newArr = arr.slice(1,-1).join('')

    return document.getElementById("removedReturn").innerHTML = newArr
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Input String</h1>
          <form>
          <input type="text" id="userStringRemove" />
            <input type="button" value="Submit" onClick={this.removeChars} />
          </form>
            <h1 id="removedReturn"></h1>
        </div>
      </div>
      
    )
  }

}

