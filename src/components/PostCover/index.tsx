import { Container } from './styles';

type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

const PostCover = ({ coverUrl, alt }: PostCoverProps) => (
  <Container src={coverUrl} alt={alt} />
);

export default PostCover;
