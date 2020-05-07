import React, {Fragment} from 'react';
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
        {openMobileHeader ? (<MobileHeader />) : (
          <Fragment>
            <Header />
            <Main.Container openMobileHeader={openMobileHeader}>
              <HomePage />
              <ProjectPage />
            </Main.Container>
            <Footer />
          </Fragment>
        )}
      </Home.Container>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(HomeComponent);
