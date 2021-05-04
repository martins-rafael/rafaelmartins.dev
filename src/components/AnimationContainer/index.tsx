import { Container } from './styles';

interface AnimationContainerProps {
  children: React.ReactNode;
}

const AnimationContainer = ({ children }: AnimationContainerProps) => (
  <Container>{children}</Container>
);

export default AnimationContainer;
