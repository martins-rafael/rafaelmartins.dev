import Image from 'next/image';
import { HomeWelcome } from '../../domain/home/home';
import { Container } from './styles';

type WelcomeContainerProps = {
  data: HomeWelcome;
};

const WelcomeContainer = ({ data }: WelcomeContainerProps) => {
  const { welcome } = data;

  return (
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

        <h1>{welcome.name}</h1>

        <p>
          {welcome.role} <span>&lt;/&gt;</span>
        </p>
      </div>

      <Image
        src={welcome.banner.url}
        alt={welcome.banner.name}
        width={384}
        height={320}
        layout="responsive"
      />
    </Container>
  );
};

export default WelcomeContainer;
