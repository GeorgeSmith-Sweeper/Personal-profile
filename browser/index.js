'use strict';

// Containers
import HomePageContainer from './components/home-page/HomePageContainer';


import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <HomePageContainer />
    </div>
  </Provider>,
  document.getElementById('app')
);
