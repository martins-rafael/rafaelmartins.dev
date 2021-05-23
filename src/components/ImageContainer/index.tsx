import Image from 'next/image';
import { Container } from './styles';

type ImageContainerProps = {
  url: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ImageContainer = ({
  url,
  alt,
  width,
  height,
  style,
  children,
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
      {children}
    </div>
  </Container>
);

export default ImageContainer;
