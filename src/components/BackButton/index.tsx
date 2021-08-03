import { useRouter } from 'next/dist/client/router';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { Button } from './styles';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <FaLongArrowAltLeft size={20} />
      Voltar
    </Button>
  );
};

export default BackButton;
