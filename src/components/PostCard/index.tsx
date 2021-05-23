import Link from 'next/link';
import { removeHtml } from '../../utils/remove-html';

import PostDetails from '../PostDetails';
import ImageContainer from '../ImageContainer';

import { Container, CategoryBadge, PostCardHeading } from './styles';

type PostCardProps = {
  post: {
    slug: string;
    title: string;
    author: { name: string };
    category: { name: string };
    created_at: string;
    content: string;
    cover: {
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
  effect: string;
};

const PostCard = ({ post, effect }: PostCardProps) => {
  const postContent = `${removeHtml(post.content)
    .slice(0, 180)
    .replace(/#/g, '')}... `;

  return (
    <Container data-aos={effect}>
      <ImageContainer
        url={post.cover.formats.small.url}
        alt={post.title}
        width={280}
        height={200}
      >
        <CategoryBadge>{post.category.name}</CategoryBadge>
      </ImageContainer>

      <div>
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a>
            <PostCardHeading>{post.title}</PostCardHeading>
          </a>
        </Link>

        <PostDetails author={post.author.name} date={post.created_at} />

        <p>{postContent}</p>

        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a>Continue lendo »</a>
        </Link>
      </div>
    </Container>
  );
};

export default PostCard;
