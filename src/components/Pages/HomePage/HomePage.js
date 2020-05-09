import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typewriter from 'typewriter-effect/dist/core';

import { HomePage } from './homePage.styles';
import { TYPE_WRITER_STRINGS } from './homePage.constants';

const HomePageComponent = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: TYPE_WRITER_STRINGS,
      autoStart: true,
      loop: true,
    });
  })
  return (
    <HomePage.Section>
      <HomePage.Container>
        <HomePage.Content className="moveUp">
          <HomePage.TypeWriter>
            <HomePage.TypeWriterHeading>Hello, I'm Bala. I can,</HomePage.TypeWriterHeading>
            <HomePage.TypeWriterText id="typewriter"></HomePage.TypeWriterText>
          </HomePage.TypeWriter>
        </HomePage.Content>
      </HomePage.Container>
    </HomePage.Section>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(HomePageComponent);
