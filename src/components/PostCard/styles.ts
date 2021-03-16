import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 28rem 1fr;
  gap: 2.4rem;

  a {
    &:last-child {
      margin: ${({ theme }) => theme.spacings.small} 0;
      font-size: 1.4rem;
      font-style: italic;
      font-weight: bold;
    }
  }

  p {
    line-height: 1.5;
  }

  & + div {
    margin-top: ${({ theme }) => theme.spacings.superLarge};
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  min-width: 28rem;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 20rem;
    object-fit: cover;
    box-shadow: 0.5rem 0.5rem 1.5rem -0.5rem rgba(0, 0, 0, 0.4);
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const PostCardHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.text};
`;
