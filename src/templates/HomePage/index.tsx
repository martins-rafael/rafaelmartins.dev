import Head from 'next/head';
import Image from 'next/image';

import SEO from '../../components/SEO';
import AnimationContainer from '../../components/AnimationContainer';

import { Container } from './styles';

const HomePage = () => (
  <>
    <SEO title="Rafael Martins - Desenvolvedor Frontend" />

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
