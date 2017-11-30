import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Boards from '../Boards';
import Login from '../Login';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/boards' component={Boards} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default Main;

