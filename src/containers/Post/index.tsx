import Head from 'next/head';

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

import { Container } from './styles';

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => (
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
      <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

      <Container>
        <Heading>{post.title}</Heading>

        <PostDetails category={post.category.name} date={post.created_at} />

        <PostContainer content={post.content} />

        <Comments slug={post.slug} title={post.title} />
      </Container>
    </MainContainer>

    <Footer />
  </>
);

export default Post;
