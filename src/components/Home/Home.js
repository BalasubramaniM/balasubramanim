import React from 'react';

import Navbar from '../Navbar';
import { HomePage } from '../Pages';
import Footer from '../Footer';
import { Home, Main } from './home.styles';

const HomeComponent = () => {
  return (
    <Home.Container>
      <Navbar />
      <Main.Container>
        <HomePage />
      </Main.Container>
      <Footer />
    </Home.Container>
  )
}

export default HomeComponent;
