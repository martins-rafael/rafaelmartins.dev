import Head from 'next/head';
import Image from 'next/image';

import { SITE_NAME, SITE_URL } from '../../config/app-config';

import ParticlesBackground from '../../components/ParticlesBackground';
import AnimationContainer from '../../components/AnimationContainer';

import { Container } from './styles';

const HomePage = () => (
  <>
    <Head>
      <title>{SITE_NAME}</title>
      <meta
        name="description"
        content="Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript."
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE_NAME} />
      <meta
        property="og:description"
        content="Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript."
      />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={`${SITE_URL}images/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_NAME} />
      <meta
        name="twitter:description"
        content="Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript."
      />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:image" content={`${SITE_URL}images/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="640" />
    </Head>

    <ParticlesBackground />

    <AnimationContainer>
      <Container>
        <div>
          <span>
            <Image
              src="/images/hi.gif"
              alt="Olá"
              width={28}
              height={27}
              layout="fixed"
            />{' '}
            Olá, eu sou
          </span>

          <h1>Rafael Martins</h1>

          <p>
            Desenvolvedor Frontend <span>&lt;/&gt;</span>
          </p>
        </div>

        <Image
          src="/images/banner.svg"
          alt="Banner"
          width={384}
          height={320}
          layout="responsive"
        />
      </Container>
    </AnimationContainer>
  </>
);

export default HomePage;
