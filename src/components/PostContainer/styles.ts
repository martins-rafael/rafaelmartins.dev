import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-top: 2rem;

  img {
    max-width: 100%;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    line-height: 1.5;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }

  pre {
    ${({ theme }) => css`
      margin: ${theme.spacings.large} 0;
      padding: ${theme.spacings.large};
      width: 100%;
      font-size: ${theme.font.sizes.medium};
      line-height: 1.5;
      color: ${theme.colors.text};
      background: ${theme.colors.lightGray};
      border-radius: 1rem;
      box-shadow: 0.5rem 0.5rem 1.5rem -0.5rem rgba(0, 0, 0, 0.1);
      overflow-x: auto;
    `}
  }
`;
