import { BsCalendar, BsFillPersonFill } from 'react-icons/bs';
import Date from '../Date';
import { Container } from './styles';

type PostDetailsProps = {
  date: string;
  author: string;
};

const PostDetails = ({ date, author }: PostDetailsProps) => (
  <Container>
    <div>
      <BsCalendar size={18} /> <Date date={date} />
    </div>

    <div>
      <BsFillPersonFill size={18} /> {author}
    </div>
  </Container>
);

export default PostDetails;
