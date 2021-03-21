import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem 3rem;

  iframe[src*='ads'] {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem 3rem;
  }
`;
