import React, { Component } from 'react';

import FormTextField from '../generals/FormTextField';
import { connect } from 'react-redux';
import { submit } from './../../actions/loginAction';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this._handleChangeEmail = this._handleChangeEmail.bind(this);
		this._handleChangePassword = this._handleChangePassword.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChangeEmail(e) {
		this.setState({
			email: e.target.value
		})
	}

	_handleChangePassword(e) {
		this.setState({
			password: e.target.value
		})
	}

	_handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(submit(this.state.email, this.state.password));
	}

	_isAuthenticated() {
		if (this.props.auth.authenticate) {
			return "Authenticated";
		}

		return "Not Authenticate";
	}

	render() {
		return (
			<div>
				<h2>{ this._isAuthenticated() }</h2>
				<form className="form-horizontal" onSubmit={this._handleSubmit}>
					<div className="form-group">
						<label htmlFor="email" className="col-md-2 control-label">Email</label>
						<div className="col-sm-10">
							<FormTextField
								type="email"
								id="email"
								handleChange={this._handleChangeEmail}
								fieldText={this.state.email} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="password" className="col-md-2 control-label">Password</label>
						<div className="col-sm-10">
							<FormTextField
								type="password"
								id="password"
								handleChange={this._handleChangePassword}
								fieldText={this.state.password} />
						</div>

					</div>

					<div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <div className="checkbox">
					        <label>
					          <input type="checkbox" /> Remember me
					        </label>
					      </div>
					    </div>
					  </div>
					  <div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <button type="submit" className="btn btn-default">Sign in</button>
					    </div>
					  </div>
				</form>
			</div>
		);
	}
}

function mapStateToProp(state) {
	return {
		auth: state.login
	}
};

export default connect(mapStateToProp, null)(Login);
