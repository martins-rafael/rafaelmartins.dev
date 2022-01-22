import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 70%;
  text-align: center;

  h2 {
    margin: ${({ theme }) => theme.spacings.medium} 0
      ${({ theme }) => theme.spacings.extraSmall};
  }
`;
