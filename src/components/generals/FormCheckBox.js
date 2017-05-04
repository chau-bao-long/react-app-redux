var React = require('react');

var FormCheckBox = React.createClass({

	propTypes: {
		id: React.PropTypes.string,
		checked: React.PropTypes.bool,
		className: React.PropTypes.string,
		label: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			checked: false
		}
	},

	getDefaultProps: function() {
		return {
			checked: false,
			className: "checkbox"
		};
	},

	_handleChecked: function(e) {
		this.setState({
			checked: !this.state.checked
		})
	},

	render: function() {
		return (
			<div className={this.props.className}>
		    <label>
		      <input type="checkbox" onChange={this._handleChecked} checked={this.state.checked} onChange={this._handleChecked} data-id={this.props.id} /> {this.props.label}
		    </label>
	  	</div>
		);
	}
});

module.exports = FormCheckBox;
