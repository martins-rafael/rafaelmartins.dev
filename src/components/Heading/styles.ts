import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  `}
`;
