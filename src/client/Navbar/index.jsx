import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Navbar extends Component {
  renderLinks() {
    return this.props.links.map((link, index) => {
      if (link.replace(/\//, '') === 'Home' || link.replace(/\//, '') === 'home') {
        return (
          <li className="item" key={index}>
            <Link to={'/'}>{link.replace(/\//, '')}</Link>
          </li>
        );
      }

      return (
        <li className="item" key={index}>
          <Link to={link}>{link.replace(/\//, '')}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <input type="checkbox" name="hamburger" id="hamburger"></input>
          <label htmlFor="hamburger" className="navbar-icon">&#9776;</label>
          <h2 className="navbar-title">Navbar</h2>
          <div className="list">
              <ul className="nav">
                {this.renderLinks()}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
