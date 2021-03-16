import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    `}

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.purple};
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;
