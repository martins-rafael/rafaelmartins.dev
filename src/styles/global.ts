import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
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
      background: ${theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
      background: #333333;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.purple};
    }

    ::selection {
      color: ${theme.colors.background};
      background: ${theme.colors.title};
    }

    html {
      font-size: 62.5%;

      @media only screen and (max-width: 768px) {
        font-size: 60%;
      }
    }

    body {
      font-family: 'Poppins', sans-serif;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
      background: ${theme.colors.background};

      @media only screen and (min-width: 1440px) {
        font-size: 2rem;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.title};
    }

    a {
      display: inline-block;
      text-decoration: none;
      color: ${theme.colors.green};
      transition: text-shadow 0.3s ease-in-out;

      &:hover {
        text-shadow: 0 0 5px;
      }
    }
  `}
`;
