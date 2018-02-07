import React, { Component } from 'react';
import './index.css';

export default class HelloWorld extends Component {
  render() {
    return (
      <div className="page-center">
        {
          this.props.planet ? (
            <h1>Hello {this.props.planet}</h1>
          ) : (
            <h1>Hello World!</h1>
          )
        }
      </div>
    );
  }
}
