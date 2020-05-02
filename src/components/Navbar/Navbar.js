import React from 'react';

import Menu from './assets/menu.svg';
import { Navbar } from './navbar.styles';

const NavbarComponent = () => {
  return (
    <Navbar.Container>
      <Navbar.Section>
        {/* <Navbar.Logo>
            Balasubramani M
        </Navbar.Logo>
        <Navbar.Nav>
          <Navbar.NavItem>Experience</Navbar.NavItem>
          <Navbar.NavItem>Projects</Navbar.NavItem>
          <Navbar.NavItem>Testimonals</Navbar.NavItem>
          <Navbar.NavItem>Contact</Navbar.NavItem>
        </Navbar.Nav> */}
        <Navbar.Icon>
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px"><path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"/></svg>
        </Navbar.Icon>
      </Navbar.Section>
    </Navbar.Container>
  )
}

export default NavbarComponent;
