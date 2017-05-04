var React = require('react');
var Header = require('./header/Header.js');

var BasePage = React.createClass({
    render: function() {
      return (
        <div>
          <Header />
            <div className="container">
              <h2>Base Page</h2>
              {this.props.children}
            </div>
        </div>
      );
    }
});

module.exports = BasePage;
