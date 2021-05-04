import { GetStaticPaths, GetStaticProps } from 'next';

import { PostData } from '../../domain/posts/post';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';

import PostPage from '../../templates/PostPage';

type DynamicPostProps = {
  post: PostData;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPost(context.params.slug);

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};

const DynamicPost = ({ post }: DynamicPostProps) => <PostPage post={post} />;

export default DynamicPost;
