import Image from 'next/image';
import Link from 'next/link';

import { SITE_NAME } from 'config/app-config';
import SEO from 'components/SEO';

import { Container } from './styles';

const NotFoundTemplate = () => (
  <>
    <SEO title={`Página não encontrada | ${SITE_NAME}`} />

    <Container>
      <Image
        src="/images/not-found.svg"
        alt="404"
        width={650}
        height={353}
        layout="responsive"
      />

      <h2>Eita, cadê a página?</h2>

      <p>
        Que tal voltar para{' '}
        <Link href="/">
          <a title="Home">Home</a>
        </Link>
        ?
      </p>
    </Container>
  </>
);

export default NotFoundTemplate;
