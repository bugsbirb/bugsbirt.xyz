"use client";
import "./globals.css";
import React, { ReactNode } from 'react';



interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>

          {children}
      </body>
    </html>
  );
}