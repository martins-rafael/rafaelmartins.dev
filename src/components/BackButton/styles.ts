import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
