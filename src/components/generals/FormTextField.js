var React = require('react');

var FormTextField = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		};
	},

	_handleChange: function(e) {
		this.props.handleChange(e);
	},

	getDefaultProps: function() {
		return {
			type: 'text',
			className: 'form-control',
			type: "text",
			isRequired: false
		};
	},

	render: function() {
		var fieldText = this.props.fieldText;
		return (
			<input type={this.props.type} value={fieldText} className={this.props.className} onChange={this._handleChange} />
		);
	}
});

module.exports = FormTextField;