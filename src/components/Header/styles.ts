import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.superLarge} 0 16rem;
    text-align: left;
    background-color: #222222;
    background-image: url('/header-background.svg');
    /* background by SVGBackgrounds.com */
    background-attachment: fixed;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 ${theme.spacings.medium};
      width: 100%;
      max-width: 96rem;
    }

    a {
      font-size: ${theme.font.sizes.superLarge};
      font-weight: bold;
      color: #ffffff;

      & + a {
        margin-left: ${theme.spacings.medium};
      }
    }

    svg {
      font-size: 3.2rem;
    }
  `}
`;
