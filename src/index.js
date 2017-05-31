import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Login from './components/login/Login';
import Register from './components/register/Register';
import ShowBook from './components/books/ShowBook';
import Home from './components/home/Home';
import App from './components/App';
import reducers from './reducers';
import DevTools from './containers/DevTools';

const enhancer = compose(DevTools.instrument());
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
        <Route path="books" component={ShowBook}></Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
