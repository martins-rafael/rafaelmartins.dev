import { HomeAbout } from '../../domain/home/home';
import { Container } from './styles';

type AboutContainerProps = {
  data: HomeAbout;
  children: React.ReactNode;
};

const AboutContainer = ({ data, children }: AboutContainerProps) => {
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

export default AboutContainer;
