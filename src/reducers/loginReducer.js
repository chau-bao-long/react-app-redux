var LoginAction = require('../actions/loginAction.js'),
_ = require('underscore');

var initialState = {
	loginValidate: true,
	loginSuccess: false
};

function submit(email, password) {
	if (email==='longntran@gmail.com' && password==='12345') {
		return true;
	}

	return false;
}

export default function(state, action) {
	var nextState = _.clone(state);

	switch(action.type) {
		case LoginAction.Types.LOGIN_VALIDATE:
		return false;

		case LoginAction.Types.LOGIN_SUBMIT:
		if (submit(action.email, action.password)) {
			return {
				authenticate: true
			};
		}

		return {
			authenticate: false
		};

		case LoginAction.Types.LOGIN_SUCCESS:
		case LoginAction.Types.LOGIN_FAILED:
		default:
		return state || initialState;
	}

	return nextState;
}