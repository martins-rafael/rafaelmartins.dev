import Link from 'next/link';
import { Container } from './styles';

const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <span>{'{'}</span>RafaMartins<span>{'}'}</span>
      </a>
    </Link>
  </Container>
);

export default Header;
