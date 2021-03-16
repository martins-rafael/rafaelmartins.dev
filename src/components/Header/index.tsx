import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Container } from './styles';

const Header = () => (
  <Container>
    <div>
      <Link href="/">
        <a>&lt;RafaMartins /&gt; Blog</a>
      </Link>

      <div>
        <a
          href="https://github.com/martins-rafael"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rafaeldcmartins/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiLinkedin />
        </a>
      </div>
    </div>
  </Container>
);

export default Header;
