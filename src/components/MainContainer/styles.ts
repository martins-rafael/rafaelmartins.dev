import styled, { css, keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    animation: ${appearFromLeft} 1s;

    @media (max-width: 768px) {
      padding: 1.6rem;
    }
  `}
`;
