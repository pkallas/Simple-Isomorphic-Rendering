import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar links={['/Home', '/Second', '/Third', '/Fourth', '/Fifth']} />
        <Switch>
          <Route exact path="/" render={props => <div>Hello World!</div>} />
          <Route exact path="/2" render={props => <div>Hello World 2!</div>} />
          <Route exact path="/3" render={props => <div>Hello World 3!</div>} />
          <Route exact path="/4" render={props => <div>Hello World 4!</div>} />
          <Route exact path="/5" render={props => <div>Hello World 5!</div>} />
        </Switch>
      </div>
    );
  }
}
