import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import Login from './components/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';
import Register from './components/Register/Register';
import UserList from './components/UserList/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={App} />
			<Route path="login" component={Login} />
			<Route path="register" component={Register} />
			<Route path="main" component={MainLayout}>
				<Route path="users" component={UserList} />
			</Route>
		</Route>				
	</Router>,
	document.getElementById('root')
);
