import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    text-align: center;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
