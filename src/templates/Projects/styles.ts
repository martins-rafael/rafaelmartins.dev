import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      text-shadow: 0 0 15px;
      color: ${theme.colors.green};
    }

    a {
      padding: ${theme.spacings.small} ${theme.spacings.medium};
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      color: ${theme.colors.text};
      background: #222222;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;

      &:hover {
        text-shadow: initial;
        box-shadow: 0 0 0 4px ${theme.colors.background},
          0 0 0 8px ${theme.colors.purple}, 0 0 20px ${theme.colors.purple};
      }
    }

    section > a {
      margin-top: ${theme.spacings.superLarge};
      width: 100%;
      border-color: transparent;
    }
  `}
`;

export const ProjectContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 2rem;
    margin-top: 6rem;
    padding: 6rem ${theme.spacings.large};
    background: #22222255;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #00000022;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: ${theme.spacings.large} ${theme.spacings.medium};
    }

    div:first-of-type {
      align-self: end;
      max-width: 100%;
      border-radius: 10px;

      @media only screen and (max-width: 768px) {
        grid-column: 1 !important;
      }
    }

    div {
      display: grid;
      grid-template-rows: auto 1fr auto auto;
      gap: ${theme.spacings.medium};

      @media only screen and (max-width: 768px) {
        grid-column: 1 !important;
      }

      h3 {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 25px;
          height: 4px;
          background: ${theme.colors.purple};
          border-radius: 4px;
          box-shadow: 0 0 10px ${theme.colors.purple};
        }
      }

      p {
        align-self: center;
      }

      ul li {
        margin-bottom: ${theme.spacings.extraSmall};
        list-style: none;

        span {
          font-weight: 700;
          text-shadow: 0 0 5px;
        }
      }
    }
  `}
`;
