import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    width: 100vw;
    
    background: #deebff;
    opacity: 0.95;
    cursor: default;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    font-weight: bold;
    color: #c4c4c4;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
