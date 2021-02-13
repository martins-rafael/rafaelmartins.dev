import { Container } from './styles';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => (
  <Container>{children}</Container>
);

export default Heading;
