import { HomeData } from '../../domain/home/home';

import SEO from '../../components/SEO';
import AnimationContainer from '../../components/AnimationContainer';
import WelcomeContainer from '../../components/WelcomeContainer';
import AboutContainer from '../../components/AboutContainer';
import Contact from '../../components/Contact';
import SkillsContainer from '../../components/SkillsContainer';

type HomePageProps = {
  data: HomeData;
};

const HomePage = ({ data }: HomePageProps) => {
  const { welcome, about, contact } = data;

  return (
    <>
      <SEO title="Rafael Martins - Desenvolvedor Frontend" />

      <AnimationContainer animation="appearFromAbove">
        <WelcomeContainer data={welcome} />

        <AboutContainer data={about}>
          <Contact data={contact} />
        </AboutContainer>

        <SkillsContainer />
      </AnimationContainer>
    </>
  );
};

export default HomePage;
