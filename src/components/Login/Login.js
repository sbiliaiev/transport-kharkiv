import React from 'react';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Form, FormGroup, FormControl, Checkbox, ControlLabel, Button } from 'react-bootstrap';
import Header from './../Header/Header';
import { logInUser } from './../../api/cloudservice';
import './Login.css';

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			remember: false,
		};
	}

	handleLoginChange = (event) => {
		this.setState({username: event.target.value});
	}

	handlePasswordChange = (event) => {
		this.setState({password: event.target.value});		
	}

	handleRememberChange = () => {
		this.setState({remember: !this.state.remember});
	}

	handleLoginSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		const callback = () => {
			browserHistory.push('main');
		};
		logInUser(this.state, callback);
	}

	render() {
		return(
			<div>
				<Header />
				<Form horizontal className="login-form" onSubmit={this.handleLoginSubmit}>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} 
							md={2} sm={2} xs={8} mdOffset={2} smOffset={2} xsOffset={2}>
							Email
						</Col>
						<Col 
							md={4} sm={6} xs={8} smOffset={0} xsOffset={2}>
							<FormControl type="email" placeholder="Email" onChange={this.handleLoginChange} />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} 
							md={2} sm={2} xs={8} mdOffset={2} smOffset={2} xsOffset={2}>
							Password
						</Col>
						<Col 
							md={4} sm={6} xs={8} smOffset={0} xsOffset={2}>
							<FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} />
						</Col>
					</FormGroup>

					<FormGroup>
						<Col md={4} sm={6} xs={8} mdOffset={4} smOffset={4} xsOffset={2}>
							<Checkbox value={true} onChange={this.handleRememberChange}>Remember me</Checkbox>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col md={4} sm={6} xs={8} mdOffset={4} smOffset={4} xsOffset={2}>
							<Button type="submit">
							Sign in
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}