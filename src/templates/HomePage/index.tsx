import Head from 'next/head';
import Image from 'next/image';

import { SITE_NAME } from '../../config/app-config';
import BaseTemplate from '../BaseTemplate';
import ParticlesBackground from '../../components/ParticlesBackground';

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

    <BaseTemplate>
      <ParticlesBackground />
      <Container>
        <div>
          <span>Olá, eu sou</span>
          <h1>
            Rafael <br /> Martins
          </h1>
          <p>
            Desenvolvedor Frontend <span>&lt; / &gt;</span>
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
    </BaseTemplate>
  </>
);

export default HomePage;
