'use strict'

var keyMirror = require('keymirror');

exports.Types = keyMirror({
	LOGIN_VALIDATE: null,
	LOGIN_SUBMIT: null,
	LOGIN_SUCCESS: null,
	LOGIN_FAILED: null
});

exports.validate = function(email, password) {
	return {
		type: exports.Types.LOGIN_VALIDATE,
		email: email,
		password: password
	};
};

exports.submit = function(email, password) {
	return {
		type: exports.Types.LOGIN_SUBMIT,
		email: email,
		password: password
	};
};

exports.success = function() {
	return {
		type: exports.Types.LOGIN_SUCCESS
	};
};

exports.failed = function() {
	return {
		type: exports.Types.LOGIN_FAILED
	};
}