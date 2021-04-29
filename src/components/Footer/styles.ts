import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto auto 0;
    padding: 1.6rem;
    width: 100%;
    max-width: 80rem;
    font-size: ${theme.font.sizes.medium};
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
      color: ${({ theme }) => theme.colors.purple};
      border: 2px solid #222222;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      flex-direction: column;

      a {
        margin-top: ${theme.spacings.medium};
      }
    }
  `}
`;
