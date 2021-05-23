import { HomeContact } from '../../domain/home/home';

type ContactProps = {
  data: HomeContact;
};

const Contact = ({ data }: ContactProps) => {
  const { contact } = data;

  return (
    <p>
      Você pode entrar em contato comigo através do{' '}
      <a
        title={contact[0].label}
        href={contact[0].url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {contact[0].label}
      </a>
      , ver o que ando desenvolvendo no{' '}
      <a
        title={contact[1].label}
        href={contact[1].url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {contact[1].label}
      </a>{' '}
      e mandar um oi no{' '}
      <a
        title={contact[2].label}
        href={contact[2].url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {contact[2].label}
      </a>
      .
    </p>
  );
};

export default Contact;
