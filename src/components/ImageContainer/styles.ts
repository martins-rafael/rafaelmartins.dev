import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 0;
  border-radius: 10px;
  overflow: hidden;
  background-position: center center;
  background-size: 100%;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  img {
    transition: transform 0.5s ease-in-out;
    border-radius: 10px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
