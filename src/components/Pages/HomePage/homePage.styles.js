import styled from 'styled-components';

const HomePage = {
  Section: styled.section`
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryBgColor};
  `,
  Container: styled.div`
    max-width: 1048px;
    margin: 0 auto;
  `,
  Content: styled.div`
    /* margin-top: 72px; */
    min-height: 100vh;
    display: flex;
    align-items: center;
  `,
  TypeWriter: styled.div`
    
  `,
  TypeWriterHeading: styled.p`
    font-size: 2vw;
    margin: 0;
  `,
  TypeWriterText: styled.h1`
    color: ${props => props.theme.primaryColor};
    font-size: 4vw;
    line-height: 82px;
    font-weight: 900;
    margin-top: 0;
  `,
}

export { HomePage }
