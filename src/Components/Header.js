import React, { Component } from "react";
import logo from "../logo.png";
// console.log(participants[0].emailAddress());

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Nord Software</h1>
      </nav>
    );
  }
}

export default Header;
