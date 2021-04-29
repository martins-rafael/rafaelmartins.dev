import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
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
      margin: ${theme.spacings.small};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.purple};
    }

    @media (max-width: 768px) {
      flex-direction: column;

      a {
        margin-top: ${theme.spacings.medium};
      }
    }
  `}
`;
