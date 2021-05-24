import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  animationName:
    | 'fadeIn'
    | 'appearFromLeft'
    | 'appearFromRight'
    | 'appearFromAbove';
}

const animations = {
  fadeIn: keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
  appearFromLeft: keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,
  appearFromRight: keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,
  appearFromAbove: keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
};

export const Container = styled.div<ContainerProps>`
  animation: ${({ animationName }) => animations[animationName]} 1s;
  @media only screen and (max-width: 768px) {
    animation: ${animations.appearFromAbove} 1s;
  }
`;
