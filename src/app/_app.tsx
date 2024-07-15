"use client";
import React from 'react';
import type { AppProps } from 'next/app';
import RootLayout from './layout';
import 'flowbite';
function App({ Component, pageProps }: AppProps) {
  return (

      <Component {...pageProps} />
  );
}

export default App;