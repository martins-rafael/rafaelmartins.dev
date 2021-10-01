import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    h2,
    h3 {
      margin-top: ${theme.spacings.superLarge};
    }

    img {
      max-width: 100%;
      border-radius: 5px;
    }

    p {
      margin: ${theme.spacings.medium} 0;
      letter-spacing: 0.069rem;
      line-height: 1.8;

      code {
        padding: 0.75rem;
        font-family: Consolas, Monaco, 'Andale Mono', 'Courier New', Courier,
          'Ubuntu Mono', monospace;
        font-size: 1.4rem;
        color: #e1e1e6;
        background: #191622;
        border-radius: 5px;
      }
    }

    ul,
    ol {
      margin: ${theme.spacings.medium};
    }

    blockquote {
      border-left: 5px solid ${theme.colors.purple};
      padding: 0px ${theme.spacings.medium};
      margin: ${theme.spacings.large} auto;
    }
  `}
`;
