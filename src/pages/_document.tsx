import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { SITE_URL } from 'config/app-config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="any" href="/favicon.ico" />
          <link rel="icon" type="image/svg+xml" href="/images/icon.svg" />
          <link rel="apple-touch-icon" href="/images/icon-180.png" />
          <meta name="theme-color" content="#121214" />
          <link rel="canonical" href={SITE_URL} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
