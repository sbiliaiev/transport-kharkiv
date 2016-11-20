import React from 'react';
import { Tabs, Tab, Jumbotron } from 'react-bootstrap';
import Header from './../Header/Header';
import UserList from './../UserList/UserList';

export default class MainLayout extends React.Component {

	handleFileChange = (event) => {
		console.log(event.target.files[0]);
		// let file = new File(event.target.files[0]);
		// console.log(file);
		fetch(event.target.files[0])
			.then((response) => {
				return JSON.parse(response);
			})
			.then((data) => {
				console.log(data);
			});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	}

	render() {
		return(
			<div>
				<Header />
				 <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
					<Tab eventKey={1} title="Users List">
						<UserList />
					</Tab>

					<Tab eventKey={2} title="Tab 2">
						<form onSubmit={this.handleSubmit}>
							<input type="file" name="" value="" onChange={this.handleFileChange} />
							<button type="submit">Send</button>
						</form>
					</Tab>

					<Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
				</Tabs>
			</div>
		);
	}
} 