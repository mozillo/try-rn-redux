import { 
	LOGIN_USER, 
	REGISTER_USER 
} from '../constants/ActionTypes';

var loginUser = () => {
	console.log('login user');
	return {
		type: LOGIN_USER,
	}
}

var registerUser = () => {
	return {
		type: REGISTER_USER,
	}
}

module.exports = {
	loginUser,
	registerUser
}