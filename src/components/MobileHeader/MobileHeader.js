import React from 'react';
import { connect } from 'react-redux';

import { toggleMobileHeaderAction } from '../../actions/actions';
import Close from './assets/close.svg';
import { MobileHeader } from './mobileHeader.styles';

const MobileHeaderComponent = (props) => {

  const { toggleMobileHeaderAction } = props;
  const closeMobileHeaderFunc = () => {
    toggleMobileHeaderAction(false);
  }

  return (
    <MobileHeader.Container>
      <MobileHeader.Section className='appearOut'>
        <MobileHeader.Div>
          <MobileHeader.Logo href="#">
            Balasubramani M
          </MobileHeader.Logo>
          <MobileHeader.Icon onClick={closeMobileHeaderFunc} className="headerIcon">
            <MobileHeader.SVG>
              <div dangerouslySetInnerHTML={{ __html: Close }} />
            </MobileHeader.SVG>
          </MobileHeader.Icon>
        </MobileHeader.Div>
        <MobileHeader.Nav className="headerNav">
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

      </MobileHeader.Section>
    </MobileHeader.Container>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { toggleMobileHeaderAction })(MobileHeaderComponent);
