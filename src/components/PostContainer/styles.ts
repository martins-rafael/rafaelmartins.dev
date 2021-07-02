import styled from 'styled-components';

export const Container = styled.article`
  h3 {
    margin-top: 5rem;
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    letter-spacing: 0.069rem;
    line-height: 1.8;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }

  code {
    padding: 0.75rem;
    font-family: Consolas, Monaco, 'Andale Mono', 'Courier New', Courier,
      'Ubuntu Mono', monospace;
    font-size: 1.4rem;
    color: #e1e1e6;
    background: #191622;
    border-radius: 5px;
  }
`;
