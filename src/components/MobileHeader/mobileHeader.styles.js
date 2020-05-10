import styled from 'styled-components';

const MobileHeader = {
  Container: styled.header`
    width: ${props => props.openMobileHeader ? '75%' : '0px'};
    height: 100%;
    color: ${props => props.theme.black};
    background: ${props => props.theme.white};
    z-index: 2;
    overflow: hidden;
    transition: all 0.2s ease-in;
    position: fixed;
    top: 0;
    right: 0;
  `,
  Section: styled.div`
    width: 100%;
    height: 64px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5em;
  `,
  Logo: styled.a`
    font-weight: 600;
    font-size: 1.5em;
  `,
  Nav: styled.nav``,
  UL: styled.ul``,
  LI: styled.li`
    padding: 1em;
  `,
  NavItem: styled.a`
    :hover {
      /* box-shadow: 0 2px 0 #2b2b2b; */
      box-shadow: 0 2px 0 ${props => props.theme.primaryColor};
    }

    :last-child {
        margin-right: 0;
    }
  `,
  Icon: styled.div`
    cursor: pointer;
  `,
  SVG: styled.div`
    width: 12px;
    height: 12px;
  `,
}

export { MobileHeader }
