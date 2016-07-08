import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import configureStore from './store/configureStore';
//import DevTools from './containers/DevTools';
import reducer from './reducers/index.js';
import App from './components/App.js';
import { fetchDevices } from './actions';

const store = configureStore();

store.dispatch(fetchDevices())


render(
  <Provider store={store}>
		<div>
			<App />
      {/*<DevTools />*/}
		</div>
  </Provider>,
  document.getElementById('root')
);
