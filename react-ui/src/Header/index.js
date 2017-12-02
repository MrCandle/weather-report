import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class Header extends Component {

	isLoggedIn(){
		return sessionStorage.getItem('loggedIn') === 'true';		
	}	

  render() {
    return (
			<AppBar
          title="Weather Report"
          iconElementRight={this.isLoggedIn() ? <Logged /> : <Login />}
      />
    );
  }
}

class Login extends Component {

  render() {
    return (
			<Link to='/login'>
      	<FlatButton label="Login" />
			</Link>
    );
  }
}

class Logged extends Component {

  render() {
    return (
      <IconMenu
				iconButtonElement={
					<IconButton><MoreVertIcon /></IconButton>
				}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			>
				<MenuItem primaryText="My Profile" />
				<MenuItem primaryText="Sign out" />
			</IconMenu>
    );
  }
}
export default Header;

