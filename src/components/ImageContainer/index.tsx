import Image from 'next/image';
import { Container } from './styles';

type ImageContainerProps = {
  url: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
};

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

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
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(width, height),
        )}`}
      />
    </div>
  </Container>
);

export default ImageContainer;
