import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    margin: auto ${theme.spacings.medium} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    color: ${theme.colors.gray};

    a {
      font-weight: 700;
    }
  `}
`;
