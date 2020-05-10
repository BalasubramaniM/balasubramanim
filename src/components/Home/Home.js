import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../themes';
import Footer from '../Footer';
import Header from '../Header';
import MobileHeader from '../MobileHeader';
import { HomePage, ProjectPage } from '../Pages';
import { Home, Main } from './home.styles';

const HomeComponent = (props) => {
  const { openMobileHeader } = props;
  return (
    <ThemeProvider theme={theme}>
      <Home.Container>
        <MobileHeader />
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
