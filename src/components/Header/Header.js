import React from 'react';
import { connect } from 'react-redux';

import { openMobileHeaderAction } from '../../actions/actions';
import Menu from './assets/menu.svg';
import { Header, MobileHeader } from './header.styles';

const NavbarComponent = (props) => {

  const { openMobileHeaderAction } = props;
  const openMobileHeaderFunc = () => {
    openMobileHeaderAction(true);
  }

  return (
    <Header.Container>
      {props.openMobileHeader ? (
        <MobileHeader.Container>
          <button onClick={() => openMobileHeaderAction(false)}>Close</button>
        </MobileHeader.Container>) : (
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
          {/* <Header.Icon onClick={() => setOpenMobileHeader(!openMobileHeader)} className="headerIcon"> */}
          <Header.Icon onClick={openMobileHeaderFunc} className="headerIcon">
            <Header.SVG>
              <div dangerouslySetInnerHTML={{ __html: Menu }} />
            </Header.SVG>
          </Header.Icon>
        </Header.Section>
      )}
    </Header.Container>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { openMobileHeaderAction })(NavbarComponent);
