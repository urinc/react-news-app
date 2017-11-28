import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Containers/App';
import './index.css';
import { store } from './Store/store';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const newHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);