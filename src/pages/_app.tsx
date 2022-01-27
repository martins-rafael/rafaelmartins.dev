import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import BaseTemplate from 'templates/Base';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NextNProgress
        color={theme.colors.green}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <BaseTemplate>
        <Component {...pageProps} />
      </BaseTemplate>
    </ThemeProvider>
  );
};

export default MyApp;
