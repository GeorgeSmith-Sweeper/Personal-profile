'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';


// the provider gives every component/container access to the store
ReactDOM.render(
  <Provider store={store}>
  <div className="container-fluid">
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
  </div>
  </Provider>,
  document.getElementById('app')
);
