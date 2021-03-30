import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

import { SITE_NAME } from '../../config/app-config';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <div>
      © 2021 - Feito com 💜 by <span>{SITE_NAME}</span>
    </div>

    <div>
      <a
        title="GitHub"
        href="https://github.com/martins-rafael"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SiGithub size={32} />
      </a>

      <a
        title="LinkedIn"
        href="https://www.linkedin.com/in/rafaeldcmartins/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SiLinkedin size={32} />
      </a>
    </div>
  </Container>
);

export default Footer;
