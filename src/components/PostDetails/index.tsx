import Date from '../Date';
import { Container } from './styles';

type PostDetailsProps = {
  date: string;
  category: string;
};

const PostDetails = ({ date, category }: PostDetailsProps) => (
  <Container>
    Publicado em <Date date={date} /> | <strong>{category}</strong>
  </Container>
);

export default PostDetails;
