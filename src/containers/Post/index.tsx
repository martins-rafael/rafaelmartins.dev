import { PostData } from '../../domain/posts/post';

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

const Post = ({ post }: PostProps) => (
  <>
    <Header />

    <MainContainer>
      <Heading>{post.title}</Heading>

      <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

      <PostDetails
        author={post.author.name}
        category={post.category.name}
        date={post.created_at}
      />

      <PostContainer content={post.content} />

      <Comments slug={post.slug} title={post.title} />
    </MainContainer>

    <Footer />
  </>
);

export default Post;
