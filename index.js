import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index.js';
import App from './components/App.js';
import { fetchDevices } from './actions';

const loggerMiddleware = createLogger();

const store = createStore(reducer,
applyMiddleware(
	thunkMiddleware,
	loggerMiddleware
	)
);

store.dispatch(fetchDevices()).then(() => console.log('state',store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
