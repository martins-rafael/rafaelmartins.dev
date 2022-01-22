import { GetStaticProps } from 'next';

import { getAllPosts } from 'data/posts';
import { PostData } from 'types/post';

import BlogTemplate from 'templates/Blog';

type BlogProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=30');

  return {
    props: { posts },
    // revalidate: 5,
  };
};

const Blog = ({ posts }: BlogProps) => <BlogTemplate posts={posts} />;

export default Blog;
