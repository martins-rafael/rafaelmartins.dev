import { AppProps } from 'next/app';

import BaseTemplate from 'templates/Base';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BaseTemplate>
        <Component {...pageProps} />
      </BaseTemplate>
    </ThemeProvider>
  );
};

export default MyApp;
