import { PostData } from '../../domain/posts/post';

import Header from '../../components/Header';
import { Container } from './styles';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps) => (
  <>
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
  </>
);

export default HomePage;
