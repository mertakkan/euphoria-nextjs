// src/app/layout.tsx
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Head from 'next/head';
import './styles/globals.css';
import type { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Metadata } from 'next';
import { Providers } from './providers';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Project Euphoria',
  description: 'E-Commerce Next.js Project Euphoria',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>{/* SEO */}</head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
