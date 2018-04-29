import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import Main from './main.js';
import store from './store';

const App = () => (<Provider store={store}>
  <Main />
</Provider>);

export default hot(module)(App);