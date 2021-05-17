import Image from 'next/image';

import SEO from '../../components/SEO';
import AnimationContainer from '../../components/AnimationContainer';
import SkillsContainer from '../../components/SkillsContainer';

import { WelcomeContainer, DescriptionContainer } from './styles';

const HomePage = () => (
  <>
    <SEO title="Rafael Martins - Desenvolvedor Frontend" />

    <AnimationContainer animation="appearFromAbove">
      <WelcomeContainer>
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
      </WelcomeContainer>

      <DescriptionContainer>
        <h2>
          <span>&gt;</span> SOBRE
        </h2>

        <p>
          Web developer autodidata, atualmente estou me aprofundando no
          desenvolvimento Frontend, com foco na construção de interfaces
          responsivas, escrevendo código limpo e eficiente. Apaixonado por
          tecnologia, livros, games e música.
        </p>

        <p>
          Minhas techs favoritas sâo: HTML5, CSS(SASS ❤), JavaScript e Next.js.
        </p>

        <p>
          Você pode entrar em contato comigo através do{' '}
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/rafaeldcmartins/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          , ver o que ando desenvolvendo no{' '}
          <a
            title="GitHub"
            href="https://github.com/martins-rafael"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>{' '}
          e mandar um oi no{' '}
          <a
            title="Discord"
            href="http://discordapp.com/users/681293490428313641"
            target="_blank"
            rel="noreferrer noopener"
          >
            Discord (Rafa Martins#1783)
          </a>
          .
        </p>
      </DescriptionContainer>

      <SkillsContainer />
    </AnimationContainer>
  </>
);

export default HomePage;
