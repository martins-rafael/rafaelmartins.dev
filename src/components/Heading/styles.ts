import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;
    font-size: ${theme.font.sizes.superLarge};
    text-align: center;
  `}
`;
