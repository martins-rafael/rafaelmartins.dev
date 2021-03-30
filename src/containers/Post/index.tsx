import Head from 'next/head';
import { useEffect } from 'react';

import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/app-config';
import { removeHtml } from '../../utils/remove-html';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../components/MainContainer';
import Heading from '../../components/Heading';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import PostContainer from '../../components/PostContainer';
import Comments from '../../components/Comments';

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => {
  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let removeAds = null;

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      removeAds = setTimeout(() => {
        document
          .querySelectorAll('iframe[src*=ads]')
          .forEach((iframe) => iframe.remove());
      }, 1000);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_NAME} Blog
        </title>

        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>

      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>

        <PostDetails category={post.category.name} date={post.created_at} />

        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

        <PostContainer content={post.content} />

        <Comments slug={post.slug} title={post.title} />
      </MainContainer>

      <Footer />
    </>
  );
};

export default Post;
