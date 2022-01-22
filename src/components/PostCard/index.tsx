import Link from 'next/link';

import { PostData } from 'types/post';
import PostDetails from 'components/PostDetails';

import { Container, PostCardHeading } from './styles';

type PostCardProps = {
  post: PostData;
  effect: string;
};

const PostCard = ({ post, effect }: PostCardProps) => {
  return (
    <Container data-aos={effect}>
      <Link href="/post/[slug]" as={`/post/${post.slug}`}>
        <a>
          <PostCardHeading>{post.title}</PostCardHeading>

          <PostDetails
            author={post.author.name}
            date={post.created_at}
            category={post.category.name}
          />

          <p>{post.subtitle}</p>
        </a>
      </Link>
    </Container>
  );
};

export default PostCard;
