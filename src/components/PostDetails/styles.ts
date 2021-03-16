import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.extraSmall} 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    font-style: italic;
    color: ${theme.colors.gray};
  `}
`;
