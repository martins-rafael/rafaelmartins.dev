import { GetStaticPaths, GetStaticProps } from 'next';

import { PostData } from 'types/post';
import { countAllPosts } from 'data/posts';
import { getAllPosts } from 'data/posts';
import { getPost } from 'data/posts';

import PostTemplate from 'templates/Post';

type PostProps = {
  post: PostData;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPost(params.slug);

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};

const Post = ({ post }: PostProps) => <PostTemplate post={post} />;

export default Post;
