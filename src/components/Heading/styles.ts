import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    margin: ${theme.spacings.extraSmall} 0;
    font-size: ${theme.font.sizes.superLarge};
    text-align: left;
  `}
`;
