import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap");

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
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
  }
`;

export default GlobalStyles;
