import styled, { css } from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
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
      color: #ff79c6;
      background: #282a36;
      border-radius: 0.4rem;
      overflow-x: auto;
    `}
  }
`;
