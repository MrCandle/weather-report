import React, { Component } from 'react';
import { Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,
  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,  DropdownItem, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
      isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.goToMyBoards = this.goToMyBoards.bind(this);
	}

	isLoggedIn(){
		return sessionStorage.getItem('currentUser') !== null;
	}	

	goToMyBoards(){
		this.props.history.push(`/boards/${sessionStorage.getItem('currentUser')}`)
	}

	toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
  render() {
    return (
			<Navbar color='dark' dark expand='md'>
				<NavbarBrand href='/'>Mostly Accurate Weather Report</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='ml-auto' navbar>
						{ this.isLoggedIn() && 
						<NavItem>
							<NavLink onClick={this.goToMyBoards}>My boards</NavLink>
						</NavItem>
						}
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
				<NavLink tag={Link} to='/login'>
					<Button color='primary'>Sign In</Button>
				</NavLink>
			</NavItem>
    );
  }
}

class Logged extends Component {

  render() {
    return (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					User
				</DropdownToggle>
				<DropdownMenu >
					<DropdownItem>
						Profile
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>
						Log out
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
    );
  }
}
export default withRouter(Header);

