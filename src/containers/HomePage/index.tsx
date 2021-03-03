import Head from 'next/head';

import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/app-config';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';

import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps) => (
  <>
    <Head>
      <title>{SITE_NAME} Blog</title>
      <meta
        name="description"
        content="Desenvolvimento web, tecnologia e afins."
      />
    </Head>

    <Header />

    <MainContainer>
      <Container>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            slug={post.slug}
            title={post.title}
            cover={post.cover.formats.small.url}
          />
        ))}
      </Container>
    </MainContainer>

    <Footer />
  </>
);

export default HomePage;
