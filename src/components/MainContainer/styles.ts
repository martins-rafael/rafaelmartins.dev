import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    margin: -10rem auto 4rem;
    max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    background: ${theme.colors.background};
    border: 2px solid transparent;
    border-radius: 1rem;
    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
  `}
`;
