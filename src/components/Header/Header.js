import React from 'react';
import { connect } from 'react-redux';

import { toggleMobileHeaderAction } from '../../actions/actions';
import Menu from './assets/menu.svg';
import { Header } from './header.styles';

const NavbarComponent = (props) => {

  const { toggleMobileHeaderAction } = props;
  const openMobileHeaderFunc = () => {
    toggleMobileHeaderAction(true);
  }

  return (
    <Header.Container>
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
    </Header.Container>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { toggleMobileHeaderAction })(NavbarComponent);
