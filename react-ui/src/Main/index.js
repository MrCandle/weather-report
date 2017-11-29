import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Board from '../Board';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/boards' component={Board}/>
      </Switch>
    );
  }
}

export default Main;

