import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import Navbar from '../Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar links={['/Home', '/Second', '/Third', '/Fourth', '/Fifth']} />
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route exact path="/Second" render={props => (
            <HelloWorld planet="Venus!" />
          )} />
          <Route exact path="/Third" render={props => (
            <HelloWorld planet="Earth!" />
          )} />
          <Route exact path="/Fourth" render={props => (
            <HelloWorld planet="Mars!" />
          )} />
          <Route exact path="/Fifth" render={props => (
            <HelloWorld planet="Jupiter!" />
          )} />
        </Switch>
      </div>
    );
  }
}
