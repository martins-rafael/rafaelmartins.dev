import { useEffect } from 'react';
import Prism from 'prismjs';

import { PrismWrapper } from './prism-omni';
import { Container } from './styles';

type PostContainerProps = {
  content: string;
};

const PostContainer = ({ content }: PostContainerProps) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  return (
    <PrismWrapper>
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </PrismWrapper>
  );
};

export default PostContainer;
