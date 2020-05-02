import styled from 'styled-components';

const HomePage = {
  Section: styled.section`
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryBgColor};
  `,
  Container: styled.div`
    max-width: 1540px;
    margin: 0 auto;
  `,
  Content: styled.div`
    /* margin-top: 72px; */
    min-height: 100vh;
    display: flex;
    align-items: center;
    animation-name: appearOut;
    animation-duration: .55s;
    animation-fill-mode: forwards;
    animation-delay: .15s;
    opacity: 0;
  `,
  TypeWriter: styled.div`
    
  `,
  TypeWriterHeading: styled.p`
    font-size: 2vw;
    margin: 0;
  `,
  TypeWriterText: styled.h1`
    color: ${props => props.theme.primaryColor};
    font-size: 3.5vw;
    line-height: 82px;
    font-weight: 900;
    margin-top: 0;
  `,
}

export { HomePage }
