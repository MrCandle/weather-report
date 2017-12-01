import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {
	state = {
    logged: false,
	};
	
	handleChange = (event, logged) => {
    this.setState({logged: logged});
	};
	
  render() {
    return (
			<AppBar
          title="Weather Report"
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
      />
    );
  }
}

class Login extends Component {

  render() {
    return (
      <FlatButton label="Login" />
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
				<MenuItem primaryText="Refresh" />
				<MenuItem primaryText="Help" />
				<MenuItem primaryText="Sign out" />
			</IconMenu>
    );
  }
}
export default Header;

