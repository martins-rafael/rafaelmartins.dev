import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './styles';

type CommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ slug, title }: CommentsProps) => (
  <Container>
    <DiscussionEmbed
      shortname="rdcm-blog"
      config={{
        url: `${SITE_URL}/post/${slug}`,
        identifier: slug,
        title: title,
        language: 'pt_BR',
      }}
    />
  </Container>
);

export default Comments;
