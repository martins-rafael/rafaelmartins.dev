import styled, { css } from 'styled-components';

export const WelcomeContainer = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: ${theme.spacings.container};
    height: 100%;
    letter-spacing: 0.069rem;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;

      > div:last-of-type {
        display: none !important;
      }
    }

    @media only screen and (min-width: 1440px) {
      max-width: ${theme.spacings.containerLarge};
    }

    > div:first-of-type {
      justify-self: center;
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
      font-size: ${theme.font.sizes.superLarge};
      color: ${theme.colors.gray};

      span {
        font-weight: 700;
        text-shadow: 0 0 15px;
        color: ${theme.colors.purple};
      }
    }
  `}
`;

export const DescriptionContainer = styled.section`
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
      font-size: ${theme.font.sizes.large};
      letter-spacing: 0.069rem;
      line-height: 1.3;

      & + p {
        margin-top: ${theme.spacings.large};
      }
    }
  `}
`;
