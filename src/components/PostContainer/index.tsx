import { Container } from './styles';

type PostContainerProps = {
  content: string;
};

const PostContainer = ({ content }: PostContainerProps) => (
  <Container dangerouslySetInnerHTML={{ __html: content }} />
);

export default PostContainer;
