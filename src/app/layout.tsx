"use client";
import "./globals.css";

import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/bugsbirt.png"/>
        <meta name="description" content="i like to make things sometimes"/>
        <meta name="theme-color" content="#5b65e8" />
        <meta name="url" content="http://bugsbirt.xyz"/>
        <link rel="icon" href="/bugsbirt.png" type="image/x-icon" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>bugsbirt</title>
      </head>
      <body>
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>

          {children}
      </body>
    </html>
  );
}