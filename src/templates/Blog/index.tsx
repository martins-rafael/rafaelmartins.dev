import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { PostData } from 'types/post';
import { SITE_NAME } from 'config/app-config';

import SEO from 'components/SEO';
import AnimationContainer from 'components/AnimationContainer';
import PostCard from 'components/PostCard';

type BlogTemplateProps = {
  posts: PostData[];
};

const BlogTemplate = ({ posts }: BlogTemplateProps) => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <SEO title={`Blog | ${SITE_NAME}`} />

      <AnimationContainer animation="appearFromAbove">
        {posts.map((post) => (
          <PostCard effect="fade-up" key={post.id} post={post} />
        ))}
      </AnimationContainer>
    </>
  );
};

export default BlogTemplate;
