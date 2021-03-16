import { SITE_NAME } from '../../config/app-config';
import { Container } from './styles';

const Footer = () => (
  <Container>
    © 2021 - Feito com 💜 by{' '}
    <a
      href="https://github.com/martins-rafael"
      target="_blank"
      rel="noreferrer noopener"
    >
      {SITE_NAME}
    </a>{' '}
  </Container>
);

export default Footer;
