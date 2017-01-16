'use strict';

// Containers
import HomePageContainer from './components/home-page/HomePageContainer';


import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <div className="container-fluid">
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={HomePageContainer} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
