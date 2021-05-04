import Head from 'next/head';

import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/app-config';

import AnimationContainer from '../../components/AnimationContainer';
import PostCard from '../../components/PostCard';

type BlogPageProps = {
  posts: PostData[];
};

const BlogPage = ({ posts }: BlogPageProps) => (
  <>
    <Head>
      <title>Blog | {SITE_NAME}</title>
      <meta
        name="description"
        content="Desenvolvimento web, tecnologia e afins."
      />
    </Head>

    <AnimationContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AnimationContainer>
  </>
);

export default BlogPage;
