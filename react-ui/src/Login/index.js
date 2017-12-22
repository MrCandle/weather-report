import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import userApi from '../api/userApi';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			wrongData: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.formHasErrors = this.formHasErrors.bind(this);
	}

	handleClick(event){
		userApi.login(this.state.username, this.state.password).then(res => {
			sessionStorage.setItem('currentUser', this.state.username);
			this.props.history.push(`/boards/${this.state.username}`);
		},
	e => {
		if(e.response.status===401){
			this.setState({wrongData: true});
		}
	})
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value})
	}

	handlePasswordChange(event){
		this.setState({password: event.target.value})
	}

	formHasErrors(){
		if (this.state.username && this.state.password){
			return false;
		}
		return true;
	}
  render() {
    return (
			<div style={styles.loginForm}>
			<Alert isOpen={this.state.wrongData} color="danger">
				Username or Password do not match.
			</Alert>
			<h3>Register</h3>
      <Form>
				<FormGroup>
          <Label for="username">Username</Label>
					<Input type="text" name="username" id="username" placeholder="Enter your username" onChange={this.handleUsernameChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
					<Input type="password" name="password" id="password" placeholder="Enter your password" onChange={this.handlePasswordChange}/>
        </FormGroup>
				<Button disabled={this.formHasErrors()} style={styles.submitButton} color="primary" onClick={this.handleClick}> Sign In </Button>
      </Form>
			</div>
    );
  }
}

export default withRouter(Login);

