import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    open: false
  };

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let sidebarClassnames = "sidemenu";
    if (this.state.open) {
      sidebarClassnames += " sidemenu--open";
    }

    return (
      <div className="App">
        <nav className="navbar">
          <div className="navbar__title">Title</div>
          <ul className="dropdown__list">
            <li className="dropdown__item">Services</li>
            <li className="dropdown__item">Portfolio</li>
            <li className="dropdown__item">About</li>
            <li className="dropdown__item">Team</li>
            <li className="dropdown__item">Contact</li>
          </ul>
          <button className="navbar__menu" onClick={this.toggleMenu}>
            Menu
          </button>
        </nav>

        <div className={sidebarClassnames}>
          <ul className="sidemenu__list">
            <li className="sidemenu__item">Services</li>
            <li className="sidemenu__item">Portfolio</li>
            <li className="sidemenu__item">About</li>
            <li className="sidemenu__item">Team</li>
            <li className="sidemenu__item">Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
