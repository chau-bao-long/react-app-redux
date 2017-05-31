import React, { Component } from 'react';

import Header from './header/Header';
import Login from './login/Login';
import DevTools from './../containers/DevTools';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          { this.props.children }
        </div>
        <DevTools />
      </div>
    )
  }
}

export default App;
