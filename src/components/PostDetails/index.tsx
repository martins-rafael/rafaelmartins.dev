import Date from '../Date';
import { Container } from './styles';

type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

const PostDetails = ({ date, author, category }: PostDetailsProps) => (
  <Container>
    Publicado por <Date date={date} />
  </Container>
);

export default PostDetails;
