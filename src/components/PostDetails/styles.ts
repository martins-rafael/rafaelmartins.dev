import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.small};
    font-style: italic;
    color: ${theme.colors.gray};
  `}
`;
