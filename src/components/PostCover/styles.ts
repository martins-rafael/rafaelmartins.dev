import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    max-width: 100%;
  `}
`;
