import styled from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  a {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};

  img {
    display: block;
    width: 100%;
    height: 20rem;
    border-radius: 0.4rem;
    box-shadow: 0.5rem 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const PostCardHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;
