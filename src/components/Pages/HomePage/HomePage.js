import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

import { HomePage } from './homePage.styles';
import { TYPE_WRITER_STRINGS } from './homePage.constants';

const HomePageComponent = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: TYPE_WRITER_STRINGS,
      autoStart: true,
      loop: true
    });
  })
  return (
    <HomePage.Section>
      <HomePage.Container>
        <HomePage.Content>
          <span>I can create </span>
          <span id="typewriter" />
        </HomePage.Content>
      </HomePage.Container>
    </HomePage.Section>
  )
}

export default HomePageComponent;