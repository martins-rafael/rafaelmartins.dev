import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 1.6rem;
    width: 100%;
    max-width: 80rem;
    height: 100%;
    letter-spacing: 0.069rem;

    > span {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
    }

    h1 {
      margin: ${theme.spacings.extraSmall} 0;
      font-size: 6rem;
    }

    p {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};

      span {
        font-weight: 700;
        color: ${theme.colors.purple};
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      div:last-of-type {
        display: none !important;
      }
    }
  `}
`;
