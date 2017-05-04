var React = require('react');

var Button = React.createClass({
	
	propType: {
		type: React.PropTypes.string,
		className: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			type: "submit",
			className: "btn btn-default",
			value: "Click me"
		};
	},

	render: function() {
		return (
			<button type={this.props.type} className={this.props.className}>{this.props.value}</button>
		);
	}
});

module.exports = Button;
