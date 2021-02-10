import { GetStaticProps } from 'next';

import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

import HomePage from '../containers/HomePage';

type HomeProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    // revalidate: 5,
  };
};

const Home = ({ posts }: HomeProps) => <HomePage posts={posts} />;

export default Home;
