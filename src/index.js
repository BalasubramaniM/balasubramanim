import React from 'react';
import ReactDOM from "react-dom";

import './styles.css';
import Home from './components/Home';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
