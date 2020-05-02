import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../themes';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { HomePage } from '../Pages';
import { Home, Main } from './home.styles';

const HomeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home.Container>
        <Navbar />
        <Main.Container>
          <HomePage />
        </Main.Container>
        <Footer />
      </Home.Container>
    </ThemeProvider>
  )
}

export default HomeComponent;
