var React = require('react');
const { Link } = require('react-router');

var Nav = React.createClass({

	render: function() {
		return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/app/dist" className="navbar-brand">PingOne</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
		);
	}
});

module.exports = Nav;
