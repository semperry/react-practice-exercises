import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class LargestNum extends Component {
  constructor () {
    super();

    this.state = {
      largest: ""
    }
  }

  largestNumber = arr => {
    arr = document.getElementById("userArray").value
    let newArr = arr.split(',')

    let placeHolder = 0

    for(let i = 0; i < arr.length; i++){
      newArr[i] > placeHolder ? placeHolder = newArr[i] : null
    }
  
    return document.getElementById("largestReturn").innerHTML = `The largest number is ${placeHolder}`
  }
  

  render() {
    return(
      <div>
        <NavigationComponent />
        <div>
          <form>
            <h1>Enter Numbers Separated by Commas</h1>
            <input type="text" id="userArray" />
            <input type="button" value="Submit" onClick={this.largestNumber} />
          </form>
            <h1 id="largestReturn"></h1>
        </div>
      </div>
    )
  }

}