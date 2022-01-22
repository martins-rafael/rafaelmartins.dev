import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    a:hover {
      text-shadow: initial;
    }

    p {
      margin-top: auto;
      line-height: 1.3;
      color: ${theme.colors.text};
    }

    & + div {
      margin-top: ${theme.spacings.superLarge};
      padding-top: ${theme.spacings.superLarge};
      border-top: 1px solid #222222cc;
    }
  `}
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.title};
  `}
`;
