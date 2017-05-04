var React = require('react');
var Nav = require('../navigation/Nav.js');

var Header = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
        <Nav /> 
    );
  }
});

module.exports = Header;
