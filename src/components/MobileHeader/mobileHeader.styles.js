import styled from 'styled-components';

const MobileHeader = {
  Container: styled.div`
    background: white;
    height: 100vh;
    color: ${props => props.theme.black};
  `,
  Section: styled.div`
  max-width: 1540px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`,
  Logo: styled.a`
  font-weight: 600;
  margin: 1em;
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
  Div: styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  `,
}

export { MobileHeader }
