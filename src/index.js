import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import './styles.css';
import store from './actions/store';
import Home from './components/Home';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, wrapper) : false;
