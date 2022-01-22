import {
  BsCalendar,
  BsFillPersonFill,
  BsFillCollectionFill,
} from 'react-icons/bs';
import { formatDate } from 'utils/formatDate';
import { Container } from './styles';

type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  const postDate = formatDate(date);

  return (
    <Container>
      <div>
        <BsCalendar size={18} />
        <span>{postDate}</span>
      </div>

      <div>
        <BsFillPersonFill size={18} />
        {author}
      </div>

      <div>
        <BsFillCollectionFill size={18} />
        {category}
      </div>
    </Container>
  );
};

export default PostDetails;
