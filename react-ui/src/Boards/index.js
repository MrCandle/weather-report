import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './Board';
import BoardList from './BoardList';

class Boards extends Component {
 
  render() {
    return (
			<Switch>
				<Route exact path='/boards/:user' component={BoardList} />
				<Route path='/boards/:user/:boardId' component={Board} />
			</Switch>
    );
  }
}

export default Boards;
