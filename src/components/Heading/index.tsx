import { Container } from './styles';

type HeadingProps = {
  size: 'medium' | 'large' | 'superLarge';
  children: React.ReactNode;
};

const Heading = ({ children, size }: HeadingProps) => (
  <Container size={size}>{children}</Container>
);

export default Heading;
