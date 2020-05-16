import React from 'react';
import { connect } from 'react-redux';

import { toggleMobileHeaderAction } from '../../actions/actions';
import CloseIcon from './assets/signs.svg';
import { MobileHeader } from './mobileHeader.styles';

import { Icon } from '../HelperComponents';

const MobileHeaderComponent = (props) => {

  const { toggleMobileHeaderAction, openMobileHeader } = props;
  const toggleMobileHeader = () => {
    toggleMobileHeaderAction(false);
  }

  return (
    <MobileHeader.Container className="mobileHeader" openMobileHeader={openMobileHeader}>
      <MobileHeader.Section>
        <Icon onClick={toggleMobileHeader} className="headerIcon" icon='CLOSE'></Icon>
        {/* <MobileHeader.Icon onClick={toggleMobileHeader} className="headerIcon">
          <MobileHeader.SVG>
            <div dangerouslySetInnerHTML={{ __html: CloseIcon }} />
          </MobileHeader.SVG>
        </MobileHeader.Icon> */}
      </MobileHeader.Section>
      <MobileHeader.Nav>
        <MobileHeader.UL>
          <MobileHeader.LI>
            <MobileHeader.NavItem onClick={toggleMobileHeader} href="#projects">Projects</MobileHeader.NavItem>
          </MobileHeader.LI>
          <MobileHeader.LI>
            <MobileHeader.NavItem onClick={toggleMobileHeader} href="#">Experience</MobileHeader.NavItem>
          </MobileHeader.LI>
          <MobileHeader.LI>
            <MobileHeader.NavItem onClick={toggleMobileHeader} href="#">Testimonials</MobileHeader.NavItem>
          </MobileHeader.LI>
          <MobileHeader.LI>
            <MobileHeader.NavItem onClick={toggleMobileHeader} href="#">Contact</MobileHeader.NavItem>
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
