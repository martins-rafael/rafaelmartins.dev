import { HomeData } from 'types/home';

import SEO from 'components/SEO';
import AnimationContainer from 'components/AnimationContainer';
import Welcome from 'components/Welcome';
import AboutContainer from 'components/About';
import Contact from 'components/Contact';
import Skills from 'components/Skills';

type HomeTemplateProps = {
  data: HomeData;
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  const { welcome, about, contact } = data;

  return (
    <>
      <SEO title="Home | Rafael Martins" />

      <AnimationContainer animation="appearFromAbove">
        <Welcome data={welcome} />

        <AboutContainer data={about}>
          <Contact data={contact} />
        </AboutContainer>

        <Skills />
      </AnimationContainer>
    </>
  );
};

export default HomeTemplate;
