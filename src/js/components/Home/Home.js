import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import Typewriter from 'typewriter-effect/dist/core';

import Navbar from '../Navbar';

import { TYPE_WRITER_STRINGS } from './Constants';

const Home = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: TYPE_WRITER_STRINGS,
      autoStart: true,
      loop: true
    });
  })
  return (
    <div>
      <Navbar />
      <p>I am a Web Developer.</p>

      <div>
        <span>I can create </span>
        <span id="typewriter" />
      </div>
    </div>
  )
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
