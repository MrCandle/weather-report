import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './Board';
import BoardList from './BoardList';

class Boards extends Component {
 
  render() {
    return (
			<Switch>
				<Route exact path='/boards/:username' component={BoardList} />
				<Route path='/boards/:username/:boardId' component={Board} />
			</Switch>
    );
  }
}

export default Boards;
