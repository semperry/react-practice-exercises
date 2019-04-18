import React, { Component } from "react";

import NavigationComponent from "./navigation/nav-container"

export default class Home extends Component {
  constructor() {
    super();
    };

    render() {
      return (
        <div className="content-wrapper">
            <NavigationComponent />
          <div>
            <h1>Here are Some Fun Things to Play With</h1>
            <h2>Select a Program</h2>
          </div>
          
        </div>
      );
    };
}

