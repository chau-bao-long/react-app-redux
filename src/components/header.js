import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LoginAction from './../actions/loginAction';

class Header extends Component {
	_authButton() {
		if (this.props.authenticated) {
			return <a onClick={() => this.props.authenticate(false)}>Sign Out</a>
		}

		return <a onClick={() => this.props.authenticate(true)}>Sign In</a>
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

export default connect(mapStateToProps, LoginAction)(Header);
