import { Container } from './styles';

type AnimationContainerProps = {
  animation:
    | 'fadeIn'
    | 'appearFromLeft'
    | 'appearFromRight'
    | 'appearFromAbove'
    | 'appearFromBelow';
  children: React.ReactNode;
};

const AnimationContainer = ({
  children,
  animation,
}: AnimationContainerProps) => (
  <Container animationName={animation}>{children}</Container>
);

export default AnimationContainer;
