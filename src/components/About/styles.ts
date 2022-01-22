import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.superLarge} 0;

    h2 {
      margin: ${theme.spacings.medium} 0;
    }

    span {
      text-shadow: 0 0 15px;
      color: ${theme.colors.green};
    }

    p {
      margin-top: ${theme.spacings.large};
      font-size: ${theme.font.sizes.large};
      letter-spacing: 0.069rem;
      line-height: 1.3;
    }
  `}
`;
