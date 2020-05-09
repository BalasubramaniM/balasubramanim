import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../themes';
import Footer from '../Footer';
import Header from '../Header';
import { HomePage, ProjectPage } from '../Pages';
import { Home, Main } from './home.styles';

const HomeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home.Container>
        <Header />
        <Main.Container>
          <HomePage />
          <ProjectPage />
        </Main.Container>
        <Footer />
      </Home.Container>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(HomeComponent);
