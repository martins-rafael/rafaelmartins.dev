import { Container } from './styles';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => (
  <Container>{children}</Container>
);

export default MainContainer;
