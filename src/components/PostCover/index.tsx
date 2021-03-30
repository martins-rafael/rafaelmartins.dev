import Image from 'next/image';
import { Container } from './styles';

type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

const PostCover = ({ coverUrl, alt }: PostCoverProps) => (
  <Container>
    <Image
      src={coverUrl}
      alt={alt}
      width={960}
      height={540}
      layout="responsive"
    />
  </Container>
);

export default PostCover;
