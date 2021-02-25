import { PostData } from '../../domain/posts/post';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../components/MainContainer';
import Heading from '../../components/Heading';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';

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
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainContainer>

    <Footer />
  </>
);

export default Post;
