import Head from 'next/head';

import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/app-config';

import SEO from '../../components/SEO';
import AnimationContainer from '../../components/AnimationContainer';
import PostCard from '../../components/PostCard';

type BlogPageProps = {
  posts: PostData[];
};

const BlogPage = ({ posts }: BlogPageProps) => (
  <>
      <SEO title={`Blog | ${SITE_NAME}`} />

    <AnimationContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AnimationContainer>
  </>
);

export default BlogPage;
