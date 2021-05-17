import Head from 'next/head';
import { SITE_NAME, SITE_URL } from '../../config/app-config';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ||
          'Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript.'
        }
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description ||
          'Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript.'
        }
      />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={`${SITE_URL}images/og-image.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={
          description ||
          'Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript.'
        }
      />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:image" content={`${SITE_URL}images/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="640" />
    </Head>
  );
};

export default SEO;
