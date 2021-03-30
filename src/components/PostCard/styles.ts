import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 28rem 1fr;
    gap: ${theme.spacings.medium};

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    a {
      &:last-child {
        margin: ${theme.spacings.small} 0;
        font-size: 1.4rem;
        font-style: italic;
        font-weight: bold;
      }
    }

    p {
      line-height: 1.5;
    }

    & + div {
      margin-top: ${theme.spacings.superLarge};
    }
  `}
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  min-width: 28rem;
  border-radius: 0.3rem;
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
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.title};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.green};
    }
  `}
`;
