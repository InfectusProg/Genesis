import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { store } from '@/redux/store';

import '@/styles/globals.scss';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress />
      <Component {...pageProps} />
    </Provider>
  );
}
