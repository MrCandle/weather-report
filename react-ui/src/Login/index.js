import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleClick(event){
		sessionStorage.setItem('loggedIn', 'true');
	}

  render() {
    return (
      <div>
        <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
						<Link to={`/boards/${this.state.username}`}>
							<RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
						</Link>
      </div>
    );
  }
}

export default Login;

