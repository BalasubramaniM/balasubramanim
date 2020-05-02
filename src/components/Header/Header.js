import React from 'react';

import Menu from './assets/menu.svg';
import { Header } from './header.styles';

const NavbarComponent = () => {
  return (
    <Header.Container>
      <Header.Section>
        <Header.Logo href="#">
            Balasubramani M
        </Header.Logo>
        <Header.Nav>
          <Header.NavItem href="#">Experience</Header.NavItem>
          <Header.NavItem href="#">Projects</Header.NavItem>
          <Header.NavItem href="#">Testimonals</Header.NavItem>
          <Header.NavItem href="#">Contact</Header.NavItem>
        </Header.Nav>
        {/* <Navbar.Icon>
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px"><path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"/></svg>
        </Navbar.Icon> */}
      </Header.Section>
    </Header.Container>
  )
}

export default NavbarComponent;
