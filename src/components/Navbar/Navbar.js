import React from 'react';

import { Navbar } from './navbar.styles';

const NavbarComponent = () => {
  return (
    <Navbar.Container>
      <Navbar.Section>
        <Navbar.Logo>
            Balasubramani M
        </Navbar.Logo>
        <Navbar.Nav>
          <Navbar.NavItem>Experience</Navbar.NavItem>
          <Navbar.NavItem>Projects</Navbar.NavItem>
          <Navbar.NavItem>Testimonals</Navbar.NavItem>
          <Navbar.NavItem>Contact</Navbar.NavItem>
        </Navbar.Nav>
      </Navbar.Section>
    </Navbar.Container>
  )
}

export default NavbarComponent;
