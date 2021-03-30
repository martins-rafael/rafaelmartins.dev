import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.superLarge} ${theme.spacings.medium};
    font-family: monospace;
    font-size: ${theme.font.sizes.superLarge};
    font-style: italic;
    font-weight: bold;
    text-align: center;
  `}

  a {
    color: ${({ theme }) => theme.colors.title};

    span {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
