import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);

	}

	handleClick(event){
		sessionStorage.setItem('currentUser', this.state.username);
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value})
	}

	handlePasswordChange(event){
		this.setState({password: event.target.value})
	}

  render() {
    return (
      <Form>
				<FormGroup>
          <Label for="username">Username</Label>
					<Input type="text" name="username" id="username" placeholder="Enter your username" 
						onChange={this.handleUsernameChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
					<Input type="password" name="password" id="password" placeholder="Enter your password" 
						onChange={this.handlePasswordChange}/>
        </FormGroup>
				<Link to={`/boards/${this.state.username}`}>
					<Button color="primary" onClick={(event) => this.handleClick(event)}>Login</Button>
				</Link>
      </Form>
    );
  }
}

export default Login;

