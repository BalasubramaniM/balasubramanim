import styled from 'styled-components';

const Header = {
  Container: styled.header`
    width: 100%;
    height: 64px;
    position: fixed;
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryBgColor};
    z-index: 1;
  `,
  Section: styled.div`
    max-width: 1540px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `,
  Logo: styled.a`
    font-weight: 600;
    margin: 1em;
    font-size: 1.5em;
  `,
  Nav: styled.nav``,
  UL: styled.ul``,
  LI: styled.li`
    display: inline-block;
    margin: 1em;
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
    margin: 1em;
  `,
  SVG: styled.div`
    width: 16px;
    height: 16px;
  `,
}

export { Header }
