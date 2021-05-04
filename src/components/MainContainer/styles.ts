import styled from 'styled-components';

export const Container = styled.main`
  margin: 15rem auto 0;
  padding: 1.6rem;
  width: 100%;
  max-width: ${({ theme }) => theme.spacings.container};

  @media only screen and (min-width: 1440px) {
    max-width: ${({ theme }) => theme.spacings.containerLarge};
  }
`;
