import styled from 'styled-components';

const Header = {
  Container: styled.header`
    width: 100%;
    height: 64px;
    position: fixed;
    color: ${props => props.theme.primaryColor};
  `,
  Section: styled.div`
    max-width: 1540px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
  `,
  Logo: styled.a`
    font-weight: 600;
  `,
  Nav: styled.nav``,
  NavItem: styled.a`
    margin-right: 1em;

    :last-child {
        margin-right: 0;
    }
  `,
  Icon: styled.div`
    cursor: pointer;
  `,
}

export { Header }
