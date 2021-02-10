import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styles';

type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <a>
          <PostCardCover>
            <img src={cover} alt={title} />
          </PostCardCover>

          <PostCardHeading>{title}</PostCardHeading>
        </a>
      </Link>
    </Container>
  );
};

export default PostCard;
