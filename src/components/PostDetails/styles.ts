import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.extraSmall} 0 ${theme.spacings.medium};
    font-size: 1.6rem;
    color: #999999cc;

    div {
      display: flex;
      align-items: center;

      & + div {
        margin-left: ${theme.spacings.large};
      }
    }

    svg {
      margin-right: ${theme.spacings.small};
    }
  `}
`;
