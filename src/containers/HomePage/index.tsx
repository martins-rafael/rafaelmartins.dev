import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomePageProps) => (
  <Container>
    {posts.map((post) => (
      <h2 key={post.slug}>{post.title}</h2>
    ))}
  </Container>
);

export default HomePage;
