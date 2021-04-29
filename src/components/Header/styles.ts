import styled, { css } from 'styled-components';

interface LinksContainerProps {
  active: boolean;
}

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background: #121214cc;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
  }

  /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background: #121214fa;
  }
`;

export const HeaderContent = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: ${theme.spacings.superLarge} ${theme.spacings.medium};
    max-width: 80rem;

    a {
      font-weight: bold;
      letter-spacing: 0.069rem;
      color: ${theme.colors.title};
    }

    > a {
      font-family: monospace;
      font-size: 4.8rem;
      font-style: italic;

      span {
        color: ${theme.colors.green};
      }
    }

    button {
      z-index: 2;
      display: none;
      background: none;
      border: 0;

      @media (max-width: 768px) {
        display: block;
      }

      svg {
        font-size: ${theme.font.sizes.superLarge};
        color: ${theme.colors.green};
      }
    }
  `}
`;

export const LinksContainer = styled.ul<LinksContainerProps>`
  list-style: none;
  display: flex;

  li + li {
    margin-left: ${({ theme }) => theme.spacings.medium};
  }

  a {
    position: relative;

    &:hover {
      opacity: initial;
    }

    &::after {
      position: absolute;
      left: 0;
      bottom: -8px;
      content: '';
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.green};
    }

    &:hover::after {
      width: 100%;
      transition: width 0.7s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    height: 100vh;
    font-size: ${({ theme }) => theme.font.sizes.large};
    background: ${({ theme }) => theme.colors.background};
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${({ active }) => (active ? 0.98 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition: 0.3s ease-in-out;

    li {
      margin: ${({ theme }) => theme.spacings.medium};
    }
  }
`;
