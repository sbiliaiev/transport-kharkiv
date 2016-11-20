const Backendless = require('backendless');

const APPLICATION_ID = '6F67F7DF-1359-473D-FFDC-AF1EA8654F00';
const SECRET_KEY = 'C06AF173-15AE-B94B-FFDC-7C9A16754900';
const VERSION = 'v1';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

const gotError = (error) => {
	console.log( "error message - " + error.message );
    console.log( "error code - " + error.statusCode );
}

export const logInUser = (obj, callback) => {
	console.log(Backendless);
	console.log('here', obj);
	const username = obj.username,
		  password = obj.password,
		  remember = obj.remember || false;
	Backendless.UserService.login(username, password, remember, new Backendless.Async(
		callback, 
		gotError)
	);
} 

export const logOutUser = (callback) => {
	 Backendless.UserService.logout(new Backendless.Async(
		 callback, 
		 gotError)
	);
}

export const registerUser = (obj, callback) => {
	const user = new Backendless.User();
	user.name = obj.name;
	user.surname = obj.surname;
	user.email = obj.email;
	user.password = obj.password;
	user.telephone = obj.telephone;
	Backendless.UserService.register(user, new Backendless.Async(
		callback, 
		gotError)
	);
}

export const getUserList = (query = '') => {
	const tmp = Backendless.Persistence.of(Backendless.User).find(query);	
	return tmp.data;
}


