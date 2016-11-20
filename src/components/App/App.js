import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './App.css';


class App extends Component {
	render() {
		return null;
	}

	componentDidMount() {
		browserHistory.push('login');
	}
}

export default App;
