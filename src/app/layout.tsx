// src/app/layout.tsx
'use client';
import { SessionProvider } from 'next-auth/react';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Head from 'next/head';
import './styles/globals.css';
import type { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>Euphoria - E-Commerce Next.js Project</title>
        <meta
          name="description"
          content="E-Commerce Next.js Project Euphoria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
