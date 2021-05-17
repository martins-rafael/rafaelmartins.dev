import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 25rem 1fr;
    gap: 1.5rem;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    a {
      &:last-child {
        margin: ${theme.spacings.small} 0;
        font-size: ${theme.font.sizes.small};
        font-style: italic;
        font-weight: bold;
      }
    }

    p {
      line-height: 1.3;
    }

    & + div {
      margin-top: ${theme.spacings.superLarge};
    }
  `}
`;

export const PostCardCover = styled.div`
  height: fit-content;
  border-radius: 5px;
  overflow: hidden;

  img {
    transition: transform 0.5s ease-in-out;
    border-radius: 5px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.title};
  `}
`;
