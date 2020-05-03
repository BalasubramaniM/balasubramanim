import React, { useState } from 'react';

import Menu from './assets/menu.svg';
import { Header, MobileHeader } from './header.styles';

const NavbarComponent = () => {
  const [openMobileHeader, setOpenMobileHeader] = useState(false);

  return (
    <Header.Container>
      {openMobileHeader ? (<MobileHeader.Container></MobileHeader.Container>) : (
        <Header.Section className='appearOut'>
          <Header.Logo href="#">
            Balasubramani M
          </Header.Logo>
          <Header.Nav className="headerNav">
            <Header.UL>
              <Header.LI>
                <Header.NavItem href="#projects">Projects</Header.NavItem>
              </Header.LI>
              <Header.LI>
                <Header.NavItem href="#">Experience</Header.NavItem>
              </Header.LI>
              <Header.LI>
                <Header.NavItem href="#">Testimonials</Header.NavItem>
              </Header.LI>
              <Header.LI>
                <Header.NavItem href="#">Contact</Header.NavItem>
              </Header.LI>
            </Header.UL>
          </Header.Nav>
          <Header.Icon onClick={() => setOpenMobileHeader(!openMobileHeader)} className="headerIcon">
            <Header.SVG>
              <div dangerouslySetInnerHTML={{ __html: Menu }} />
            </Header.SVG>
          </Header.Icon>
        </Header.Section>
      )}
    </Header.Container>
  )
}

export default NavbarComponent;
