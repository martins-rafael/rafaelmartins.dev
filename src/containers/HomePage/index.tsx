import { PostData } from '../../domain/posts/post';

import Header from '../../components/Header';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps) => (
  <>
    <Header />
    <Container>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </Container>
  </>
);

export default HomePage;
