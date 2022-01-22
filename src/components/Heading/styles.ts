import styled, { css } from 'styled-components';

type HeadingProps = {
  size: 'medium' | 'large' | 'superLarge';
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    font-size: ${theme.font.sizes[size]};
    line-height: 1.2;

    @media only screen and (max-width: 768px) {
      font-size: 3.2rem;
    }
  `}
`;
