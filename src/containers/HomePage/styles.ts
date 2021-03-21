import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacings.large};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacings.small};
  }
`;
