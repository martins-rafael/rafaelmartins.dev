import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import { Container, HeaderContent, LinksContainer } from './styles';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Container>
      <HeaderContent>
        <Link href="/">
          <a>
            <span>{'{'}</span>R<span>{'}'}</span>
          </a>
        </Link>

        <button onClick={handleMenu}>
          {menuIsOpen ? <CgClose /> : <CgMenuRightAlt />}
        </button>

        <LinksContainer active={menuIsOpen}>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <a>Portfólio</a>
            </Link>
          </li>
        </LinksContainer>
      </HeaderContent>
    </Container>
  );
};

export default Header;
