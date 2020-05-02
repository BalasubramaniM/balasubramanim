import styled from 'styled-components';

const Navbar = {
  Container: styled.nav`
    width: 100%;
    height: 70px;
    position: fixed;
  `,
  Section: styled.div`
    max-width: 1048px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
  `,
  Logo: styled.span``,
  Nav: styled.div``,
  NavItem: styled.a`
    margin-right: 1em;

    :last-child {
        margin-right: 0;
    }
  `,
}

export { Navbar }
