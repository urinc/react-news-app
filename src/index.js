import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './Containers/App';
import './index.css';
import { store } from './Store/store';
//import { Router } from 'react-router';
//import createBrowserHistory from 'history/createBrowserHistory';


//const newHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <HashRouter 
    //history={newHistory}
    >
      <App />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);