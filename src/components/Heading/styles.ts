import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.superLarge};
    line-height: 1.2;

    @media only screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  `}
`;
