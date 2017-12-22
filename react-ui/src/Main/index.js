import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from '../Home';
import Boards from '../Boards';
import Login from '../Login';
import Register from '../Register';

function isLoggedIn() {
	return sessionStorage.getItem('currentUser') !== null;
}

class Main extends Component {

	render() {
		return (
			<Container>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/boards' render={() => (
						isLoggedIn() ? (
							<Boards />
						) : (
								<Redirect to='/login' />
							)
					)} />
				</Switch>
			</Container>
		);
	}
}

export default Main;

