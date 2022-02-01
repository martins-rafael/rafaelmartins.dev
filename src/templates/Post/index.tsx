import { PostData } from 'types/post';
import { SITE_NAME } from 'config/app-config';
import { removeHtml } from 'utils/remove-html';

import SEO from 'components/SEO';
import AnimationContainer from 'components/AnimationContainer';
import BackButton from 'components/BackButton';
import Heading from 'components/Heading';
import PostDetails from 'components/PostDetails';
import PostCover from 'components/PostCover';
import PostContainer from 'components/PostContainer';

type PostTemplateProps = {
  post: PostData;
};

const PostTemplate = ({ post }: PostTemplateProps) => {
  return (
    <>
      <SEO
        title={`${post.title} | ${SITE_NAME}`}
        description={removeHtml(post.content).slice(0, 150)}
        imageUrl={post.cover.formats.large.url}
      />

      <AnimationContainer animation="appearFromRight">
        <BackButton />

        <Heading size="superLarge">{post.title}</Heading>

        <PostDetails
          author={post.author.name}
          date={post.created_at}
          category={post.category.name}
        />

        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

        <PostContainer content={post.content} />
      </AnimationContainer>
    </>
  );
};

export default PostTemplate;
