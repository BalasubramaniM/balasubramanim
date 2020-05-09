import styled from 'styled-components';

const Home = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  `,
}

const Main = {
  Container: styled.main`
    flex: 1;
    transform: ${props => props.openMobileHeader ? 'translateY(100px) translateZ(0px)' : 'none'};
    transition: transform 330ms ease-in-out;
    margin-top: 64px;
    `,
  Section: styled.div``,
}

export { Home, Main }
