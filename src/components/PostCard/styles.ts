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
  position: relative;
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

  span {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 0 0 5px 0;
    user-select: none;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.title};
  `}
`;
