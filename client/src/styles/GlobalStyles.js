import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: clip;
    overflow-y: auto;
  }

  body {
    margin: 0;
    width: 100%;
    overflow-x: clip;
    overflow-y: auto;
    font-family: "Inter", sans-serif;
    background: #ffffff;
    color: ${({ theme }) => theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg,
  video,
  canvas {
    max-width: 100%;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    border: 0;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    background: #ffffff;
  }
`;

export default GlobalStyles;
