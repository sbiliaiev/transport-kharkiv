import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { getUserList } from './../../api/cloudservice';

export default class UserList extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		const data = getUserList();
		console.log(data);
		this.setState({users: getUserList()});
	}

	render() {
		let users = '';
		if (this.state.users.length > 0)
			users = this.state.users.map((item, index) => {
				return <li key={index}>{item.email}</li>;
			});
		return(
			<Jumbotron>
				<h2>User List</h2>
				<ul>
					{users}
				</ul>
			</Jumbotron>
		);
	}
}