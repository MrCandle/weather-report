import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Boards from '../Boards';
import Login from '../Login';

function isLoggedIn() {
	return sessionStorage.getItem('currentUser') !== null;
}

class Main extends Component {

  render() {
    return (
			<div class="container">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/boards' render={() => (
						isLoggedIn() ? (
						<Boards />
						) : (
							<Redirect to='/login'/>
						)
					)}/>
				</Switch>
			</div>
    );
  }
}

export default Main;

