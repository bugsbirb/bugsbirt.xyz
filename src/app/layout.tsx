"use client";
import "./globals.css";
import 'flowbite';
import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/bugsbirt.png" className="h-8 rounded-lg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <link rel="stylesheet" href="../path/to/flowbite/dist/flowbite.min.css" />
        <title>bugsbirt</title>
      </head>
      <body>

          {children}
      </body>
    </html>
  );
}