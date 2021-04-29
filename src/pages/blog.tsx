import { GetStaticProps } from 'next';

import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

import BlogPage from '../templates/BlogPage';

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

const Blog = ({ posts }: BlogProps) => <BlogPage posts={posts} />;

export default Blog;
