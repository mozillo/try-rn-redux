import {
	LOGIN_USER, 
	REGISTER_USER 
} from '../constants/ActionTypes';

module.exports = function(state, action) {
	state = state || { id: 0, username: 'anonymous', nickname: 'anonymous', avatar: 'anonymous', email: 'anonymous@app.im' }

	switch(action.type){
		
		case LOGIN_USER: {
			return {
				...state,
				username: 'anonymous', 
				nickname: 'anonymous', 
				avatar: 'anonymous', 
				email: 'anonymous@app.im'
			}
		}

		case REGISTER_USER: {

			return {
				...state,
				username: 'Mot Evans',
				nickname: 'mot',
				avatar: 'https://avatars2.githubusercontent.com/u/13573891?v=3&u=4bcfcb01b2994ca0fe21fb9a1bd975914b66206d&s=140',
				email: '446146366@qq.com',
			}
		}

	}

	return {
		...state
	}
};