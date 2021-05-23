import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    span {
      text-shadow: 0 0 15px;
      color: ${theme.colors.green};
    }

    > div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.6rem;
      margin: ${theme.spacings.large} 0;

      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 15rem;
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 5px solid #222222;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        svg {
          padding: ${theme.spacings.small};
          color: ${theme.colors.text};
          transition: color 0.3s ease-in-out;
        }

        span {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: ${theme.font.sizes.large};
          font-weight: bold;
          text-transform: uppercase;
          color: ${theme.colors.text};
          background: linear-gradient(138deg, #896cebcc, #896ceb55);
          border-radius: 5px 5px 0 0;
          opacity: 0;
          cursor: default;
          user-select: none;
          transition: opacity 0.3s ease-in-out;
        }

        &:hover {
          border-color: ${theme.colors.purple};
          box-shadow: 0 0 10px ${theme.colors.purple};

          svg {
            color: #222222;
          }
        }

        &:hover span {
          opacity: 1;
        }
      }
    }
  `}
`;
