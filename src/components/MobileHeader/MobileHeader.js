import React from 'react';
import { connect } from 'react-redux';

import { toggleMobileHeaderAction } from '../../actions/actions';
import CloseIcon from './assets/signs.svg';
import { MobileHeader } from './mobileHeader.styles';

const MobileHeaderComponent = (props) => {

  const { toggleMobileHeaderAction, openMobileHeader } = props;
  const toggleMobileHeader = () => {
    toggleMobileHeaderAction(false);
  }

  return (
    <MobileHeader.Container className="mobileHeader" openMobileHeader={openMobileHeader}>
      <MobileHeader.Section>
        <MobileHeader.Icon onClick={toggleMobileHeader} className="headerIcon">
          <MobileHeader.SVG>
            <div dangerouslySetInnerHTML={{ __html: CloseIcon }} />
          </MobileHeader.SVG>
        </MobileHeader.Icon>
      </MobileHeader.Section>
      <MobileHeader.Nav>
        <MobileHeader.UL>
          <MobileHeader.LI>
            <MobileHeader.NavItem href="#projects">Projects</MobileHeader.NavItem>
          </MobileHeader.LI>
          <MobileHeader.LI>
            <MobileHeader.NavItem href="#">Experience</MobileHeader.NavItem>
          </MobileHeader.LI>
          <MobileHeader.LI>
            <MobileHeader.NavItem href="#">Testimonials</MobileHeader.NavItem>
          </MobileHeader.LI>
          <MobileHeader.LI>
            <MobileHeader.NavItem href="#">Contact</MobileHeader.NavItem>
          </MobileHeader.LI>
        </MobileHeader.UL>
      </MobileHeader.Nav>
    </MobileHeader.Container>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { toggleMobileHeaderAction })(MobileHeaderComponent);
