import { HomeAbout } from 'types/home';
import { Container } from './styles';

type AboutProps = {
  data: HomeAbout;
  children: React.ReactNode;
};

const About = ({ data, children }: AboutProps) => {
  const { about } = data;

  return (
    <Container>
      <h2>
        <span>&gt;</span> {about.title}
      </h2>

      <div dangerouslySetInnerHTML={{ __html: about.content }} />

      {children}
    </Container>
  );
};

export default About;
