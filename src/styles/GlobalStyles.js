import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap");

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  body {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
    scrollbar-width: none;
    font-family: "Inter", sans-serif;
    background:
      radial-gradient(circle at left 18%, rgba(247, 210, 153, 0.52), transparent 22%),
      linear-gradient(180deg, #f8faf8 0%, #eef7eb 100%);
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
    overflow-x: hidden;
    scrollbar-width: none;
    background:
      radial-gradient(circle at 14% 50%, rgba(34, 129, 68, 0.18), transparent 18%),
      radial-gradient(circle at 80% 50%, rgba(100, 174, 122, 0.12), transparent 22%),
      linear-gradient(90deg, #06281b 0%, #041c13 55%, #083722 100%);
  }

  html::-webkit-scrollbar,
  body::-webkit-scrollbar,
  #root::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`;

export default GlobalStyles;
