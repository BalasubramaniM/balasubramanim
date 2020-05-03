import styled from 'styled-components';

const Projects = {
  Section: styled.section`
    height: 600px;
    /* color: ${props => props.theme.primaryColor}; */
    /* background: ${props => props.theme.primaryBgColor}; */
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(247, 224, 224) 100%);
  `,
  Container: styled.div`
    max-width: 1540px;
    margin: 0 auto;
  `,
  Content: styled.div`
    display: flex;
    /* align-items: center; */
    padding: 1em;
  `,
  List: styled.div`
    flex: 1;
    /* padding: 5em; */
  `,
  Desc: styled.div`
    flex: 1;
  `,
  Title: styled.a`
    font-weight: 700;
    line-height: 2.5em;
    font-size: 2em;

    :hover {
      cursor: pointer;
      box-shadow: 0 2px 0 black;
    }
  `,
  SubTitle: styled.h2`
    font-weight: 300;
    color: ${props => props.theme.tertiaryColor};
  `,
  AppContainer: styled.ul`
    margin-top: 2em;
  `,
  AppItem: styled.li`
    padding: 1em 0;
    max-width: 400px;
  `,
  App: styled.a`
    font-size: 1.5em;

    :hover {
      cursor: pointer;
      box-shadow: 0 2px 0 black;
    }
  `,
  Description: styled.p`
    white-space: pre-line;
  `,
}

export { Projects }
