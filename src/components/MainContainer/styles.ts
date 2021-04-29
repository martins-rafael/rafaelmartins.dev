import styled, { css, keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.main`
  ${({ theme }) => css`
    margin: 15rem auto 0;
    padding: 1.6rem;
    width: 100%;
    max-width: 80rem;
    font-size: ${theme.font.sizes.medium};
    animation: ${appear} 2s;
  `}
`;
