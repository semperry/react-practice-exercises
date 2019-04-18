import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="links-wrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
        
        <NavLink exact to="/alphabetizer">
          Alphabetizer
        </NavLink>
        
        <NavLink exact to="/even-odd">
          Even or Odd
        </NavLink>
        
        <NavLink exact to="/pig-latin">
          Pig Latin
        </NavLink>
        
        <NavLink exact to="/largest-number">
          Largest Number
        </NavLink>
        
        <NavLink exact to="/random-hex">
          Random Hex
        </NavLink>
        
        <NavLink exact to="/remove-first-last">
          Remove First and Last
        </NavLink>
        
        <NavLink exact to="/fizz-buzz">
          FizzBuzz
        </NavLink>
      </div>
    );
  }
}