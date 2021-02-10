import { PostData } from '../../domain/posts/post';

import Header from '../../components/Header';
import { Container } from './styles';
import MainContainer from '../../components/MainContainer';

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps) => (
  <>
    <Header />
    <MainContainer>
      <Container>
        {posts.map((post) => (
          <h2 key={post.slug}>{post.title}</h2>
        ))}
      </Container>
    </MainContainer>
  </>
);

export default HomePage;
