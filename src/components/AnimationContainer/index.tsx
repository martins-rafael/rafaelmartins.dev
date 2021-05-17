import { Container } from './styles';

interface AnimationContainerProps {
  animation:
    | 'fadeIn'
    | 'appearFromLeft'
    | 'appearFromRight'
    | 'appearFromAbove';
  children: React.ReactNode;
}

const AnimationContainer = ({
  children,
  animation,
}: AnimationContainerProps) => (
  <Container animationName={animation}>{children}</Container>
);

export default AnimationContainer;
