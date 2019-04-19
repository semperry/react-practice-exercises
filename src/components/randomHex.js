import React, { Component } from 'react';

import NavigationComponent from "./navigation/nav-container"

export default class RandomHex extends Component {
  constructor () {
    super();

    this.state = {
      hex: ""
    }
  }

  rndHex = () => {
    let arr = '0123456789ABCDEF'
    let hexArr = ''
  
    for (let i = 0; i < 6; i++){
      hexArr += arr[(Math.floor(Math.random() * arr.length))]
    }

    this.setState( {hex: `#${hexArr}`})
  }

  render() {
    return (
      <div content-wrapper>
      <NavigationComponent />
        <div>
          <h1>Generate a Random Hex Value</h1><br />
          <h2 style={{ color: this.state.hex }}>{this.state.hex}</h2><br/>
          <button onClick={this.rndHex}>Generate</button>
          
        </div>
      </div>
    )
  }

}

