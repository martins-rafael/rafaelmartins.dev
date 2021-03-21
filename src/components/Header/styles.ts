import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.superLarge} 0 16rem;
    text-align: left;
    background-color: #222222;
    background-image: url('/header-background.svg');
    /* background by SVGBackgrounds.com */
    background-attachment: fixed;

    @media (max-width: 768px) {
      padding: ${theme.spacings.medium} 0 10rem;
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 ${theme.spacings.medium};
      width: 100%;
      max-width: 96rem;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    a {
      font-size: ${theme.font.sizes.superLarge};
      font-weight: bold;
      color: #ffffff;

      @media (max-width: 768px) {
        margin-bottom: ${theme.spacings.medium};
        font-size: 3rem;
      }

      & + a {
        margin-left: ${theme.spacings.medium};
      }
    }

    svg {
      font-size: 3.2rem;
    }
  `}
`;
