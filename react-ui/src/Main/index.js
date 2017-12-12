import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Boards from '../Boards';
import Login from '../Login';

function isLoggedIn() {
	return Object.keys(sessionStorage.getItem('currentUser')).length > 0;
}

class Main extends Component {

  render() {
    return (
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
    );
  }
}

export default Main;

