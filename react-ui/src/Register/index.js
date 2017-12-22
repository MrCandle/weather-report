import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import userApi from '../api/userApi';
import styles from './styles';


class Register extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			confirmPasswordValid: null,
			email: '',
			acceptToS: false,
			takenUsername: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleAcceptToSChange = this.handleAcceptToSChange.bind(this);
		this.formHasErrors = this.formHasErrors.bind(this);

	}

	handleClick(event){
		userApi.register(this.state.username, this.state.password, this.state.email).then(res => {
			console.log(res);
			this.props.history.push("/");
			sessionStorage.setItem('currentUser', this.state.username);		
		},
		e => {
			if(e.response.status===404){
				this.setState({takenUsername: true});
			}
			console.log(e);
		});
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value})
	}

	handlePasswordChange(event){
		this.setState({
			password: event.target.value,
			confirmPasswordValid: (event.target.value === this.state.confirmPassword)
		})
	}

	handleConfirmPasswordChange(event){
		this.setState({
			confirmPassword: event.target.value,
			confirmPasswordValid: (event.target.value === this.state.password)
		})
	}

	handleEmailChange(event){
		this.setState({ email: event.target.value })
	}

	handleAcceptToSChange(event){
		this.setState({ acceptToS: event.target.value })
	}

	formHasErrors(){
		if (this.state.username &&
				this.state.email &&
				this.state.confirmPasswordValid &&
				this.state.acceptToS){
					return false;
		}
		return true;
	}

  render() {
    return (
			<div style={styles.registerForm}>
				<Alert isOpen={this.state.takenUsername} color="danger">
					That username or email is already taken.
				</Alert>
				<h3>Register</h3>
				<Form>
					<FormGroup>
						<Label for="username">Username</Label>
						<Input type="text" name="username" id="username" placeholder="Enter your username"  onChange={this.handleUsernameChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" name="email" id="email" placeholder="Enter your email" onChange={this.handleEmailChange}/>
						<FormText>Don't worry, we won't send spam.</FormText>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input type="password" name="password" id="password" placeholder="Enter your password"  onChange={this.handlePasswordChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="confirmPassword">Confirm Password</Label>
						<Input valid={this.state.confirmPasswordValid} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password"  onChange={this.handleConfirmPasswordChange}/>
						<FormFeedback>Passwords don't match dude</FormFeedback>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="checkbox" onChange={this.handleAcceptToSChange}/>{' '} I accept the Terms of Service
						</Label>
					</FormGroup>
					<Button disabled={this.formHasErrors()} style={styles.submitButton} color="primary" onClick={this.handleClick}> Sign Up </Button>
				</Form>
			</div>
    );
  }
}

export default withRouter(Register);

