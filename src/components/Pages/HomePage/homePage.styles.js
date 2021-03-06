import styled from 'styled-components';

const HomePage = {
  Section: styled.section`
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryBgColor};
    transform: ${props => props.openMobileHeader ? 'translateY(100px) translateZ(0px)' : 'none'};
    transition: transform 330ms ease-in-out;
  `,
  Container: styled.div`
    max-width: 1540px;
    margin: 0 auto;
  `,
  Content: styled.div`
    /* margin-top: 72px; */
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
  `,
  TypeWriter: styled.div`
    margin: 1em;
    font-size: 2em;
  `,
  TypeWriterHeading: styled.h1`
    margin: 0;
    font-weight: 300;
  `,
  TypeWriterText: styled.h2`
    /* color: ${props => props.theme.secondaryColor}; */
    line-height: 82px;
    font-weight: 600;
    margin-top: 0;
  `,
}

export { HomePage }
