import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Boards from '../Boards';
import Login from '../Login';

// TODO: Find a way to bundle this inside Boards
import Board from '../Boards/Board';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/boards/:user' component={Boards} />
        <Route exact path='/boards/:user/:boardId' component={Board} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default Main;

