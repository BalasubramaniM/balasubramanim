import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../themes';
import Footer from '../Footer';
import Header from '../Header';
import { HomePage } from '../Pages';
import { Home, Main } from './home.styles';

const HomeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home.Container>
        <Header />
        <Main.Container>
          <HomePage />
        </Main.Container>
        <Footer />
      </Home.Container>
    </ThemeProvider>
  )
}

export default HomeComponent;
