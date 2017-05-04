var React = require('react');

var FormLabel = React.createClass({

	propTypes: {
		htmlFor: React.PropTypes.string,
		className: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className: "col-md-2 control-label"
		};
	},

	render: function() {
		return (
			<label htmlFor={this.props.htmlFor} className={this.props.className}>{this.props.value}</label>
		);
	}
});

module.exports = FormLabel;
