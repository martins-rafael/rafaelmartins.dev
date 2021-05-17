import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto auto 0;
    padding: ${theme.spacings.large} 1.6rem;
    width: 100%;
    max-width: ${theme.spacings.container};
    color: ${theme.colors.gray};

    span {
      font-weight: 700;
      color: ${theme.colors.text};
    }

    a {
      margin: ${theme.spacings.extraSmall};
      padding: 8px;
      font-weight: 700;
      line-height: 0;
      color: ${theme.colors.purple};
      border: 2px solid #222222;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;

      &:last-of-type {
        color: ${theme.colors.green};
        cursor: pointer;

        &:hover {
          border-color: ${theme.colors.green};
          box-shadow: 0 0 5px ${theme.colors.green};
        }
      }

      &:hover {
        border-color: ${theme.colors.purple};
        box-shadow: 0 0 5px ${theme.colors.purple};
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;

      a {
        margin-top: ${theme.spacings.medium};
      }
    }

    @media only screen and (min-width: 1440px) {
      max-width: ${theme.spacings.containerLarge};
    }
  `}
`;
