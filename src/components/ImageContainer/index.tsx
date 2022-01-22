import Image from 'next/image';
import { Container } from './styles';

type ImageContainerProps = {
  url: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
};

const ImageContainer = ({
  url,
  alt,
  width,
  height,
  style,
}: ImageContainerProps) => (
  <Container style={{ paddingTop: `${(height / width) * 100}%`, ...style }}>
    <div>
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
      />
    </div>
  </Container>
);

export default ImageContainer;
