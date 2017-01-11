'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import HelloWorld from './Components/HelloWorld';
import { Provider } from 'react-redux';
import store from './store';


// the provider gives every component/container access to the store
ReactDOM.render(
  <Provider store={store}>
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Router history={hashHistory}>
        <Route path="/" component={HelloWorld}/>
      </Router>
    </div>
  </div>
  </Provider>,
  document.getElementById('app')
);
