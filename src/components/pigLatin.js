import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class PigLatin extends Component {
  constructor () {
    super();
  }

  piggyCreater = str => {
    str = document.getElementById("userStr").value;
    str = str.toLowerCase()
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
  return document.getElementById("piggyReturn").innerHTML = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavigationComponent />
        <div>
          <h1>Input String to Piggify</h1>
          <form>
          <input type="text" id="userStr" />
            <input type="button" value="Submit" onClick={this.piggyCreater} />
          </form>
            <h1 id="piggyReturn"></h1>
        </div>
      </div>
    )
  }

}

