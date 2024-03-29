import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    letter-spacing: 0.069rem;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;

      > div:last-of-type {
        display: none !important;
      }
    }

    div > span {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
    }

    h1 {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.small};
      font-size: 8rem;
      line-height: 1;
    }

    p {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};

      @media only screen and (max-width: 769px) {
        font-size: ${theme.font.sizes.superLarge};
      }

      span {
        font-weight: 700;
        text-shadow: 0 0 15px;
        color: ${theme.colors.purple};
      }
    }
  `}
`;
