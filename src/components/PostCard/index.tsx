import Link from 'next/link';
import { removeHtml } from '../../utils/remove-html';

import PostDetails from '../PostDetails';

import { Container, PostCardCover, PostCardHeading } from './styles';

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
};

const PostCard = ({ post }: PostCardProps) => {
  const postContent = `${removeHtml(post.content)
    .slice(0, 220)
    .replace(/#/g, '')}... `;

  return (
    <Container>
      <PostCardCover>
        <img src={post.cover.formats.small.url} alt={post.title} />
      </PostCardCover>

      <div>
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a>
            <PostCardHeading>{post.title}</PostCardHeading>
          </a>
        </Link>

        <PostDetails category={post.category.name} date={post.created_at} />

        <p>{postContent}</p>

        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a>Ler mais</a>
        </Link>
      </div>
    </Container>
  );
};

export default PostCard;
