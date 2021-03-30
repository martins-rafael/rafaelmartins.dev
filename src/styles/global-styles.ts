import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.purple};
  }

  html {
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 60%;
    }
  }

  body {
    ${({ theme }) => css`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;
