import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import LoginAction from './../../actions/loginAction';

class Header extends Component {

  constructor(props) {
    super(props);
    this._authButton = this._authButton.bind(this);
  }

	_authButton() {
    const { loginSuccess } = this.props.authenticated;
    const { login, logOut } = this.props;

		if (loginSuccess) {
			return <a onClick={() => login()}>Sign Out</a>
		}

		return <a onClick={() => logOut()}>Sign In</a>
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						 <a className="navbar-brand" href="#">ReactRedux</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/books">Resource</Link>
							</li>
							<li>
								{this._authButton()}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.login
	};
}

export default connect
(mapStateToProps,
LoginAction)(Header);
