import React from 'react';
import { connect } from 'react-redux';

import { toggleMobileHeaderAction } from '../../actions/actions';
import Menu from './assets/menu.svg';
import { Header } from './header.styles';

import { Icon } from '../HelperComponents';

const NavbarComponent = (props) => {

  const { toggleMobileHeaderAction } = props;
  const toggleMobileHeader = () => {
    toggleMobileHeaderAction(true);
  }

  return (
    <Header.Container className="moveUp">
      <Header.Section>
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
        {/* <Header.Icon onClick={toggleMobileHeader} className="headerIcon">
          <Header.SVG>
            <div dangerouslySetInnerHTML={{ __html: Menu }} />
          </Header.SVG>
        </Header.Icon> */}
        <Icon onClick={toggleMobileHeader} className="headerIcon" icon='MENU'></Icon>
      </Header.Section>
      <Header.Nav className="mobileHeaderNav">
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
    </Header.Container>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { toggleMobileHeaderAction })(NavbarComponent);
