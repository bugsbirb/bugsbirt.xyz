"use client";
import React from 'react';
import type { AppProps } from 'next/app';
import RootLayout from './layout';

function App({ Component, pageProps }: AppProps) {
  return (

      <Component {...pageProps} />
  );
}

export default App;