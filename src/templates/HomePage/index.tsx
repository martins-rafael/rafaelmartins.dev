import Head from 'next/head';
import Image from 'next/image';

import { SITE_NAME } from '../../config/app-config';

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
