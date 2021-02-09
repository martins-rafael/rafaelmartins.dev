import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
