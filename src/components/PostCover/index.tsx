import ImageContainer from '../ImageContainer';
import { Container } from './styles';

type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

const PostCover = ({ coverUrl, alt }: PostCoverProps) => (
  <Container>
    <ImageContainer url={coverUrl} alt={alt} width={960} height={540} />
  </Container>
);

export default PostCover;
