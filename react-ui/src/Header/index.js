import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
      isOpen: false
    };
	}

	isLoggedIn(){
		return sessionStorage.getItem('currentUser') !== null;
	}	

	toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
  render() {
    return (
			<Navbar color="dark" dark expand="md">
				<NavbarBrand href="/">Mostly Accurate Weather Report</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						{this.isLoggedIn() ? <Logged /> : <Login />}
					</Nav>
				</Collapse>
			</Navbar>
    );
  }
}

class Login extends Component {

  render() {
    return (
			<NavItem>
				<NavLink tag={Link} to="/login">Login</NavLink>
			</NavItem>
    );
  }
}

class Logged extends Component {

  render() {
    return (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Options
				</DropdownToggle>
				<DropdownMenu >
					<DropdownItem>
						Option 1
					</DropdownItem>
					<DropdownItem>
						Option 2
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>
						Reset
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
    );
  }
}
export default Header;

