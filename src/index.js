import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/login/Login';
import ShowBook from './components/showBook';
import App from './components/app';
import reducers from './reducers';
import DevTools from './containers/DevTools';

const enhancer = compose(DevTools.instrument());
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login}></Route>
        <Route path="books" component={ShowBook}></Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
