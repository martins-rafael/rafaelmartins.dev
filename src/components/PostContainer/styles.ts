import styled from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
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
`;
